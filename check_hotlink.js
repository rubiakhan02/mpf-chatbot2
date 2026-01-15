const axios = require('axios');

const url = "https://apis.mypropertyfact.in/get/images/properties/m3m-jacob-and-co-residences/1761195693692_M3M_Jcob_and_Co_Residences_Thumbnail_-_My_Property_facts.jpg";

async function checkHotlink() {
    try {
        console.log("Checking Hotlink Protection for:", url);
        const res = await axios.get(url, {
            headers: {
                'Referer': 'http://localhost:3000/',
                'Origin': 'http://localhost:3000',
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
            }
        });
        console.log("Status:", res.status); // Should be 200. If 403, then it's blocked.
    } catch (e) {
        console.log("Error:", e.message);
        if (e.response) {
            console.log("Response Status:", e.response.status);
            console.log("Response Headers:", JSON.stringify(e.response.headers, null, 2));
        }
    }
}

checkHotlink();
