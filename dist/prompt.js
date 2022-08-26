"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createWithEnquirer = exports.createProject = void 0;
const chalk_1 = __importDefault(require("chalk"));
const figlet_1 = __importDefault(require("figlet"));
const inquirer_1 = __importDefault(require("inquirer"));
const enquirer_1 = __importDefault(require("enquirer"));
const printLogo = () => {
    console.log(chalk_1.default.magentaBright(figlet_1.default.textSync("hardhat-move", {
        horizontalLayout: "full",
    })));
};
function createProject() {
    return __awaiter(this, void 0, void 0, function* () {
        printLogo();
        const answers = yield inquirer_1.default.prompt([
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
                filter(val) {
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
    });
}
exports.createProject = createProject;
const createWithEnquirer = () => __awaiter(void 0, void 0, void 0, function* () {
    printLogo();
    const answers = yield enquirer_1.default.prompt([
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
});
exports.createWithEnquirer = createWithEnquirer;
