const axios = require('axios');

async function testFlow(city) {
    const sessionId = 'test-' + Date.now();
    console.log(`--- Testing flow for ${city} ---`);

    // 1. Start with type
    let res = await axios.post('http://localhost:3000/api/chat', {
        sessionId,
        message: 'Residential'
    });
    console.log('Step 1 (Type):', res.data.reply);

    // 2. City
    res = await axios.post('http://localhost:3000/api/chat', {
        sessionId,
        message: city
    });
    console.log('Step 2 (City):', res.data.reply);

    // 3. Budget
    res = await axios.post('http://localhost:3000/api/chat', {
        sessionId,
        message: 'Up to ₹1 Cr'
    });
    console.log('Step 3 (Budget):', res.data.reply);
    if (res.data.projectCards) {
        console.log(`Found ${res.data.projectCards.length} projects!`);
    } else {
        console.log('NO PROJECTS FOUND');
        console.log('Full data:', JSON.stringify(res.data, null, 2));
    }
}

(async () => {
    try {
        await testFlow('Agra');
        await testFlow('thruvunthapuram');
    } catch (e) {
        console.error('Test failed:', e.message);
    }
})();
