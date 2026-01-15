const axios = require('axios');

async function probe() {
    const url = 'https://apis.mypropertyfact.in/projects/search-by-type-city-budget';

    const promises = [];
    for (let i = 1; i <= 60; i++) {
        promises.push(axios.get(url, { params: { propertyType: 1, propertyLocation: i, budget: 'Up to 1Cr' } })
            .then(res => {
                if (res.data.length > 0) return { id: i, name: res.data[0].cityName };
                return null;
            }).catch(e => null)
        );
        promises.push(axios.get(url, { params: { propertyType: 2, propertyLocation: i, budget: 'Up to 1Cr' } })
            .then(res => {
                if (res.data.length > 0) return { id: i, name: res.data[0].cityName };
                return null;
            }).catch(e => null)
        );
    }

    const results = await Promise.all(promises);
    const cities = results.filter(r => r !== null);
    // Dedup
    const seen = new Set();
    cities.forEach(c => {
        if (!seen.has(c.id)) {
            console.log(`${c.id}: ${c.name}`);
            seen.add(c.id);
        }
    });
}

probe();
