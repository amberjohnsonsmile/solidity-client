var Web3 = require('web3');
var web3 = new Web3(ethereum);
ethereum.enable();
web3.eth.getAccounts().then(response => {
  web3.eth.defaultAccount = response[0] 
})

var customerContract = new web3.eth.Contract([
  {
    "constant": false,
    "inputs": [],
    "name": "ACLContract",
    "outputs": [],
    "payable": false,
    "type": "function",
    "stateMutability": "nonpayable"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "user",
        "type": "address"
      }
    ],
    "name": "addUser",
    "outputs": [],
    "payable": false,
    "type": "function",
    "stateMutability": "nonpayable"
  },
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
        "name": "i",
        "type": "uint256"
      }
    ],
    "name": "deleteIthUser",
    "outputs": [],
    "payable": false,
    "type": "function",
    "stateMutability": "nonpayable"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "candidate",
        "type": "address"
      },
      {
        "name": "method",
        "type": "string"
      }
    ],
    "name": "isUser",
    "outputs": [
      {
        "name": "",
        "type": "bool"
      }
    ],
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
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "name": "by",
        "type": "address"
      },
      {
        "indexed": true,
        "name": "accessTime",
        "type": "uint256"
      },
      {
        "indexed": false,
        "name": "method",
        "type": "string"
      },
      {
        "indexed": false,
        "name": "desc",
        "type": "string"
      }
    ],
    "name": "LogAccess",
    "type": "event"
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
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "i",
        "type": "uint256"
      }
    ],
    "name": "getIthUser",
    "outputs": [
      {
        "name": "",
        "type": "address"
      }
    ],
    "payable": false,
    "type": "function",
    "stateMutability": "view"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "getUserCount",
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
    "inputs": [],
    "name": "owner",
    "outputs": [
      {
        "name": "",
        "type": "address"
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
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "users",
    "outputs": [
      {
        "name": "",
        "type": "address"
      }
    ],
    "payable": false,
    "type": "function",
    "stateMutability": "view"
  }
], '0xeef98fae25037b7790e6d407f0d28dc3347a08fa');

function register() {
  var id = document.getElementById('id').value;
  var name = document.getElementById('name').value;
  var social = document.getElementById('social').value;

  var dob = document.getElementById('dob').value;
  dob = dob.split("-");
  dob = dob[1] + "/" + dob[2] + "/" + dob[0];
  dob = new Date(dob).getTime();

  var txn = customerContract.methods.createCustomer(id, name, dob, social);
  txn.send({from: web3.eth.defaultAccount})
}

function getCustomer() {
  var id = document.getElementById('customerId').value;
  var txn = customerContract.methods.getCustomerById(id);

  txn.call().then(response => {
    document.getElementById('customer-id').innerHTML = 'ID: '
    document.getElementById('customer-id-val').innerHTML = response.idRet
    document.getElementById('customer-name').innerHTML = 'Name: '
    document.getElementById('customer-name-val').innerHTML = response.name
    document.getElementById('customer-dob').innerHTML = 'DOB: '
    document.getElementById('customer-dob-val').innerHTML = new Date(parseInt(response.dateOfBirth.substring(0,10)))
    document.getElementById('customer-social').innerHTML = 'SSN: '
    document.getElementById('customer-social-val').innerHTML = response.social
  });
}

document.getElementById('registration').addEventListener('click', event => {
  event.preventDefault();
  register();
});

document.getElementById('getById').addEventListener('click', event => {
  event.preventDefault();
  getCustomer();
});

customerContract.getPastEvents('allEvents', response => {
  console.log(response);
  document.getElementsByClassName('logs')[0].innerHTML = response;
});

function isAdmin() {
  customerContract.methods.isAdmin(web3.eth.defaultAccount)
    .call()
    .then(response => {
      console.log(response)
    })
  // If true display the admin tools
  // if (true) {
  //   document.getElementsByClassName('admin')[0].display = "inline-block";
  // }
}

isAdmin();
