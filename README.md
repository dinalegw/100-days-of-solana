

# 100-days-of-solana

A daily Solana development journey. Each day lives in its own folder (e.g. `day-01/`) with runnable scripts and focused exercises.

## Getting started

1. Install dependencies inside the day folder:
   ```bash
   cd day-01
   npm install
   ```
2. Run the day's scripts:
   ```bash
   node create-wallet.mjs
   node persistent-wallet.mjs
   ```

## Security

Wallet files (`wallet.json`) contain private keys and are ignored via `.gitignore`. Never commit them.

## Environment

These examples target **devnet**. For faucet funds, visit https://faucet.solana.com/.