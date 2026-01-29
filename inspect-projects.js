const axios = require('axios');

async function inspectProjects(cityId) {
    try {
        const res = await axios.get('https://apis.mypropertyfact.in/projects/search-by-type-city-budget', {
            params: { propertyType: 1, propertyLocation: cityId, budget: 'Up to 1Cr' }
        });
        if (res.data && res.data.length > 0) {
            console.log(`Projects for City ${cityId}:`);
            console.log(JSON.stringify(res.data[0], null, 2));
        } else {
            console.log(`No projects for City ${cityId}`);
        }
    } catch (e) {
        console.error(`Error for City ${cityId}:`, e.message);
    }
}

(async () => {
    await inspectProjects(1); // Agra
})();
