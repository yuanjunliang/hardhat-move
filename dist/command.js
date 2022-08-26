"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleCommand = void 0;
const commander_1 = require("commander");
const prompt_1 = require("./prompt");
function handleCommand() {
    commander_1.program.command("check").action(() => {
        console.log("check command");
    });
    commander_1.program.command("clean").action(() => {
        console.log("clean command");
    });
    commander_1.program.command("compile").action(() => {
        console.log("compile command");
    });
    commander_1.program.command("console").action(() => {
        console.log("console command");
    });
    commander_1.program.command("coverage").action(() => {
        console.log("coverage command");
    });
    commander_1.program.command("flatten").action(() => {
        console.log("flatten command");
    });
    commander_1.program.command("help").action(() => {
        console.log("help command");
    });
    commander_1.program.command("node").action(() => {
        console.log("node command");
    });
    commander_1.program.command("run").action(() => {
        console.log("run command");
    });
    commander_1.program.command("test").action(() => {
        console.log("test command");
    });
    commander_1.program.command("verify").action(() => {
        console.log("verify command");
    });
    const argvs = process.argv.slice(2);
    if (argvs.length === 0) {
        (0, prompt_1.createProject)();
    }
    else {
        commander_1.program.parse();
    }
}
exports.handleCommand = handleCommand;
