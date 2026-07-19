import {
  createSolanaRpc,
  devnet,
  generateKeyPairSigner,
} from "@solana/kit";

const LAMPORTS_PER_SOL = 1_000_000_000n;

const rpc = createSolanaRpc(devnet("https://api.devnet.solana.com"));
const wallet = await generateKeyPairSigner();

const { value: balanceLamports } = await rpc
  .getBalance(wallet.address)
  .send();

const balanceSol = Number(balanceLamports) / Number(LAMPORTS_PER_SOL);

console.log("=== SOL vs Lamports ===\n");
console.log(`Address: ${wallet.address}`);
console.log(`Balance (lamports): ${balanceLamports}`);
console.log(`Balance (SOL):      ${balanceSol} SOL\n`);

console.log("--- The Math ---");
console.log(`  ${balanceLamports} lamports ÷ 1,000,000,000 = ${balanceSol} SOL`);
console.log(`  ${balanceSol} SOL × 1,000,000,000 = ${BigInt(Math.round(balanceSol * 1e9))} lamports\n`);

console.log("--- Common Denominations ---");
const examples = [
  { label: "Base transaction fee", lamports: 5000n },
  { label: "Token account rent-exempt", lamports: 890880n },
  { label: "1 SOL", lamports: LAMPORTS_PER_SOL },
  { label: "Devnet airdrop (2 SOL)", lamports: LAMPORTS_PER_SOL * 2n },
];

for (const ex of examples) {
  const sol = Number(ex.lamports) / Number(LAMPORTS_PER_SOL);
  console.log(`  ${ex.label}: ${ex.lamports} lamports = ${sol} SOL`);
}

console.log("\nKey takeaway: Solana's runtime works exclusively in lamports.");
console.log("Always use integers (lamports) in code, not floats (SOL).");
