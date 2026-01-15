const axios = require('axios');

async function probe() {
    const url = 'https://apis.mypropertyfact.in/projects/search-by-type-city-budget';
    const budget = 'Above 5 Cr'; // more likely to yield results for metros

    console.log("Scanning cities 1-30...");
    for (let i = 1; i <= 30; i++) {
        try {
            // checking Type 1 (Residential)
            const res = await axios.get(url, { params: { propertyType: 1, propertyLocation: i, budget: 'Up to 1Cr' } }); // try low budget first
            // If empty, try high
            if (res.data.length > 0) {
                console.log(`City ${i}: ${res.data[0].cityName}`);
                continue;
            }

            const res2 = await axios.get(url, { params: { propertyType: 1, propertyLocation: i, budget: 'Above 5 Cr' } });
            if (res2.data.length > 0) {
                console.log(`City ${i}: ${res2.data[0].cityName}`);
            }
        } catch (e) { }
    }
}

probe();
