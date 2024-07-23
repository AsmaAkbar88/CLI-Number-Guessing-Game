#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
const randomNumber = Math.floor(Math.random() * 9 + 1);
const answer = await inquirer.prompt([
    { name: "userGuessingNumber",
        type: "number",
        message: chalk.yellow(" \n Please guess a number between 1-9: "),
    },
]);
if (answer.userGuessingNumber === randomNumber) {
    console.log(chalk.blueBright("\n Congratulation! You guess the righ number"));
    console.log(chalk.blueBright(" \n you won the game"));
    console.log("_".repeat(50));
}
else {
    console.log(chalk.red("you guess the wrong number"));
    console.log(chalk.blackBright("Try again"));
    console.log("_".repeat(50));
}
