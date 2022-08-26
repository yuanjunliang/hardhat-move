import chalk from "chalk";
import figlet from "figlet";
import inquirer from "inquirer";
import enquirer from "enquirer";

const printLogo = () => {
  console.log(
    chalk.magentaBright(
      figlet.textSync("hardhat-move", {
        horizontalLayout: "full",
      })
    )
  );
};

export async function createProject() {
  printLogo();
  const answers = await inquirer.prompt([
    {
      type: "list",
      name: "script",
      message: "What do you want to do?",
      choices: [
        "Create a JavaScript project",
        "Create a TypeScript project",
        "Create a empty hardhat.config.js",
        "Quit",
      ],
      filter(val: string) {
        return val.toLowerCase();
      },
    },
    {
      type: "list",
      name: "chain",
      message: "Which chain do you want to choose",
      choices: ["hardhat-move-aptos", "hardhat-move-sui"],
    },
  ]);

  console.log({ answers });
}

export const createWithEnquirer = async () => {
  printLogo();
  const answers = await enquirer.prompt([
    {
      name: "script",
      type: "select",
      message: "What do you want to do?",
      initial: 0,
      choices: [
        {
          name: "javascript",
          message: "Create a JavaScript project",
          value: "javascript",
        },
        {
          name: "typescript",
          message: "Create a TypeScript project",
          value: "typescript",
        },
        {
          name: "empty",
          message: "Create a empty hardhat.config.js",
          value: "empty",
        },
        {
          name: "Quit",
          message: "Quit",
          value: "Quit",
        },
      ],
    },
    {
      name: "chain",
      type: "select",
      message: "Which chain do you want to choose",
      choices: [
        {
          name: "aptos",
          message: "hardhat-move-aptos",
          value: "aptos",
        },
        {
          name: "sui",
          message: "hardhat-move-sui",
          value: "sui",
        },
      ],
    },
  ]);

  console.log({ answers });
};
