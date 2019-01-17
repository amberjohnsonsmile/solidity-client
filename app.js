var Web3 = require('web3');

var web3 = new Web3();
web3.setProvider(`<span lang="zxx"><a href="https://mainnet.infura.io/v3/a26e672ce4f049e497dfc442176c2464">https://mainnet.infura.io/v3/a26e672ce4f049e497dfc442176c2464</a></span>`);
// How do we pull the account from MetaMask?
// See IPFS project for reference
web3.eth.defaultAccount = web3.eth.accounts[0];
