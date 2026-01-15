const axios = require('axios');

async function probe() {
    const url = 'https://apis.mypropertyfact.in/projects/search-by-type-city-budget';

    try {
        console.log("Testing text params...");
        const res = await axios.get(url, {
            params: {
                propertyType: 'Residential',
                propertyLocation: 'Delhi',
                budget: 'Up to 1Cr'
            }
        });
        console.log("Result count:", res.data.length);
        if (res.data.length > 0) console.log(res.data[0]);
    } catch (e) {
        console.log("Error with text params:", e.message);
    }

    try {
        console.log("Testing text params (lowercase)...");
        const res = await axios.get(url, {
            params: {
                propertyType: 'residential',
                propertyLocation: 'delhi',
                budget: 'Up to 1Cr'
            }
        });
        console.log("Result count lc:", res.data.length);
    } catch (e) {
        console.log("Error with lc params:", e.message);
    }
}

probe();
