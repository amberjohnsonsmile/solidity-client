# Smart Contract Client

This smart contract app connects to a locally deployed Ethereum smart contract. The contract manages a list of customers. Only users with permission, identified by address, may create a customer. Only the "owner" address can edit the list of permissioned users.

## How to Run Locally

1. Install browserify and ganache-cli by running `npm install -g browserify ganache-cli`.
1. Run `ganache-cli` from any directory. A mnemonic phrase will display - copy this phrase.
1. Install the MetaMask Chrome extension from [here](https://metamask.io/).
1. From the MetaMask Chrome extension, select "Localhost 8545" and click "Import using account seed phrase". Paste the mnemonic phrase from Ganache and create a new password to sign in.
1. Clone down this repo and navigate into the cloned directory.
1. Run `npm install`.
1. Visit remix.ethereum.org and copy and paste the contents of `contract.sol` into a new contract. Select compiler version 0.4.11 and compile the contract. In the "Run" tab, select "Injected Web3" for "Environment" to connect to MetaMask. Click "Deploy". When MetaMask asks for confirmation, click "Confirm". Contract methods will now be available in Remix from the "Run" tab. In "Deployed Contracts", click the "ACLContract" method and again confirm thorugh MetaMask. This will set the current MetaMask address to the "owner", giving that address admin privileges.
1. Back in the cloned directory, open `app.js`. Edit the `contractAddress` value to reflect the address of the locally deployed contract, which will display next to the contract in the "Deployed Contracts" section on Remix.
1. Run `browserify app.js -o bundle.js`.
1. Run `http-server` to start the app.
1. Visit the app from the Chrome browser. When MetaMask asks for permission, click "Connect". You can now create a customer, access an existing customer, and add other addresses to the list of users who can create customers. Try selecting another account from MetaMask and refreshing the page! Only certain features will be available based on the current address.
