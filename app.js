var Web3 = require('web3');
var web3 = new Web3(ethereum);
ethereum.enable();
web3.eth.getAccounts().then(response => {
  web3.eth.defaultAccount = response[0] 
})

var customerContract = new web3.eth.Contract([
  {
    "constant": false,
    "inputs": [
      {
        "name": "id",
        "type": "uint256"
      },
      {
        "name": "name",
        "type": "string"
      },
      {
        "name": "dateOfBirth",
        "type": "uint256"
      },
      {
        "name": "social",
        "type": "uint256"
      }
    ],
    "name": "createCustomer",
    "outputs": [],
    "payable": false,
    "type": "function",
    "stateMutability": "nonpayable"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "index",
        "type": "uint256"
      },
      {
        "name": "name",
        "type": "string"
      }
    ],
    "name": "updateCustomer",
    "outputs": [],
    "payable": false,
    "type": "function",
    "stateMutability": "nonpayable"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "index",
        "type": "uint256"
      },
      {
        "name": "status",
        "type": "uint256"
      }
    ],
    "name": "updateCustomerStatus",
    "outputs": [],
    "payable": false,
    "type": "function",
    "stateMutability": "nonpayable"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "count",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "type": "function",
    "stateMutability": "view"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "index",
        "type": "uint256"
      }
    ],
    "name": "getCustomer",
    "outputs": [
      {
        "name": "id",
        "type": "uint256"
      },
      {
        "name": "name",
        "type": "string"
      },
      {
        "name": "dateOfBirth",
        "type": "uint256"
      },
      {
        "name": "social",
        "type": "uint256"
      },
      {
        "name": "status",
        "type": "uint256"
      }
    ],
    "payable": false,
    "type": "function",
    "stateMutability": "view"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "id",
        "type": "uint256"
      }
    ],
    "name": "getCustomerById",
    "outputs": [
      {
        "name": "idRet",
        "type": "uint256"
      },
      {
        "name": "name",
        "type": "string"
      },
      {
        "name": "dateOfBirth",
        "type": "uint256"
      },
      {
        "name": "social",
        "type": "uint256"
      },
      {
        "name": "status",
        "type": "uint256"
      }
    ],
    "payable": false,
    "type": "function",
    "stateMutability": "view"
  }
], '0x182a7998bbb436789766b7467b98870744e81cfd');

function register() {
  var id = document.getElementById('id').value;
  var name = document.getElementById('name').value;
  var social = document.getElementById('social').value;

  var dob = document.getElementById('dob').value;
  dob = dob.split("-");
  dob = dob[1] + "/" + dob[2] + "/" + dob[0];
  dob = new Date(dob).getTime();

  var txn = customerContract.methods.createCustomer(id, name, dob, social);
  console.log(txn);

  txn.send({from: web3.eth.defaultAccount})
}

document.getElementById('registration').addEventListener('click', event => {
  event.preventDefault();
  register();
});
