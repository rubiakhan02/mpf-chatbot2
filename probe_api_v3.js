const axios = require('axios');

async function probe() {
    const url = 'https://apis.mypropertyfact.in/projects/search-by-type-city-budget';

    // Check Residential (1)
    console.log("Checking Residential (1):");
    for (let i = 1; i <= 10; i++) {
        try {
            const res = await axios.get(url, { params: { propertyType: 1, propertyLocation: i, budget: 'Up to 1Cr' } });
            if (res.data.length > 0) {
                console.log(`City ${i}: ${res.data[0].cityName}`);
            }
        } catch (e) { }
    }

    // Check Type 3 ?
    console.log("Checking Type 3:");
    for (let i = 1; i <= 10; i++) {
        try {
            const res = await axios.get(url, { params: { propertyType: 3, propertyLocation: i, budget: 'Up to 1Cr' } });
            if (res.data.length > 0) {
                console.log(`City ${i}: ${res.data[0].cityName} (Type Name: ${res.data[0].propertyTypeName})`);
            }
        } catch (e) { }
    }

    // Check Type 4 ?
    console.log("Checking Type 4:");
    for (let i = 1; i <= 10; i++) {
        try {
            const res = await axios.get(url, { params: { propertyType: 4, propertyLocation: i, budget: 'Up to 1Cr' } });
            if (res.data.length > 0) {
                console.log(`City ${i}: ${res.data[0].cityName} (Type Name: ${res.data[0].propertyTypeName})`);
            }
        } catch (e) { }
    }
}

probe();
