const axios = require('axios');

async function testFullOtherFlow(cityEntered) {
    const sessionId = 'test-full-' + Date.now();
    console.log(`--- Testing Full 'Other' flow for ${cityEntered} ---`);

    await axios.post('http://localhost:3000/api/chat', { sessionId, message: 'Residential' });
    await axios.post('http://localhost:3000/api/chat', { sessionId, message: 'Other' });
    await axios.post('http://localhost:3000/api/chat', { sessionId, message: cityEntered });

    // Select budget
    const res = await axios.post('http://localhost:3000/api/chat', {
        sessionId,
        message: 'Up to ₹1 Cr'
    });

    if (res.data.projectCards && res.data.projectCards.length > 0) {
        console.log(`SUCCESS: Found ${res.data.projectCards.length} projects for ${cityEntered}`);
    } else {
        console.log(`FAILED: No projects found for ${cityEntered}`);
        console.log('Result:', JSON.stringify(res.data, null, 2));
    }
}

(async () => {
    try {
        await testFullOtherFlow('Agra');
    } catch (e) {
        console.error('Test failed:', e.message);
    }
})();
