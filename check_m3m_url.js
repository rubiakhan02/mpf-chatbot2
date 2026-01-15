const axios = require('axios');

// User provided this URL structure:
// properties/m3m-jacob-and-co-residences/1761195693692_M3M_Jcob_and_Co_Residences_Thumbnail_-_My_Property_facts.jpg
const url = "https://apis.mypropertyfact.in/get/images/properties/m3m-jacob-and-co-residences/1761195693692_M3M_Jcob_and_Co_Residences_Thumbnail_-_My_Property_facts.jpg";

async function check() {
    try {
        console.log("Checking URL:", url);
        const res = await axios.head(url);
        console.log("Status:", res.status);
    } catch (e) {
        console.log("Error:", e.message);
        if (e.response) console.log("Response Status:", e.response.status);
    }
}

check();
