# 100 Days of Solana

A structured, hands-on journey through Solana development — one day, one topic, one folder at a time.

## Progress

| Day | Topic | Code |
|-----|-------|------|
| 01  | Create & persist a wallet | [`day-01/`](day-01/) |
| 02  | Understand SOL & Lamports | [`day-02/`](day-02/) |

> More days added as the journey continues.

## Prerequisites

- **Node.js** 18+ (with `npm`)
- **Solana CLI** — install if you haven't:
  ```bash
  sh -c "$(curl -sSfL https://release.anza.xyz/stable/install)"
  ```
- A code editor (VS Code, etc.)

### Quick CLI setup

```bash
solana-keygen new --no-bip39-passphrase
solana config set --url devnet
solana address
```

All examples target **devnet**. Get test SOL at [faucet.solana.com](https://faucet.solana.com).

## How to run any day

From the **project root**:

```bash
npm install          # installs all day dependencies
npm run <script>     # e.g. npm run create-wallet
```

Or from inside a day folder:

```bash
cd day-XX
npm install
node <script>.mjs
```

Each `day-XX/` is a self-contained npm workspace. Available root scripts are listed under `scripts` in the root `package.json`.

## Security

Wallet files (`wallet.json`) and `node_modules` are git-ignored. **Never commit private keys.**

## Resources

- [Solana Docs](https://solana.com/docs)
- [@solana/kit](https://www.npmjs.com/package/@solana/kit)
- [Solana Faucet](https://faucet.solana.com)
