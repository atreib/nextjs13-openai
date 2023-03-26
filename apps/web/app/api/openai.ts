import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  organization: process.env.OPENAI_ORG,
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export async function askGPT({ prompt }: { prompt: string }) {
  return openai.createCompletion({
    model: "text-davinci-002",
    prompt,
    temperature: 0.7,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
    max_tokens: 256,
  });
}
