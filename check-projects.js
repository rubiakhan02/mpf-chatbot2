const axios = require('axios');
const cities = { agra: 1, thiruvananthapuram: 36, dehradun: 32, chennai: 37 };
const budgets = ['Up to 1Cr', '1Cr-3Cr', '3Cr-5Cr', 'Above 5Cr'];

(async () => {
    for (const [name, id] of Object.entries(cities)) {
        for (const type of [1, 2]) {
            for (const budget of budgets) {
                try {
                    const res = await axios.get('https://apis.mypropertyfact.in/projects/search-by-type-city-budget', {
                        params: { propertyType: type, propertyLocation: id, budget }
                    });
                    const count = (res.data && Array.isArray(res.data)) ? res.data.length : 0;
                    if (count > 0) {
                        console.log(`✅ ${name} | Type ${type} | Budget ${budget} -> ${count} projects`);
                    } else {
                        console.log(`❌ ${name} | Type ${type} | Budget ${budget} -> 0 projects`);
                    }
                } catch (e) {
                    console.log(`🔥 ${name} | error: ${e.message}`);
                }
            }
        }
    }
})();
