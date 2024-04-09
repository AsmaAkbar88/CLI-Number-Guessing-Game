#! /usr/bin/env node
import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 9 + 1);
const answer = await inquirer.prompt([
    { name: "userGuessingNumber",
        type: "number",
        message: "Please guess a number between 1-9: ",
    },
]);
if (answer.userGuessingNumber === randomNumber) {
    console.log("Congratulation! You guess the righ number");
    console.log("you won the game");
}
else {
    console.log("you guess the wrong number");
    console.log("Try again");
}
