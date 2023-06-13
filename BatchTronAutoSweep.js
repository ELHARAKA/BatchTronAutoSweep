/**
 * Auto-Sweep Script for Tron (TRX)
 * Developed by Fahd Elharaka
 * Email: fahd@web3dev.ma / Telegram: @Thisiswhosthis
 *
 * DISCLAIMER:
 * 
 * This script is provided for educational and informational purposes only.
 * It is not intended for any illegal or unauthorized activities. 
 * 
 * The developer of this script shall not be responsible for any misuse or damage caused by the use of this script.
 * Use this script at your own risk and responsibility.
 */

const TronWeb = require('tronweb');
const fs = require('fs');

// Set up TronWeb instance with the desired network
const tronWeb = new TronWeb({
  fullHost: 'https://api.trongrid.io', // Use the desired Tron network endpoint
});

const privateKeyData = [];

// Read private keys from wallets.txt file
fs.readFile('wallets.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading wallets.txt:', err);
    return;
  }

  const lines = data.trim().split('\n');
  for (const line of lines) {
    const privateKey = line.trim();
    privateKeyData.push(privateKey);
  }

  console.log('Private keys loaded from wallets.txt file.');
  startAutoSweep();
});

const destinationAddress = 'TJYEyPS1U367gxs5pJLrRb6RosU9j6EZvR'; // Destination wallet address

async function getBalance(privateKey) {
  try {
    const address = await tronWeb.address.fromPrivateKey(privateKey);
    const balance = await tronWeb.trx.getBalance(address);
    return { address, balance };
  } catch (error) {
    console.error('Error retrieving balance:', error);
    throw error;
  }
}

async function sendTransaction(privateKey, to, amount) {
  try {
    const address = await tronWeb.address.fromPrivateKey(privateKey);
    const transaction = await tronWeb.transactionBuilder.sendTrx(to, amount, address);
    const signedTransaction = await tronWeb.trx.sign(transaction, privateKey);
    const result = await tronWeb.trx.sendRawTransaction(signedTransaction);
    return result;
  } catch (error) {
    console.error('Error sending transaction:', error);
    throw error;
  }
}

async function autoSweep() {
  try {
    for (const privateKey of privateKeyData) {
      const { address, balance } = await getBalance(privateKey);

      if (balance > 0) {
        console.log(`Available funds detected in source address ${address}: ${balance} TRX`);

        // Transfer funds to the destination address
        const result = await sendTransaction(privateKey, destinationAddress, balance);
        console.log(`Transferred ${balance} TRX from ${address} to ${destinationAddress}. Transaction ID: ${result.txid}`);
      } else {
        console.log(`No available funds detected in source address ${address}.`);
      }
    }
  } catch (error) {
    console.error('Auto-sweeping error:', error);
  }
}

function startAutoSweep() {
  // Run autoSweep every 60 seconds
  setInterval(autoSweep, 60000);
  console.log('Auto-sweeping started.');
}
