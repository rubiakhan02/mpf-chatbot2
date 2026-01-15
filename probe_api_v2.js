const axios = require('axios');

async function probe() {
    const url = 'https://apis.mypropertyfact.in/projects/search-by-type-city-budget';

    // Probe Cities 1-10 with Commercial (Type 2)
    for (let i = 1; i <= 10; i++) {
        try {
            const res = await axios.get(url, { params: { propertyType: 2, propertyLocation: i, budget: 'Up to 1Cr' } });
            if (res.data.length > 0) {
                console.log(`City ${i}: ${res.data[0].cityName}`);
            } else {
                console.log(`City ${i}: No Data`);
            }
        } catch (e) {
            console.log(`City ${i}: Error/Empty`);
        }
    }
}

probe();
