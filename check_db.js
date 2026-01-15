const mysql = require('mysql2/promise');
require('dotenv').config();

const pool = mysql.createPool({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '#Gullulalchi2',
    database: process.env.DB_NAME || 'chatbot_db'
});

async function checkSchema() {
    try {
        const [rows] = await pool.execute("DESCRIBE form_leads");
        console.log("Columns:", rows.map(r => r.Field));
    } catch (e) {
        console.error(e);
    }
    process.exit();
}

checkSchema();
