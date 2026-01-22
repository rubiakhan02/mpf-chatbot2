require('dotenv').config();
const { HfInference } = require("@huggingface/inference");
const hf = new HfInference(process.env.HF_API_TOKEN);

const SYSTEM_PROMPT = "You are a helpful real estate assistant.";

async function testServerLogic() {
    console.log("Testing Server Logic for HF (Phi-3)...");
    const userMessage = "Hello, are you working?";

    try {
        const result = await hf.chatCompletion({
            model: "microsoft/Phi-3-mini-4k-instruct",
            messages: [
                { role: "user", content: userMessage + " " + SYSTEM_PROMPT }
            ],
            max_tokens: 200
        });

        console.log("Success:", JSON.stringify(result, null, 2));
    } catch (error) {
        console.error("Full Error Object:", error);

        
        if (error.response) {
            console.error("Status:", error.response.status);
            error.response.json().then(data => console.error("Data:", data)).catch(() => console.error("No Body"));
        } else if (error.body) {
            console.error("Error Body:", JSON.stringify(error.body));
        }
    }
}

testServerLogic();
