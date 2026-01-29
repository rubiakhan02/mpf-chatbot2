const axios = require('axios');
const cities = { agra: 1, thiruvananthapuram: 36, dehradun: 32, chennai: 37 };

(async () => {
    for (const [name, id] of Object.entries(cities)) {
        try {
            const res = await axios.get('https://apis.mypropertyfact.in/projects/search-by-type-city-budget', {
                params: { propertyType: 2, propertyLocation: id }
            });
            const count = (res.data && Array.isArray(res.data)) ? res.data.length : 0;
            console.log(`✅ ${name} | Type 2 | No Budget -> ${count} projects`);
        } catch (e) {
            console.log(`🔥 ${name} | error: ${e.message}`);
        }
    }
})();
