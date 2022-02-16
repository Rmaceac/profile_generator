const readline = require('readline');
const { stdin: input, stdout: output } = require('process');

const rl = readline.createInterface({ input, output });

rl.question("How are you feeling today?", (answer) => {
  //Insert thing to do in response to user input
  console.log('uh-huh... yep... right... yuh-huh')

  rl.close();
})