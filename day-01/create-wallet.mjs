import {
  address,
  createSolanaRpc,
  devnet,
} from "@solana/kit";

const rpc = createSolanaRpc(devnet("https://api.devnet.solana.com"));
const walletAddress = address("FkQW8vFXLtsvZHCkCViy1Gf9pKSKJeTdtAo1US4DtZF4");

const { value: balance } = await rpc.getBalance(walletAddress).send();
const balanceInSol = Number(balance) / 1_000_000_000;

console.log(`Wallet: ${walletAddress}`);
console.log(`Balance: ${balanceInSol} SOL`);
