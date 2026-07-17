import { generateKeyPairSigner } from "@solana/kit";

const wallet = await generateKeyPairSigner();

console.log(`Wallet: ${wallet.address}`);
console.log("Fund this wallet from the devnet faucet before using it.");
