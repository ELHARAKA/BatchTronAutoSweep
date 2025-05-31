> 💡 **Interested in using BTAS PRO?**  
> You can purchase the tool at: [https://btaspro.web3dev.ma/](https://btaspro.web3dev.ma/)

# BTAS PRO - User Guide

## Table of Contents

1. [Introduction](#introduction)
2. [Prerequisites](#prerequisites)
3. [Setup](#setup)
4. [Configuration](#configuration)
5. [Wallet Setup](#wallet-setup)
6. [Running BTAS PRO](#running-btas-pro)
7. [Sweep Modes](#sweep-modes)
8. [Understanding Output](#understanding-output)
9. [Troubleshooting](#troubleshooting)
10. [Best Practices](#best-practices)
11. [Support](#support)

---

## Introduction

BTAS PRO (Batch-Tron-Auto-Sweep Professional) is an automated tool designed to efficiently collect TRX and TRC-20 tokens from multiple wallets and consolidate them into a single destination wallet. The tool continuously monitors your wallets and automatically transfers any available funds to your main wallet.

> 🔒 **Note:** This tool is distributed in obfuscated form to protect its proprietary logic and prevent unauthorized redistribution. This does **not** affect functionality or usage for legitimate users.

**Key Features:**

- Automatic TRX sweeping from multiple wallets
- TRC-20 token sweeping with smart contract interactions
- Real-time monitoring and status updates
- Automated cycling with configurable intervals
- Comprehensive logging and statistics
- Support for both TESTNET and MAINNET

---

## Prerequisites

Before using BTAS PRO, ensure you have the following installed on your system:

### Required Software

#### Node.js v22.15.0 LTS

- Download from: <https://nodejs.org/>
- Choose the "LTS" (Long Term Support) version
- Verify installation by opening terminal/command prompt and typing: `node --version`
- You should see: `v22.15.0` (or similar)

#### Latest npm (Node Package Manager)

- Usually comes with Node.js
- Verify by typing: `npm --version`
- Update if needed: `npm install -g npm@latest`

### System Requirements

- Windows 10/11, macOS 10.15+, or Linux
- Stable internet connection
- At least 100MB free disk space

---

## Setup

Follow these steps to set up BTAS PRO:

### Extract Files

1. Extract the BTAS PRO package (`btaspro-vX.X.zip`) to your desired location
2. Open a terminal (or Command Prompt)
3. Navigate into the BTAS PRO folder:

   ```bash
   cd path/to/BTAS-PRO-folder
   ```

> 💡 All required dependencies are already bundled and obfuscated.
> You do **not** need to run `npm install`.

---

## Configuration

### Step 1: Create Environment File

1. Locate the `env_sample` file in your BTAS PRO folder
2. Copy this file and rename the copy to `.env`
3. Open the `.env` file in a text editor

### Step 2: Network Selection

Choose between TESTNET (for testing) or MAINNET (for real transactions):

**For TESTNET (Recommended for first-time users):**

- Keep the current settings as they are
- TESTNET uses fake TRX for testing purposes
- No real money is involved

**For MAINNET (Real transactions):**

- Uncomment the MAINNET lines by removing the `#` symbol:

  ```dotenv
  FULL_HOST=https://api.trongrid.io
  ```

- Comment out the TESTNET line by adding `#`:

  ```dotenv
  # FULL_HOST=https://nile.trongrid.io
  ```

- Update the contract address:

  ```dotenv
  CONTRACT_ADDRESS=TVXKK6wa6DbvenDwW3triaJktUfBoFf76D
  ```

### Step 3: Configure Your Destination Wallet

**DESTINATION_ADDRESS:**

- This is where all collected TRX and tokens will be sent
- Replace `TV..............................GD` with your actual TRON wallet address
- Example: `DESTINATION_ADDRESS=TQn9Y2khEsLJW1ChVWFMSMeRDow5KcbLSE`

**DESTINATION_PRIVATE_KEY:**

- This is the private key for your destination wallet
- Replace `431............................................................B9` with your actual private key
- **IMPORTANT:** Keep this private key secure and never share it

**API Key (Optional but Recommended):**

- The included API key works for basic usage
- For heavy usage, get your own free API key from <https://www.trongrid.io/>
- Replace the `TRON_API_KEY` value with your personal key

### Step 4: Timing Settings (Optional)

You can adjust these settings if needed:

- `RATE_LIMIT_MS=100` - Delay between API calls (milliseconds)
- `CYCLE_PAUSE_MS=60000` - Wait time between sweep cycles (60 seconds)
- `BACKOFF_ON_503_MS=3000` - Wait time when hitting rate limits

---

## Wallet Setup

### Preparing Your Wallets

1. Create a file named `wallets.txt` in the BTAS PRO folder (if it doesn't exist)
2. Add one private key per line
3. Each private key should be 64 characters long
4. Example format:

   ```text
   A1B2C3D4E5F6789012345678901234567890123456789012345678901234567890
   B2C3D4E5F6789012345678901234567890123456789012345678901234567890A1
   C3D4E5F6789012345678901234567890123456789012345678901234567890A1B2
   ```

### Important Notes

- **Never share your private keys** with anyone
- Make sure each private key is valid (64 hexadecimal characters)
- The tool will automatically derive wallet addresses from these private keys
- You can add as many wallets as needed (tested with thousands)
- Keep a backup of your `wallets.txt` file in a secure location

---

## Running BTAS PRO

### Starting the Application

1. Open terminal or command prompt
2. Navigate to the BTAS PRO folder
3. Run the tool using either of the following methods:

   **Method 1: Using npm**

   ```bash
   npm start
   ```

   **Method 2: Using node:**

   ```bash
   node btaspro.js
   ```

> ✅ Both methods launch the tool via the provided launcher script (`btaspro.js`) which internally runs the protected core in `dist/btaspro.obf.cjs`.

### Initial Startup

When you start BTAS PRO, you'll see:

1. **ASCII Art Banner** - Shows "BTAS PRO" in large letters
2. **Developer Information** - Credits and contact details
3. **Wallet Loading** - Confirmation of how many wallets were loaded
4. **Main Menu** - Options to choose your sweep mode

### Main Menu Options

You'll be presented with three choices:

```bash
Select sweep mode:
1 - Sweep TRX
2 - Sweep TRC-20
3 - Quit

Enter choice (1-3):
```

#### Option 1: Sweep TRX

- Automatically collects TRX from all your wallets
- Runs continuously until you stop it

#### Option 2: Sweep TRC-20

- Collects specific TRC-20 tokens from your wallets
- You'll need to provide the token contract address
- You can set a minimum balance threshold

#### Option 3: Quit

- Safely exits the application

---

## Sweep Modes

### TRX Sweep Mode

**What it does:**

- Monitors all wallets for TRX balances
- Automatically transfers TRX to your destination wallet
- Accounts for transaction fees and keeps small amounts for future transactions

**How it works:**

1. Checks all wallet balances simultaneously
2. Calculates required fees for each transaction
3. Transfers maximum possible amount (balance minus fees)
4. Repeats the process every 60 seconds (configurable)

**When to use:**

- When you want to collect TRX from multiple wallets
- For regular consolidation of TRX earnings
- When you have wallets receiving TRX payments

### TRC-20 Sweep Mode

**What it does:**

- Collects specific TRC-20 tokens (like USDT, USDC, etc.)
- Handles token approvals automatically
- Funds wallets with TRX when needed for transaction fees

**Setup process:**

1. **Token Contract Address:** Enter the contract address of the token you want to collect
   - Example for USDT: `TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t`
   - You can find contract addresses on TRONSCAN.org

2. **Minimum Balance Threshold:** Set the minimum token amount required to trigger a sweep
   - Example: Enter `5` to only sweep wallets with 5+ tokens
   - Helps avoid unnecessary transactions for small amounts

**How it works:**

1. Checks all wallets for token balances above your threshold
2. For wallets with insufficient TRX for fees, automatically funds them
3. Approves your destination wallet to spend tokens (one-time setup per wallet)
4. Transfers all tokens to your destination wallet
5. Collects any leftover TRX from funded wallets
6. Repeats the process every 60 seconds

**When to use:**

- When collecting specific TRC-20 tokens
- For automated token consolidation
- When managing multiple wallets receiving token payments

---

## Understanding Output

### Real-Time Status Display

While running, BTAS PRO shows a live status screen:

```bash
🌀 Sweep started at 14:30:25

📈 Monitoring:    150 wallets
⌛ Uptime:        00:05:23 - Running...
💰 Collected:     12.456789 TRX
✅ Success TXs:   8
❌ Failed TXs:    0
```

**Status Indicators:**

- **Monitoring:** Number of wallets being watched
- **Uptime:** How long the current session has been running
- **Collected:** Total amount collected in current session
- **Success TXs:** Number of successful transactions
- **Failed TXs:** Number of failed transactions

### Log Messages

BTAS PRO creates a `sweep.log` file with detailed information:

**Successful Transaction:**

```log
[2024-01-15T14:30:45.123Z] TX SUCCESS from TQn9Y2khEsLJW1ChVWFMSMeRDow5KcbLSE | 5.234567 TRX | TXID: abc123...
```

**Token Transfer:**

```log
[2024-01-15T14:31:12.456Z] TOKEN TRANSFER SUCCESS from TQn9Y2khEsLJW1ChVWFMSMeRDow5KcbLSE | 100.50 USDT | TXID: def456...
```

**Wallet Funding:**

```log
[2024-01-15T14:31:30.789Z] FUNDED TQn9Y2khEsLJW1ChVWFMSMeRDow5KcbLSE with 2.5 TRX | TXID: ghi789...
```

### Stopping the Application

To stop BTAS PRO safely:

1. Press `Ctrl+C` (Windows/Linux) or `Cmd+C` (Mac)
2. The application will finish current operations and exit cleanly
3. You'll return to the main menu where you can choose a different mode or quit

---

## Troubleshooting

### Common Issues and Solutions

#### Problem: "Error loading wallets.txt"

- **Solution:** Make sure `wallets.txt` exists in the BTAS PRO folder
- Check that each line contains a valid 64-character private key
- Ensure there are no empty lines or extra spaces

#### Problem: "Insufficient TRX balance"

- **Solution:** Your destination wallet needs TRX to pay for transaction fees
- Add more TRX to your destination wallet
- For TRC-20 sweeping, the tool automatically funds wallets but needs TRX in the destination

#### Problem: "Invalid contract address"

- **Solution:** Double-check the TRC-20 token contract address
- Verify the address on TRONSCAN.org
- Make sure you're using the correct network (TESTNET vs MAINNET)

#### Problem: "Connection timeout" or "503 errors"

- **Solution:** This usually indicates network issues or API rate limiting
- Wait a few minutes and try again
- Check your internet connection
- Consider getting a personal API key from TronGrid

#### Problem: "Transaction failed" messages

- **Solution:** This can happen due to:
  - Insufficient balance for fees
  - Network congestion
  - Invalid wallet addresses
- Check the log file for specific error details

### Network-Specific Issues

**TESTNET Issues:**

- TESTNET can be unstable and slower than MAINNET
- Some features might not work exactly like MAINNET
- Use TESTNET only for learning and testing

**MAINNET Issues:**

- Ensure you have real TRX for transaction fees
- Double-check all addresses before running
- Start with small amounts to test your setup

### Getting Help

If you encounter issues not covered here:

1. Check the `sweep.log` file for detailed error messages
2. Verify your `.env` configuration
3. Test with a small number of wallets first
4. Contact support with specific error messages and log details

---

## Best Practices

### Security Recommendations

**Private Key Safety:**

- Never share your private keys with anyone
- Keep backups of your `wallets.txt` and `.env` files in secure locations
- Use strong passwords for any encrypted storage
- Consider using hardware wallets for large amounts

**Testing First:**

- Always test with TESTNET before using MAINNET
- Start with a small number of wallets to verify everything works
- Test with small amounts before processing larger sums

### Operational Tips

**Wallet Management:**

- Keep your destination wallet funded with sufficient TRX
- Monitor the application regularly, especially during initial runs
- Check the log file periodically for any issues

**Performance Optimization:**

- BTAS PRO uses off-chain batch balance checks with chunking (2250 wallets per call), making it capable of handling even 1,000,000+ wallets efficiently — runtime scales linearly and remains stable
- You do **not** need to run during off-peak hours, regardless of wallet count
- Adjust `RATE_LIMIT_MS` in the `.env` file if you encounter RPC rate limits or 503 errors
- Use a stable internet connection to ensure consistent sweep cycles

**Monitoring:**

- Keep the application window visible to monitor real-time status
- Check `sweep.log` regularly for detailed transaction history
- Set up alerts if you need to monitor remotely

### Maintenance

**Regular Tasks:**

- Update Node.js when new LTS versions are released
- Keep your API key active (if using a personal one)
- Backup your configuration files regularly
- Monitor your destination wallet balance

**Troubleshooting Preparation:**

- Keep a record of your configuration settings
- Document any custom modifications you make
- Maintain contact information for support if needed

### Legal and Compliance

**Important Reminders:**

- Ensure you have legal ownership of all wallets you're sweeping
- Comply with local regulations regarding cryptocurrency transactions
- Keep records of all transactions for tax purposes
- Use the tool responsibly and ethically

---

## Conclusion

BTAS PRO is a powerful tool for automating TRX and TRC-20 token collection across multiple wallets. By following this guide, you should be able to set up and run the application successfully.

Remember to:

- Start with TESTNET for learning
- Keep your private keys secure
- Monitor the application during operation
- Check logs regularly for any issues

For additional support or questions, refer to the contact information below.

## Support

If you encounter any issues while using BTAS PRO, or have questions about functionality, feel free to reach out directly.

### 📬 Contact

- **Email:** [fahd@web3dev.me](mailto:fahd@web3dev.me)
- **Telegram (faster response):** [@Thisiswhosthis](https://t.me/Thisiswhosthis)

### 🌐 Developer Info

- **Website:** [web3dev.ma](https://web3dev.ma/)
- **GitHub:** [github.com/ELHARAKA](https://github.com/ELHARAKA)

> 💡 Please provide details such as your OS, Node version, and any logs/screenshots that might help reproduce the issue.

**Happy sweeping!** 🚀
