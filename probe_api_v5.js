const axios = require('axios');

async function probe() {
    const url = 'https://apis.mypropertyfact.in/projects/search-by-type-city-budget';

    console.log("Scanning cities 1-20 without budget...");
    for (let i = 1; i <= 20; i++) {
        try {
            const res = await axios.get(url, { params: { propertyType: 1, propertyLocation: i } });
            if (res.data.length > 0) {
                console.log(`City ${i}: ${res.data[0].cityName}`);
            }
        } catch (e) {
            // maybe 400 if budget missing
        }
    }
}

probe();
