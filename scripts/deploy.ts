import fs from "fs";
import path from "path";
import toml from "@iarna/toml";
import { deploy } from "./aptos";

const root = path.join(__dirname, "../");
const tomlString = String(fs.readFileSync(`${root}/contracts/Move.toml`));

interface MoveConfig {
  package: {
    name: string;
    version: string;
  };
}
const moveConfig = JSON.parse(
  JSON.stringify(toml.parse(tomlString))
) as MoveConfig;

async function main() {
  const Message = getByteCode("Message");
  const tx = await deploy(Message);

  console.log({ tx });
}

function getByteCode(module: string): string {
  const Message = fs.readFileSync(
    `${root}/contracts/build/${moveConfig.package.name}/bytecode_modules/${module}.mv`,
    "hex"
  );
  const byteCode = `0x${Message}`;
  return byteCode;
}

// main().catch((error) => {});

function getContracts() {
  const contracts = fs.readdirSync(
    `${root}/contracts/build/${moveConfig.package.name}/bytecode_modules/`,
    {
      withFileTypes: true,
    }
  );

  console.log({ contracts });
}

getContracts();
