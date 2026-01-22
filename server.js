const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');
const mysql = require('mysql2/promise');
const axios = require('axios');
require('dotenv').config();

const PORT = process.env.PORT || 3000;

// MySQL Connection
const pool = mysql.createPool({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '#Gullulalchi2',
    database: process.env.DB_NAME || 'chatbot_db',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

// --- API CONFIG ---
const API_URL = 'https://apis.mypropertyfact.in/projects/search-by-type-city-budget';
const IMAGE_BASE_URL = 'https://apis.mypropertyfact.in/get/images/properties/';

const PROPERTY_TYPE_MAP = {
    'residential': 1,
    'commercial': 2,
    'new launch': 1,
    'new launches': 1
};

const CITY_MAP = {
    'agra': 1, 'noida': 2, 'ludhiana': 6, 'mumbai': 14, 'ghaziabad': 15,
    'gurugram': 17, 'bangalore': 18, 'jaipur': 19, 'kochi': 20, 'hyderabad': 21,
    'greater noida': 26, 'noida extension': 27, 'lucknow': 31, 'chandigarh': 33,
    'goa': 41, 'delhi': 2, 'pune': 14, 'faridabad': 35
};
// Aliases for common variations
const CITY_ALIASES = {
    'gurgaon': 'gurugram',
    'gururam': 'gurugram',
    'benglore': 'bangalore',
    'banglore': 'bangalore',
    'bengaluru': 'bangalore',
    'bengluru': 'bangalore',
    'new delhi': 'delhi',
    'gr noida': 'greater noida',
    'gzb': 'ghaziabad'
};
const ALLOWED_CITIES = Object.keys(CITY_MAP);

// --- SESSION STORE ---
const sessions = {};
const STATES = {
    WELCOME: 'WELCOME',
    TYPE_SELECTED: 'TYPE',
    CITY_SELECTED: 'CITY',
    RESULTS: 'RESULTS'
};

async function generateAIResponse(message, sessionId) {
    const msg = message.trim().toLowerCase();

    // 0. Initialize Session
    if (!sessions[sessionId]) {
        sessions[sessionId] = { step: STATES.WELCOME, data: {} };
    }
    const session = sessions[sessionId];

    // 1. Global Commands
    if (msg === 'restart' || msg === 'reset' || msg === 'hi' || msg === 'hello') {
        session.step = STATES.WELCOME;
        session.data = {};
        session.flags = null; // Clear flags
        return {
            reply: `Hi 👋\nWelcome to My Property Fact!\n\nReady to find the perfect property? 🏡✨\n\nPlease select your property type to get started.`,
            options: ['Commercial', 'Residential', 'New Launch']
        };
    }

    // Follow up handler
    if ((msg === 'yes, explore more' || msg === 'yes') && !session?.flags?.waitingForConfirmation && session.step !== STATES.RESULTS) {
        session.step = STATES.WELCOME;
        return {
            reply: `Great! Let's find more properties.\n\nPlease select your property type to get started.`,
            options: ['Commercial', 'Residential', 'New Launch']
        };
    }
    if ((msg === 'no, thank you' || msg === 'no') && !session?.flags?.waitingForConfirmation && session.step !== STATES.RESULTS) {
        return {
            reply: `It was a pleasure helping you! Have a great day. 👋`,
            options: ['Restart']
        };
    }

    // 2. State Machine
    switch (session.step) {
        case STATES.WELCOME:
            if (msg.includes('commercial') || msg.includes('residential') || msg.includes('new launch')) {
                let typeKey = 'residential';
                if (msg.includes('commercial')) typeKey = 'commercial';
                if (msg.includes('residential')) typeKey = 'residential';
                if (msg.includes('new launch')) typeKey = 'new launch';

                session.data.type = typeKey;
                session.step = STATES.TYPE_SELECTED;

                return {
                    reply: `Which city are you interested in?`,
                    options: ['Noida', 'Gurugram', 'Ghaziabad', 'Greater Noida', 'Faridabad', 'Delhi', 'Other']
                };
            } else {
                return {
                    reply: `Hi 👋\nWelcome to My Property Fact!\n\nReady to find the perfect property? 🏡✨\n\nPlease select your property type to get started.`,
                    options: ['Commercial', 'Residential', 'New Launch']
                };
            }

        case STATES.TYPE_SELECTED:
            let inputCity = msg.trim().toLowerCase();
            // Normalize Alias
            if (CITY_ALIASES[inputCity]) {
                inputCity = CITY_ALIASES[inputCity];
            }

            // Check for "Other" Selection
            if (inputCity === 'other') {
                session.flags = { waitingForCity: true };
                return {
                    reply: `Please enter your preferred city:`,
                    options: []
                };
            }

            // Helper for Fuzzy Match
            const getLevenshteinDistance = (a, b) => {
                if (a.length === 0) return b.length;
                if (b.length === 0) return a.length;
                const matrix = [];
                for (let i = 0; i <= b.length; i++) matrix[i] = [i];
                for (let j = 0; j <= a.length; j++) matrix[0][j] = j;
                for (let i = 1; i <= b.length; i++) {
                    for (let j = 1; j <= a.length; j++) {
                        if (b.charAt(i - 1) == a.charAt(j - 1)) {
                            matrix[i][j] = matrix[i - 1][j - 1];
                        } else {
                            matrix[i][j] = Math.min(matrix[i - 1][j - 1] + 1, matrix[i][j - 1] + 1, matrix[i - 1][j] + 1);
                        }
                    }
                }
                return matrix[b.length][a.length];
            };

            // Handle "Buy Property" recovery
            if (msg === 'buy property') {
                session.flags = null;
                session.step = STATES.WELCOME;
                return {
                    reply: `Please select your property type to get started.`,
                    options: ['Commercial', 'Residential', 'New Launch']
                };
            }

            // Check if waiting for Confirmation
            if (session.flags && session.flags.waitingForConfirmation) {
                if (msg === 'yes' || msg === 'yes, correct') {
                    session.data.city = session.flags.suggestedCity;
                    session.step = STATES.CITY_SELECTED;
                    session.flags = null;
                    return {
                        reply: `What is your budget range?`,
                        options: ['Up to ₹1 Cr', '₹1 Cr – ₹3 Cr', '₹3 Cr – ₹5 Cr', 'Above ₹5 Cr']
                    };
                } else {
                    // NO -> Re-show list with specific fallback
                    session.flags = null;
                    return {
                        reply: `Currently, we don’t have any projects in this location.\n\nWould you like to see projects in another city? \n\nPlease select a city:`,
                        options: ['Noida', 'Gurugram', 'Ghaziabad', 'Greater Noida', 'Faridabad', 'Delhi', 'Other']
                    };
                }
            }

            // Check if waiting for custom input via "Other"
            if (session.flags && session.flags.waitingForCity) {
                const matched = ALLOWED_CITIES.find(c => inputCity.includes(c));

                let fuzzyMatch = null;
                if (!matched) {
                    for (const city of ALLOWED_CITIES) {
                        const dist = getLevenshteinDistance(inputCity, city);
                        const threshold = city.length > 5 ? 3 : 2;
                        if (dist <= threshold) {
                            fuzzyMatch = city;
                            break;
                        }
                    }
                }

                const isQuestion = /^(who|what|where|when|why|how|can|do|does|is|are)\b/.test(inputCity);
                const hasKeywords = /(joke|weather|movie|song|story|poem|president|minister|color|hair|time|date|news|cricket|score)/.test(inputCity);
                const longSentence = inputCity.split(/\s+/).length > 3;

                const isOutOfScope = isQuestion || hasKeywords || longSentence;

                if (matched) {
                    session.data.city = matched;
                    session.step = STATES.CITY_SELECTED;
                    session.flags = null;
                    return {
                        reply: `What is your budget range?`,
                        options: ['Up to ₹1 Cr', '₹1 Cr – ₹3 Cr', '₹3 Cr – ₹5 Cr', 'Above ₹5 Cr']
                    };
                } else if (fuzzyMatch) {
                    session.flags.waitingForConfirmation = true;
                    session.flags.suggestedCity = fuzzyMatch;
                    session.flags.waitingForCity = false;
                    const displayCity = fuzzyMatch.charAt(0).toUpperCase() + fuzzyMatch.slice(1);
                    return {
                        reply: `Did you mean *${displayCity}*?`,
                        options: ['Yes', 'No']
                    };
                } else if (isOutOfScope) {
                    session.flags = null;
                    return {
                        reply: `That's a great question, but I am here only for property-related queries.\nWould you like to buy property?`,
                        options: ['Buy Property']
                    };
                } else {
                    session.flags = null;
                    return {
                        reply: `Currently, we don’t have any projects in this location.\n\nWould you like to see projects in another city? \n\nPlease select a city:`,
                        options: ['Noida', 'Greater Noida', 'Ghaziabad', 'Gurugram', 'Faridabad', 'Delhi', 'Other']
                    };
                }
            }

            // Standard Selection logic
            let matchedCity = ALLOWED_CITIES.find(c => inputCity.includes(c));
            if (matchedCity) {
                session.data.city = matchedCity;
                session.step = STATES.CITY_SELECTED;
                return {
                    reply: `What is your budget range?`,
                    options: ['Up to ₹1 Cr', '₹1 Cr – ₹3 Cr', '₹3 Cr – ₹5 Cr', 'Above ₹5 Cr']
                };
            }

            const isOutOfScope = /(joke|weather|movie|song|who are you)/.test(inputCity);
            if (!isOutOfScope) {
                return {
                    reply: `Currently, we don’t have any projects in this location.\n\nWould you like to see projects in another city? \n\nPlease select a city:`,
                    options: ['Noida', 'Greater Noida', 'Ghaziabad', 'Gurugram', 'Faridabad', 'Delhi', 'Other']
                };
            }

            return {
                reply: `That's a great question, but I am here only for property-related queries.\nI can help you buy property.`,
                options: []
            };

        case STATES.CITY_SELECTED:
            const BUDGET_MAP = {
                // Exact matches (Button clicks)
                'up to ₹1 cr': 'Up to 1Cr',
                '₹1 cr – ₹3 cr': '1Cr-3Cr',
                '₹3 cr – ₹5 cr': '3Cr-5Cr',
                'above ₹5 cr': 'Above 5Cr',

                // Relaxed inputs (Typing)
                'up to 1 cr': 'Up to 1Cr',
                'upto 1 cr': 'Up to 1Cr',
                '1 cr - 3 cr': '1Cr-3Cr',
                '1cr - 3cr': '1Cr-3Cr',
                '3 cr - 5 cr': '3Cr-5Cr',
                '3cr - 5cr': '3Cr-5Cr',
                'above 5 cr': 'Above 5Cr',
                'above 5cr': 'Above 5Cr'
            };

            const cleanMsg = msg.replace(/\s+/g, ' ').trim();

            if (!BUDGET_MAP[cleanMsg]) {
                return {
                    reply: `Please select a budget range from the options above.`,
                    options: ['Up to ₹1 Cr', '₹1 Cr – ₹3 Cr', '₹3 Cr – ₹5 Cr', 'Above ₹5 Cr']
                };
            }

            const apiBudget = BUDGET_MAP[cleanMsg];
            session.data.budget = apiBudget;
            session.step = STATES.RESULTS;

            try {
                const typeId = PROPERTY_TYPE_MAP[session.data.type] || 1;
                const cityId = CITY_MAP[session.data.city] || 2;

                const response = await axios.get(API_URL, {
                    params: {
                        propertyType: typeId,
                        propertyLocation: cityId,
                        budget: apiBudget
                    }
                });

                // Store all projects in session for pagination
                session.data.allProjects = response.data || [];
                session.data.currentIndex = 0;

                // Helper to get next batch
                const getNextBatch = () => {
                    const batch = session.data.allProjects.slice(session.data.currentIndex, session.data.currentIndex + 3);
                    session.data.currentIndex += 3;
                    return batch;
                };

                const projects = getNextBatch();

                if (projects && projects.length > 0) {
                    const cards = projects.map(p => {
                        const slug = p.projectSlug || p.projectName.toLowerCase()
                            .replace(/&/g, 'and')
                            .replace(/[^a-z0-9]+/g, '-')
                            .replace(/(^-|-$)/g, '');

                        const fullImageUrl = (p.projectThumbnailImage && p.projectThumbnailImage.startsWith('http'))
                            ? p.projectThumbnailImage
                            : (p.projectThumbnailImage ? `${IMAGE_BASE_URL}${slug}/${p.projectThumbnailImage}` : 'https://via.placeholder.com/300x200?text=No+Image');

                        // DEBUG LOG
                        console.log(`[DEBUG] Project: ${p.projectName}, Slug: ${slug}, URL: ${fullImageUrl}`);

                        return {
                            id: p.id,
                            name: p.projectName,
                            location: p.projectAddress || p.cityName,
                            price: p.projectStartingPrice || 'Price on Request',
                            image: fullImageUrl,
                            builder: p.builderName,
                            status: p.projectStatusName,
                            link: `https://mypropertyfact.in/${slug}`
                        };
                    });

                    const hasMore = session.data.currentIndex < session.data.allProjects.length;
                    const options = hasMore ? ['Yes', 'No'] : ['Restart'];
                    let reply = `Here are the top 3 projects in ${session.data.city}:`;
                    let followUp = null;

                    if (session.data.currentIndex > 3) {
                        reply = `Here are more projects:`;
                    }
                    if (hasMore) {
                        followUp = `Would you like to see more projects?`;
                    }

                    return {
                        reply: reply,
                        followUp: followUp,
                        projectCards: cards,
                        options: options
                    };
                } else {
                    return {
                        reply: `Sorry, we couldn't find any projects matching your requirement.\nWould you like to change filters?`,
                        options: ['Restart']
                    };
                }
            } catch (e) {
                return {
                    reply: `Something went wrong. Please try again.`,
                    options: ['Restart']
                };
            }

        case STATES.RESULTS:
            if (['yes', 'yes, please', 'sure'].includes(msg)) {
                session.step = STATES.WELCOME;
                session.data = {};
                return {
                    reply: `Great! Let's find more properties.\n\nPlease select your property type to get started.`,
                    options: ['Commercial', 'Residential', 'New Launch']
                };
            }

            if (['no', 'no, thanks'].includes(msg)) {
                return {
                    reply: `Thank you for your time!\nHave a great day 😊`,
                    options: []
                };
            }

            return {
                reply: `To search again, please type 'Restart'.`,
                options: ['Restart']
            };

        default:
            return {
                reply: `Please type 'Restart' to start over.`,
                options: ['Restart']
            };
    }
}

// Request handler
const server = http.createServer(async (req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const pathname = parsedUrl.pathname;
    const method = req.method;

    // CORS headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

    if (method === 'OPTIONS') {
        res.writeHead(200);
        res.end();
        return;
    }

    // Static files
    if (method === 'GET') {
        let filePath = path.join(__dirname, 'public', pathname === '/' ? 'index.html' : pathname);
        fs.readFile(filePath, (err, data) => {
            if (err) {
                res.writeHead(404, { 'Content-Type': 'text/plain' });
                res.end('Not Found');
                return;
            }
            const ext = path.extname(filePath);
            const contentType = {
                '.html': 'text/html',
                '.js': 'application/javascript',
                '.css': 'text/css',
                '.png': 'image/png',
                '.jpg': 'image/jpeg',
                '.ico': 'image/x-icon'
            }[ext] || 'text/plain';
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(data);
        });
        return;
    }

    // API endpoints
    if (method === 'POST' && pathname === '/api/chat') {
        let body = '';
        req.on('data', chunk => body += chunk);
        req.on('end', async () => {
            try {
                const { message, sessionId } = JSON.parse(body);
                const responseData = await generateAIResponse(message, sessionId || 'default');
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify(responseData));
            } catch (error) {
                console.error('Error:', error);
                res.writeHead(500, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ error: 'Internal Server Error' }));
            }
        });
        return;
    }

    if (method === 'POST' && pathname === '/enquiry/post') {
        let body = '';
        req.on('data', chunk => body += chunk);
        req.on('end', async () => {
            try {
                const { name, mobile, email, project, sessionId } = JSON.parse(body);

                if (!name || !mobile || !email) {
                    res.writeHead(400, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify({ success: false, message: 'All fields required' }));
                    return;
                }

                const session = sessions[sessionId] || { data: {} };
                const { type, city, budget } = session.data || {};

                await pool.execute(
                    'INSERT INTO form_leads (name, phone, email, project_name, property_type, city, budget) VALUES (?, ?, ?, ?, ?, ?, ?)',
                    [name, mobile, email, project || 'General', type || 'N/A', city || 'N/A', budget || 'N/A']
                );

                // --- NEW EXTERNAL API INTEGRATION ---
                try {
                    await axios.post('https://apis.mypropertyfact.in/enquiry/post', {
                        name: name,
                        email: email,
                        phone: mobile,
                        message: null,
                        pageName: null,
                        enquiryFrom: null,
                        projectLink: "https://www.mypropertyfact.com/contact-us",
                        status: "PENDING",
                        id: 0
                    });
                } catch (apiError) {
                    console.error("External Enquiry API Failed:", apiError.message);
                }
                // ------------------------------------

                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({
                    success: true,
                    reply: `Thank you for sharing your details!\nOur consultant will contact you within 24 hours.`,
                    followUp: `Would you like to explore more projects?`,
                    options: ['Yes', 'No']
                }));
            } catch (e) {
                console.error("DB Save Error:", e.message);
                console.error("Stack:", e.stack);
                res.writeHead(500, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ success: false, message: 'Database error' }));
            }
        });
        return;
    }

    // Legacy generic
    if (method === 'POST' && pathname === '/api/save-form-data') {
        let body = '';
        req.on('data', chunk => body += chunk);
        req.on('end', async () => {
            try {
                const { name, phone, email } = JSON.parse(body);
                await pool.execute(
                    'INSERT INTO form_leads (name, phone, email) VALUES (?, ?, ?)',
                    [name, phone, email]
                );
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ success: true }));
            } catch (e) {
                res.writeHead(500, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ success: false }));
            }
        });
        return;
    }

    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
});

// Initialize database table
async function initDB() {
    try {
        await pool.execute(`
            CREATE TABLE IF NOT EXISTS form_leads (
                id INT AUTO_INCREMENT PRIMARY KEY,
                name VARCHAR(255) NOT NULL,
                phone VARCHAR(15) NOT NULL,
                email VARCHAR(255) NOT NULL,
                project_name VARCHAR(255),
                property_type VARCHAR(50),
                city VARCHAR(50),
                budget VARCHAR(50),
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        `);
        console.log("Database table initialized.");
    } catch (e) {
        console.error("DB Init Error:", e);
    }
}

// Start server
initDB().then(() => {
    server.listen(PORT, () => {
        console.log("==================================================");
        console.log(`Server running on http://localhost:${PORT}`);
        console.log("IMAGE LOGIC UPDATED: Slug based URLs (m3m-jacob...)");
        console.log("==================================================");
    });
});
