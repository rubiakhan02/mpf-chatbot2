const axios = require('axios');

const url = "https://apis.mypropertyfact.in/get/images/properties/m3m-jacob-and-co-residences/1761195693692_M3M_Jcob_and_Co_Residences_Thumbnail_-_My_Property_facts.jpg";

async function checkCors() {
    try {
        console.log("Checking Headers for:", url);
        const res = await axios.head(url);
        console.log("Status:", res.status);
        console.log("--- HEADERS ---");
        console.log("Access-Control-Allow-Origin:", res.headers['access-control-allow-origin']);
        console.log("Access-Control-Allow-Methods:", res.headers['access-control-allow-methods']);
        console.log("All Headers:", JSON.stringify(res.headers, null, 2));
    } catch (e) {
        console.log("Error:", e.message);
    }
}

checkCors();
