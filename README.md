# 100 Days of Solana

A structured, hands-on journey through Solana development — one day, one topic, one folder at a time.

## Progress

| Day | Topic | Code |
|-----|-------|------|
| 01  | Create & persist a wallet | [`day-01/`](day-01/) |

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

```bash
cd day-XX
npm install
node <script>.mjs
```

Each `day-XX/` folder is self-contained with its own `package.json`.

## Security

Wallet files (`wallet.json`) and `node_modules` are git-ignored. **Never commit private keys.**

## Resources

- [Solana Docs](https://solana.com/docs)
- [@solana/kit](https://www.npmjs.com/package/@solana/kit)
- [Solana Faucet](https://faucet.solana.com)
