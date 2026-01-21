const mysql = require('mysql2/promise');
require('dotenv').config();

async function checkSchema() {
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
        const [rows] = await pool.query("DESCRIBE form_leads");
        console.log("Schema for form_leads:");
        console.table(rows);
    } catch (e) {
        console.error("Error describing table:", e.message);
    } finally {
        await pool.end();
    }
}

checkSchema();
