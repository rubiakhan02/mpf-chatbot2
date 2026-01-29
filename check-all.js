const axios = require('axios');
const CITY_MAP = {
    'agra': 1, 'noida': 2, 'ludhiana': 6, 'mumbai': 14, 'ghaziabad': 15,
    'gurugram': 17, 'bangalore': 18, 'jaipur': 19, 'kochi': 20, 'hyderabad': 21,
    'greater noida': 26, 'noida extension': 27, 'lucknow': 31, 'chandigarh': 33,
    'goa': 41, 'delhi': 30, 'faridabad': 35, 'mohali': 42, 'pune': 39,
    'bareilly': 43, 'chennai': 37, 'dehradun': 32, 'indore': 38, 'sonipat': 44,
    'thiruvananthapuram': 36, 'vrindavan': 34, 'greater noida west': 45
};

(async () => {
    console.log('--- Checking all cities for projects ---');
    for (const [name, id] of Object.entries(CITY_MAP)) {
        try {
            const res = await axios.get('https://apis.mypropertyfact.in/projects/search-by-type-city-budget', {
                params: { propertyType: 1, propertyLocation: id, budget: 'Up to 1Cr' }
            });
            const count = (res.data && Array.isArray(res.data)) ? res.data.length : 0;
            if (count === 0) {
                console.log(`❌ ${name} (ID ${id}) -> 0 projects`);
            } else {
                // console.log(`✅ ${name} (ID ${id}) -> ${count} projects`);
            }
        } catch (e) {
            console.log(`🔥 ${name} (ID ${id}) -> Error: ${e.message}`);
        }
    }
})();
