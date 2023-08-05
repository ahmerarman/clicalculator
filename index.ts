#!/usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";

const sleep = ()=>{
    return new Promise((res)=>{
        setTimeout(res, 2000);
    })
}

async function welcome(){
    let rainbowTitle = chalkAnimation.rainbow('Lets start command line calculator');
    await sleep();
    rainbowTitle.replace('with NODE.JS, INQUIRER and CHALK');
    await sleep();
    rainbowTitle.replace('Lets enjoy calculation!!!');
    await sleep();
    rainbowTitle.stop();

    let pulseTitle = chalkAnimation.pulse('Developed by AHMER ARMAN for TypeScript faculty test.');
    await sleep();
    pulseTitle.stop();

    let neonTitle = chalkAnimation.neon(`
     _______________________
    |  ___________________  |
    | | CALCULATOR      0.| |
    | |___________________| |
    |  ___ ___ ___    ___   |
    | | 7 | 8 | 9 |  | + |  |
    | |___|___|___|  |___|  |
    | | 4 | 5 | 6 |  | - |  |
    | |___|___|___|  |___|  |
    | | 1 | 2 | 3 |  | x |  |
    | |___|___|___|  |___|  |
    | | . | 0 | = |  | / |  |
    | |___|___|___|  |___|  |
    |_______________________|`);
    await sleep();
    neonTitle.stop();

    startLoop();
}

async function askQuestion(){

    let answer = await inquirer.prompt([
    {
        type:"list",
        name:"operator",
        message: chalk.yellowBright("Which operation you want to perform? \n"),
        choices:["+ Addition","- Subtraction","* Multiplication","/ Division"]
    },
    {
        type:"number",
        name:"num1",
        message: chalk.greenBright("Enter first number: ")
    },
    {
        type:"number",
        name:"num2",
        message: chalk.greenBright("Enter second number: ")
    }
  ])
    switch(answer.operator){
        case "+ Addition": {
            console.log(chalk.blue(`${answer.num1} + ${answer.num2} = ${answer.num1+answer.num2}`));
            break;
        }
        case "- Subtraction": {
            console.log(chalk.blue(`${answer.num1} - ${answer.num2} = ${answer.num1-answer.num2}`));
            break;
        }
        case "* Multiplication": {
            console.log(chalk.blue(`${answer.num1} x ${answer.num2} = ${answer.num1*answer.num2}`));
            break;
        }
        case "/ Division": {
            console.log(chalk.blue(`${answer.num1} / ${answer.num2} = ${answer.num1/answer.num2}`));
            break;
        }
        default: {
            console.log("Default code.");
            break;
        }
    }
}

async function startLoop(){
    do{
        await askQuestion();
        var again = await inquirer.prompt([
          {
            type:"checkbox",
            name:"restart",
            choices:['Yes', 'No'],
            message: chalk.yellowBright("Do you want to continue: ")
          }
        ])
    }while(again.restart == 'Yes');
}

welcome();

