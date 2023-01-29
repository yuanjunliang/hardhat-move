import { program } from "commander";
import shell from "shelljs";
import { createProject } from "./prompt";

export function handleCommand() {
  program.command("check").action(() => {
    console.log("check command");
  });
  program.command("clean").action(() => {
    console.log("clean command");
  });
  program.command("compile").action(() => {
    // console.log("compile command");
    shell.exec("aptos move compile");
  });
  program.command("console").action(() => {
    console.log("console command");
  });
  program.command("coverage").action(() => {
    console.log("coverage command");
  });
  program.command("flatten").action(() => {
    console.log("flatten command");
  });
  program.command("help").action(() => {
    console.log("help command");
  });
  program.command("node").action(() => {
    console.log("node command");
  });
  program.command("run").action(() => {
    console.log("run command");
  });
  program.command("test").action(() => {
    console.log("test command");
  });
  program.command("verify").action(() => {
    console.log("verify command");
  });

  const argvs = process.argv.slice(2);
  if (argvs.length === 0) {
    createProject();
  } else {
    program.parse();
  }
}
