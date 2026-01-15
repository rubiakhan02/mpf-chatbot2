const axios = require('axios');

async function probe() {
    const url = 'https://apis.mypropertyfact.in/projects/search-by-type-city-budget';

    const types = [1, 2, 3, 4];
    const cities = [1, 2, 3, 4, 5, 6];

    // Check Type 1
    try {
        console.log(`Checking Type 1...`);
        const res = await axios.get(url, { params: { propertyType: 1, propertyLocation: 2, budget: 'Up to 1Cr' } });
        if (res.data.length > 0) {
            console.log(`Type 1 Name: ${res.data[0].propertyTypeName}`);
        } else { console.log("Type 1: No data"); }
    } catch (e) { }

    // Check Type 3
    try {
        console.log(`Checking Type 3...`);
        const res = await axios.get(url, { params: { propertyType: 3, propertyLocation: 2, budget: 'Up to 1Cr' } });
        if (res.data.length > 0) {
            console.log(`Type 3 Name: ${res.data[0].propertyTypeName}`);
        } else { console.log("Type 3: No data"); }
    } catch (e) { }

    // Check Cities
    try {
        console.log(`Checking City 1...`);
        const res = await axios.get(url, { params: { propertyType: 2, propertyLocation: 1, budget: 'Up to 1Cr' } });
        if (res.data.length > 0) {
            console.log(`City 1 Name: ${res.data[0].cityName}`);
        }
    } catch (e) { }

    try {
        console.log(`Checking City 3...`);
        const res = await axios.get(url, { params: { propertyType: 2, propertyLocation: 3, budget: 'Up to 1Cr' } });
        if (res.data.length > 0) {
            console.log(`City 3 Name: ${res.data[0].cityName}`);
        }
    } catch (e) { }

    try {
        console.log(`Checking City 4...`);
        const res = await axios.get(url, { params: { propertyType: 2, propertyLocation: 4, budget: 'Up to 1Cr' } });
        if (res.data.length > 0) {
            console.log(`City 4 Name: ${res.data[0].cityName}`);
        }
    } catch (e) { }
}

probe();
