import { PendingTransaction } from "aptos/dist/generated";
import { AptosAccount, AptosClient, HexString, TxnBuilderTypes } from "aptos";
import config from "../hardhat.config";

const FULL_NODE = "https://fullnode.devnet.aptoslabs.com/";
const client = new AptosClient(FULL_NODE);
const privateKey =
  "0xd608d9e850f4bb35a692f7ad4829d5e14a837e4a4e2c8d05340d5b820f454061";

export async function deploy(byteCode: string): Promise<PendingTransaction> {
  const privateKeyObject = { privateKeyHex: privateKey };
  const account = AptosAccount.fromAptosAccountObject(privateKeyObject);

  const moduleBundlePayload =
    new TxnBuilderTypes.TransactionPayloadModuleBundle(
      new TxnBuilderTypes.ModuleBundle([
        new TxnBuilderTypes.Module(new HexString(byteCode).toUint8Array()),
      ])
    );
  const [{ sequence_number: sequenceNumber }, chainId] = await Promise.all([
    client.getAccount(account.address()),
    client.getChainId(),
  ]);

  const rawTxn = new TxnBuilderTypes.RawTransaction(
    TxnBuilderTypes.AccountAddress.fromHex(account.address()),
    BigInt(sequenceNumber),
    moduleBundlePayload,
    1000n,
    1n,
    BigInt(Math.floor(Date.now() / 1000) + 10),
    new TxnBuilderTypes.ChainId(chainId)
  );

  const bcsTxn = AptosClient.generateBCSTransaction(account, rawTxn);
  const transactionRes = await client.submitSignedBCSTransaction(bcsTxn);
  console.log({ transactionRes });
  return transactionRes;
}
