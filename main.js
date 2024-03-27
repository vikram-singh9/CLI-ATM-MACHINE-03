import inquirer from "inquirer";
let my_balance = 10000;
let myPin = 1234;
let pinAnswer = await inquirer.prompt([
    { message: "enter your pin", type: "number", name: "pincode" },
]);
if (pinAnswer.pincode == myPin) {
    console.log(`you entered correct pin`);
    let operationAns = await inquirer.prompt([
        {
            message: "what do you want to do",
            type: "list",
            name: "operation",
            choices: ["withdraw", "check balance",],
        },
    ]);
    if (operationAns.operation === "withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "enter your amount",
                type: "number",
            },
        ]);
        my_balance -= amountAns.amount;
        console.log(my_balance, `is your remaining balance`);
    }
    else if (operationAns.operation === "check balance") {
        console.log(`your balance is:` + my_balance);
    }
}
else {
    console.log(`incorrect pin`);
}
