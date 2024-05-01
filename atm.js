#! /usr/bin/env node
import inquirer from "inquirer";
let pincode = 9876;
let mybalance = 20000;
let pin = await inquirer.prompt([{
        name: "code",
        type: "number",
        message: "enter your pin number"
    },]);
if (pin.code == pincode) {
    console.log("correct pin number!!!");
    let account = await inquirer.prompt([{
            name: "secmsg",
            type: "list",
            message: "select your account type",
            choices: ["current account", "savings account"]
        },]);
    let transfer = await inquirer.prompt([{
            name: "thirdmsg",
            type: "list",
            message: "select your transection method",
            choices: ["cash withdrawal", "fast cash"]
        },]);
    let las = await inquirer.prompt([{
            name: "amount",
            type: "list",
            message: "select the amount you want to withdraw",
            choices: [1000, 3000, 5000, 8000, 10000, 15000, 20000]
        },]);
    let currentbalance = mybalance - las.amount;
    console.log("YOUR TOTAL BALANCE IS " + currentbalance);
}
else {
    console.log("invalid pin number.");
}
