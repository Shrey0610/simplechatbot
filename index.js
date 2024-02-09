import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: 'YOUR_API_KEY', // This is the default and can be omitted
});


async function main() {

    const completions = await openai.chat.completions.create({
      messages: [{ role: 'user', content: 'What is the color of the sky' }],
      model: 'gpt-3.5-turbo',
    });
    console.log(completions.choices);
}

main();