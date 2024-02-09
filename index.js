// import OpenAI from 'openai';

// const openai = new OpenAI({
//   apiKey: 'YOUR_API_KEY', // This is the default and can be omitted
// });


// async function main() {

//     const completions = await openai.chat.completions.create({
//       messages: [{ role: 'user', content: 'What is the color of the sky' }],
//       model: 'gpt-3.5-turbo',
//     });
//     console.log(completions.choices);
// }

// main();

import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const rl = readline.createInterface({ input, output });


import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: 'YOUR_API_KEY', // This is the default and can be omitted
});

const messages= [];

async function main(input) {
  messages.push({role: "user", content: input});
    const completions = await openai.chat.completions.create({
      messages: messages,
      
      model: 'gpt-3.5-turbo',
    });
    console.log(`${completions.choices[0].message.content}`);
}


  rl.on('line', (input) => {
    main(input);
    if(input === ''){
      rl.close();
    }
  });
