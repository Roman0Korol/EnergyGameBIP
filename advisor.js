import { OpenAI } from "openai";

const client = new OpenAI({
	baseURL: "https://router.huggingface.co/v1",
	apiKey: "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",
});

const chatCompletion = await client.chat.completions.create({
	model: "meta-llama/Llama-3.1-70B-Instruct",
    messages: [
        {
            role: "user",
            content: "What is the capital of France?",
        },
    ],
});

console.log(chatCompletion.choices[0].message);
