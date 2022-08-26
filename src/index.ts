#!/usr/bin/env node
// import { createProject } from "./prompt";
// import shell from "shelljs";
// const args = process.argv.slice(2);

import { handleCommand } from "./command";

async function main() {
  handleCommand();
}

main();
