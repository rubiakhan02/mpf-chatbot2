const axios = require('axios');

async function testSentenceFlow(sentence) {
    const sessionId = 'test-sent-' + Date.now();
    console.log(`--- Testing sentence: "${sentence}" ---`);

    await axios.post('http://localhost:3000/api/chat', { sessionId, message: 'Residential' });
    await axios.post('http://localhost:3000/api/chat', { sessionId, message: 'Other' });

    // Type sentence
    const res = await axios.post('http://localhost:3000/api/chat', { sessionId, message: sentence });
    console.log('Bot:', res.data.reply);

    if (res.data.options && res.data.options.includes('Up to ₹1 Cr')) {
        console.log('SUCCESS: Proceeded to budget');
    } else {
        console.log('FAILED');
    }
}

(async () => {
    try {
        await testSentenceFlow('I want house in agra');
        await testSentenceFlow('chennai projects');
        await testSentenceFlow('dehradoon property');
    } catch (e) {
        console.error('Test failed:', e.message);
    }
})();
