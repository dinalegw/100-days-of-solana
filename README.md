# 100 Days of Solana

A daily Solana development journey. Each day lives in its own folder (e.g. `day-01/`) with runnable scripts and focused exercises.

## Prerequisites

- Node.js 18+
- Solana CLI
- A code editor

## Solana CLI Setup

1. Install the Solana CLI:
   ```bash
   sh -c "$(curl -sSfL https://release.anza.xyz/stable/install)"
   ```
2. Close and reopen your terminal, or run:
   ```bash
   export PATH="$HOME/.local/share/solana/install/active_release/bin:$PATH"
   ```
3. Verify the installation:
   ```bash
   solana --version
   ```
4. Set up a CLI wallet and configure it for devnet:
   ```bash
   solana-keygen new --no-bip39-passphrase
   solana config set --url devnet
   ```
5. View your wallet address:
   ```bash
   solana address
   ```

## Day 1: Create a Wallet

Generate a new Solana wallet programmatically and check its balance.

```bash
cd day-01
npm install
node create-wallet.mjs
```

## Day 2: Persistent Wallet

Build a script that generates a keypair, saves it to a local JSON file, and can reload it on subsequent runs.

```bash
cd day-01
npm install
node persistent-wallet.mjs
```

The first run creates a new wallet and saves it to `wallet.json`. Every subsequent run loads the same wallet.

## Security

Wallet files (`wallet.json`) contain private keys and are ignored via `.gitignore`. Never commit them.

## Environment

These examples target **devnet**. For faucet funds, visit https://faucet.solana.com/.
