const axios = require('axios');

async function testApi() {
    const url = 'https://apis.mypropertyfact.in/projects/search-by-type-city-budget';

    // Test Case 1: As per example
    try {
        console.log("Testing with Example params...");
        const res1 = await axios.get(url, {
            params: {
                propertyType: 2,
                propertyLocation: 2,
                budget: 'Up to 1Cr'
            }
        });
        const IMAGE_BASE_URL = 'https://apis.mypropertyfact.in/get/images/properties/';

        console.log("Status:", res1.status);
        if (res1.data && res1.data.length > 0) {
            const p = res1.data[0];
            console.log("\n--- PROJECT KEYS ---");
            console.log(Object.keys(p));
            console.log("\n--- PREVIEW VALUES ---");
            console.log("Name:", p.projectName);
            console.log("Slug?", p.slug || p.projectSlug || p.url || "Not Found");

            console.log("\n--- IMAGE CHECK WITH SLUG ---");
            res1.data.slice(0, 5).forEach(p => {
                const generatedSlug = p.projectName.toLowerCase()
                    .replace(/[^a-z0-9]+/g, '-')
                    .replace(/(^-|-$)/g, '');

                console.log(`Project: ${p.projectName} | GenSlug: ${generatedSlug}`);
                console.log(`Slug: ${generatedSlug}`); // Changed from original 'slug'
                console.log(`Thumbnail: '${p.projectThumbnailImage}'`);

                const fullUrl = (p.projectThumbnailImage && p.projectThumbnailImage.startsWith('http'))
                    ? p.projectThumbnailImage
                    : `${IMAGE_BASE_URL}${generatedSlug}/${p.projectThumbnailImage}`; // Changed from original 'slug'

                console.log(`Full URL: ${fullUrl}`);
                console.log('---');
            });
        }
    } catch (e) {
        console.error("Error case 1:", e.message);
    }
}

testApi();
