const axios = require('axios');

async function testOtherFlow(cityEntered) {
    const sessionId = 'test-other-' + Date.now();
    console.log(`--- Testing 'Other' flow for ${cityEntered} ---`);

    // 1. Start with type
    await axios.post('http://localhost:3000/api/chat', { sessionId, message: 'Residential' });

    // 2. Select 'Other'
    let res = await axios.post('http://localhost:3000/api/chat', { sessionId, message: 'Other' });
    console.log('Bot:', res.data.reply);

    // 3. Type city manually
    res = await axios.post('http://localhost:3000/api/chat', { sessionId, message: cityEntered });
    console.log('Bot:', res.data.reply);

    if (res.data.options && res.data.options.includes('Up to ₹1 Cr')) {
        console.log('SUCCESS: Proceeded to budget');
    } else {
        console.log('FAILED: Still in city selection or out of scope');
        console.log('Full data:', JSON.stringify(res.data, null, 2));
    }
}

(async () => {
    try {
        await testOtherFlow('Agra');
        await testOtherFlow('trivandrum');
        await testOtherFlow('thrivunthapuram');
    } catch (e) {
        console.error('Test failed:', e.message);
    }
})();
