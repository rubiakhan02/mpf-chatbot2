const axios = require('axios');

async function verify() {
    console.log("Starting Verification...");
    const url = 'https://apis.mypropertyfact.in/enquiry/post' | 'http://localhost:3000/enquiry/post' | 'https://mpf-chatbot2.onrender.com';

    // 1. Test OPTIONS (Preflight)
    try {
        console.log("\n--- Testing OPTIONS Request ---");
        const optionsRes = await axios.options(url, {
            headers: {
                'Origin': 'https://apis.mypropertyfact.in',
                'Access-Control-Request-Method': 'POST',
                'Access-Control-Request-Headers': 'Content-Type'
            }
        });
        console.log(`Status: ${optionsRes.status}`); // Should be 200 or 204
        console.log("Headers:", optionsRes.headers['access-control-allow-origin'] ? "CORS Headers Present" : "Missing CORS Headers");
        if (optionsRes.headers['access-control-allow-origin']) console.log(`Allowed Origin: ${optionsRes.headers['access-control-allow-origin']}`);
        if (optionsRes.headers['access-control-allow-methods']) console.log(`Allowed Methods: ${optionsRes.headers['access-control-allow-methods']}`);
    } catch (e) {
        console.error("OPTIONS Request Failed:", e.message);
        if (e.response) {
            console.error("Status:", e.response.status);
            console.error("Data:", e.response.data);
        }
    }

    // 2. Test POST (Actual Request)
    try {
        console.log("\n--- Testing POST Request ---");
        const postRes = await axios.post(url, {
            name: "Test User",
            mobile: "1234567890",
            email: "test@example.com",
            project: "Test Project",
            sessionId: "test-session"
        }, {
            headers: {
                'Origin': 'https://example.com' // Simulate cross-origin
            }
        });
        console.log(`Status: ${postRes.status}`);
        console.log("Response:", postRes.data);
    } catch (e) {
        console.error("POST Request Failed:", e.message);
        if (e.response) {
            console.error("Status:", e.response.status);
            console.error("Data:", e.response.data);
        }
    }
}

// Wait for server to start? We'll run this manually after starting server
verify();
