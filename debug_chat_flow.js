const axios = require('axios');

const API_URL = 'http://localhost:3000/api/chat';
const sessionId = 'debug_session_' + Date.now();

async function sendMessage(msg) {
    console.log(`\nUser: ${msg}`);
    try {
        const res = await axios.post(API_URL, { message: msg, sessionId });
        console.log(`Bot Reply: ${res.data.reply}`);
        if (res.data.options) console.log(`Options: ${res.data.options}`);
        if (res.data.projectCards) {
            console.log(`\n✅ PROJECT CARDS RECEIVED: ${res.data.projectCards.length}`);
            console.log(JSON.stringify(res.data.projectCards[0], null, 2));
        } else {
            console.log('No project cards in response.');
        }
    } catch (e) {
        console.error('Error:', e.message);
    }
}

async function runFlow() {
    await sendMessage('hi');
    await sendMessage('residential');
    await sendMessage('noida');
    await sendMessage('up to 1 cr'); // Testing relaxed input w/o symbol
}

runFlow();
