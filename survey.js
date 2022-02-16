const readline = require('readline');
const { stdin: input, stdout: output } = require('process');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let aboutMe = {};

rl.question("What's your name? Nicknames work too :)\n", (name) => {
  aboutMe.name = name;
  console.log(`Nice to meet you ${name} 🙏.`);

  rl.question("What is something you like to do when you're not working? Have any hobbies?\n", (hobby) => {
    aboutMe.hobby = hobby;
    console.log(`Great, thanks!`);

    rl.question("What kind of music do you listen to?\n", (music) => {
      aboutMe.music = music;
      console.log(`You've got great taste ;)`);

      rl.question("Do you have a favorite meal?\n", (meal) => {
        aboutMe.meal = meal;
        for (const string of meal.split(" ")) {
          string === ("sushi" || "Sushi") ? console.log("Me too! I love sushi!") : console.log("I'm more of a sushi fan myself... Next question!");

          rl.question("If you had to choose ONE superpower, what would it be?\n", (power) => {
            aboutMe.power = power;
            console.log(`Great, thanks!`);
            console.log("Alright, we've got your profile. Check it out!");
            console.log("--------------");
            console.log(`Hi there! My name is ${aboutMe.name}.\nI love ${aboutMe.hobby} and listening to ${aboutMe.music} music!\nUsually you'll find me grabbing ${aboutMe.meal} when I need to eat.\nAnd since you asked, my superpower of choice would be ${aboutMe.power}.`);
            rl.close();
          });
        }
      });
    });
  });
  
});





