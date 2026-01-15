const mysql = require('mysql2/promise');
require('dotenv').config();

const pool = mysql.createPool({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '#Gullulalchi2',
    database: process.env.DB_NAME || 'chatbot_db'
});

async function updateSchema() {
    try {
        await pool.execute("ALTER TABLE form_leads ADD COLUMN project_name VARCHAR(255)");
        await pool.execute("ALTER TABLE form_leads ADD COLUMN property_type VARCHAR(50)");
        await pool.execute("ALTER TABLE form_leads ADD COLUMN city VARCHAR(50)");
        await pool.execute("ALTER TABLE form_leads ADD COLUMN budget VARCHAR(50)");
        console.log("Schema updated.");
    } catch (e) {
        console.error("Error (might already exist):", e.message);
    }
    process.exit();
}

updateSchema();
