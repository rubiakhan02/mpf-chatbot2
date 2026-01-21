const mysql = require('mysql2/promise');
require('dotenv').config();

async function debugInsert() {
    const pool = mysql.createPool({
        host: process.env.DB_HOST || 'localhost',
        user: process.env.DB_USER || 'root',
        password: process.env.DB_PASSWORD || '#Gullulalchi2',
        database: process.env.DB_NAME || 'chatbot_db',
        waitForConnections: true,
        connectionLimit: 10,
        queueLimit: 0
    });

    try {
        const name = "Test User";
        const mobile = "9988776655";
        const email = "test@example.com";
        const project = "ACE 153";
        const type = "Residential";
        const city = "Noida";
        const budget = "Up to 1Cr";

        console.log("Attempting INSERT...");
        const [result] = await pool.execute(
            'INSERT INTO form_leads (name, phone, email, project_name, property_type, city, budget) VALUES (?, ?, ?, ?, ?, ?, ?)',
            [name, mobile, email, project, type, city, budget]
        );
        console.log("Insert Success:", result);
    } catch (e) {
        console.error("Insert Failed:", e);
    } finally {
        await pool.end();
    }
}

debugInsert();
