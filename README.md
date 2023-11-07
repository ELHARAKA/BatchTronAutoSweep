<h1>BatchTronAutoSweep</h1>

<p>BatchTronAutoSweep is a powerful script that automates the process of transferring TRX balances from multiple private keys to a designated destination address. With seamless integration with TronWeb and file input support, it simplifies the sweeping of funds from various wallets, saving time and effort.</p>

<h1>BatchTronAutoSweep - Demo Version</h1>

<p>This demo script in this repo demonstrates an auto-sweeping functionality for Tron (TRX) wallets. It reads a list of wallet addresses from a file, simulates balance retrieval, and transfers any available funds to a designated destination address. It is a proof of concept and doesn't involve real TRX balances or transactions.</p>

<h2>Usage DEMO ONLY</h2>

<p>To run the demo, follow these steps:</p>

<ol>
  <li>Clone the repository or download the demo script.</li>
  <li>Make sure you have Node > 14 installed on your system.</li>
  <li>Open a terminal or command prompt in the directory where the script is located.</li>
  <li>Install the required dependencies by running the command: <code>npm install tronweb</code></li>
  <li>Update the <code>demowallets.txt</code> file with the desired wallet private keys.</li>
  <li>Run the script using the command: <code>node multitronsweepdemo.js</code></li>
</ol>

<h2>Please note</h2>
<p>This script is a demo version provided for evaluation purposes only. It does not interact with real TRX balances or perform actual transactions. Use this demo script to understand the functionality.</p>


<h2>Features - Full Version</h2>
<p>The full version of the BatchTronAutoSweep script offers a comprehensive set of features to simplify and streamline the management of TRX balances. It enables automated sweeping of TRX balances from multiple private keys to a designated destination address. The integration with TronWeb ensures seamless transaction handling, providing a smooth and reliable experience.</p>
<p>With easy-to-use file input support, you can conveniently provide the private keys of the source wallets, allowing for efficient management of multiple wallets in one go. The script also includes real-time balance detection, which automatically retrieves and updates the balances of the source addresses, enabling efficient fund management.</p>
<p>To ensure reliability, the full version of the script incorporates error handling and logging mechanisms. This ensures that any errors or issues encountered during the sweeping process are properly handled and logged, providing visibility into the script's operation.</p>
<p>Please note that the full version of BatchTronAutoSweep is not available as an open-source project. For inquiries regarding the purchase of the full version, please contact the developer at <a href="mailto:fahd@web3dev.ma">fahd@web3dev.ma</a> or <a href="https://t.me/Thisiswhosthis">via Telegram</a>.</p>

<h2>Overview</h2>

<p>The script sets up a TronWeb instance by providing the desired network endpoint.</p>
<p>It reads private keys from a "wallets.txt" file and stores them in the privateKeyData array.</p>
<p>The <code>getBalance</code> function retrieves the balance of a given address by using the provided private key.</p>
<p>The <code>sendTransaction</code> function creates and sends a transaction from a source address (identified by the private key) to the specified destination address.</p>
<p>The <code>autoSweep</code> function iterates through the private keys in <code>privateKeyData</code>, checks their balances, and transfers any available funds to the destination address.</p>
<p>The <code>startAutoSweep</code> function sets up a periodic timer to execute the <code>autoSweep</code> function every 60 seconds.</p>
<p>The script starts the auto-sweeping process by calling the <code>startAutoSweep</code> function.</p>

<p>In summary, this script continuously checks the balances of the provided private keys and transfers any available funds to the specified destination address. It automates the sweeping process, making it easier to manage TRX balances across multiple wallets.</p>

<h2>Usage</h2>
<ol>
  <li>Clone the repository.</li>
  <li>Install the required dependencies using <code>npm install tronweb</code>.</li> make sure you have node version > 14.
  <li>Prepare a <code>wallets.txt</code> file with the private keys of the source wallets.</li>
  <li>Customize the <code>destinationAddress</code> variable in <code>BatchTronAutoSweep.js</code> with your desired destination wallet address.</li>
  <li>Run the script using <code>node BatchTronAutoSweep.js</code>.</li>
  <li>Sit back and let the script automatically transfer TRX balances from the source wallets to the destination address.</li>
</ol>

<h2>License</h2>

<p>This project is licensed under the <a href="LICENSE">MIT License</a>.</p>

<p>For sweeping balances from 1 single private key to one destination wallet, please refer to <a href="https://github.com/ELHARAKA/TrxAutoSweep">this repository</a>.</p>
