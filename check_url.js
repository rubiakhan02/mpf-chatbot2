const axios = require('axios');

const url = "https://apis.mypropertyfact.in/get/images/properties/ace-153/d59765f5-c2af-4751-9189-12676c488966.webp";

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
