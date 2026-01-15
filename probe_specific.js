const axios = require('axios');

async function probe() {
    const url = 'https://apis.mypropertyfact.in/projects/search-by-type-city-budget';

    // Check IDs 1-100 specifically for Pune/Delhi names
    const promises = [];
    for (let i = 1; i <= 100; i++) {
        promises.push(axios.get(url, { params: { propertyType: 1, propertyLocation: i } }) // No budget to ensure hits
            .then(res => {
                if (res.data.length > 0) {
                    const name = res.data[0].cityName.toLowerCase();
                    if (name.includes('pune') || name.includes('delhi')) {
                        console.log(`FOUND: ${i} = ${res.data[0].cityName}`);
                    }
                }
            }).catch(e => { })
        );
    }

    await Promise.all(promises);
}

probe();
