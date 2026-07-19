import {
  createSolanaRpc,
  devnet,
  generateKeyPairSigner,
} from "@solana/kit";

const rpc = createSolanaRpc(devnet("https://api.devnet.solana.com"));
const wallet = await generateKeyPairSigner();

const { value: lamports } = await rpc.getBalance(wallet.address).send();

const sol = Number(lamports) / 1_000_000_000;
const roundtrip = BigInt(Math.round(sol * 1_000_000_000));
const match = roundtrip === lamports;

console.log(`Wallet:        ${wallet.address}`);
console.log(`Lamports:      ${lamports}`);
console.log(`SOL:           ${sol}`);
console.log(`Roundtrip:     ${roundtrip}`);
console.log(`Match:         ${match ? "PASS" : "FAIL"}`);

if (lamports === 0n) {
  console.log("\nBalance is zero. Request a devnet airdrop:");
  console.log(`  solana airdrop 2 ${wallet.address} --url devnet`);
}

process.exit(match ? 0 : 1);
