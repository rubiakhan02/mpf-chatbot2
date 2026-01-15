const axios = require('axios');

const IMAGE_BASE_URL = 'https://apis.mypropertyfact.in/get/images/properties/';
const API_URL = 'https://apis.mypropertyfact.in/projects/search-by-type-city-budget';

async function debugFullChain() {
    try {
        console.log("1. Fetching Projects...");
        // Simulate default search (Residential, Noida, Up to 1Cr)
        const res = await axios.get(API_URL, {
            params: { propertyType: 1, propertyLocation: 2, budget: 'Up to 1Cr' }
        });

        if (!res.data || res.data.length === 0) {
            console.log("No projects found to test.");
            return;
        }

        console.log(`Found ${res.data.length} projects. Testing first 3...`);

        for (const p of res.data.slice(0, 3)) {
            console.log(`\n--- Project: ${p.projectName} ---`);

            // SIMULATE SERVER LOGIC EXACTLY
            const slug = p.projectSlug || p.projectName.toLowerCase()
                .replace(/&/g, 'and')
                .replace(/[^a-z0-9]+/g, '-')
                .replace(/(^-|-$)/g, '');

            console.log(`Generated Slug: ${slug}`);
            console.log(`Filename: ${p.projectThumbnailImage}`);

            const fullUrl = (p.projectThumbnailImage && p.projectThumbnailImage.startsWith('http'))
                ? p.projectThumbnailImage
                : `${IMAGE_BASE_URL}${slug}/${p.projectThumbnailImage}`;

            console.log(`Constructed URL: ${fullUrl}`);

            // TEST URL
            try {
                const imgRes = await axios.head(fullUrl, {
                    headers: { 'User-Agent': 'Mozilla/5.0' }
                });
                console.log(`URL Status: ${imgRes.status} (OK)`);
            } catch (err) {
                console.log(`URL Failed: ${err.message}`);
                if (err.response) console.log(`Status: ${err.response.status}`);
            }
        }

    } catch (e) {
        console.error("Critical Error:", e.message);
    }
}

debugFullChain();
