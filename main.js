#! /usr/bin/env node
import inquirer from "inquirer";
console.log("\n\tWelcome to my Simple \'Calculator\'");
let answer = await inquirer.prompt([
    { name: "FirstNnumber", type: "number", message: "enterb ur first num" },
    { name: "secondNumber", type: "number", message: "enter your second num" },
    {
        name: "operator",
        type: "list",
        message: "enter your operator",
        choices: ["addition", "subtration", "multiplication", "division"]
    }
]);
if (answer.operator === "addition") {
    console.log(answer.FirstNnumber + answer.secondNumber);
}
else if (answer.operator === "subtration") {
    console.log(answer.FirstNnumber - answer.secondNumber);
}
else if (answer.operator === "multiplication") {
    console.log(answer.FirstNnumber * answer.secondNumber);
}
else if (answer.operator === "division") {
    console.log(answer.FirstNnumber / answer.secondNumber);
}
else {
    console.log("invalid input");
}
