const name = "M3M Jacob & Co Residences";
const slug = name.toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');

console.log(`Original: ${name}`);
console.log(`Generated Slug: ${slug}`);

if (slug === 'm3m-jacob-and-co-residences') {
    console.log("SUCCESS: Matches user requirement.");
} else {
    console.log("FAILURE: Does not match.");
}
