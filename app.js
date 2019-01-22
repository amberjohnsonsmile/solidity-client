const Web3 = require('web3');
const web3 = new Web3(ethereum);
ethereum.enable();

const contractAddress = '0x98ada3ae1316915105d004cb586826f8c69af001';
const abi = [
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
  },
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
        "name": "user",
        "type": "address"
      }
    ],
    "name": "deleteUser",
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
    "inputs": [],
    "name": "isOwner",
    "outputs": [
      {
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "type": "function",
    "stateMutability": "view"
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
  }
];

const customerContract = new web3.eth.Contract(abi, contractAddress);
initialize();

function initialize() {
  web3.eth.getAccounts().then(response => {
    web3.eth.defaultAccount = response[0];
    isUser();
    isAdmin();
  });
  addEventListeners();
}

function addEventListeners() {
  document.getElementById('registration').addEventListener('click', event => {
    event.preventDefault();
    addCustomer();
  });

  document.getElementById('getById').addEventListener('click', event => {
    event.preventDefault();
    getCustomer();
  });

  document.getElementById('add-user').addEventListener('click', event => {
    event.preventDefault();
    addUser();
  });

  document.getElementById('delete-user').addEventListener('click', event => {
    event.preventDefault();
    deleteUser();
  });
}

function addCustomer() {
  const id = document.getElementById('id').value;
  const name = document.getElementById('name').value;
  const social = document.getElementById('social').value;

  var dob = document.getElementById('dob').value;
  dob = dob.split("-");
  dob = dob[1] + "/" + dob[2] + "/" + dob[0];
  dob = new Date(dob).getTime();

  const txn = customerContract.methods.createCustomer(id, name, dob, social);
  txn.send({from: web3.eth.defaultAccount})
    .then(response => {
      document.getElementsByClassName('customer')[0].reset();
      if (response.status) alert('Customer created!')
      else alert('Customer creation failed.')
    });
}

function addUser() {
  const address = document.getElementById('user-address').value;
  const txn = customerContract.methods.addUser(address);
  txn.send({from: web3.eth.defaultAccount})
    .then(response => {
      document.getElementsByClassName('add-user')[0].reset();
      if (response.status) alert('User added!')
      else alert('Failed to add user.')
    });
}

function deleteUser() {
  const address = document.getElementById('user-index').value;
  const txn = customerContract.methods.deleteUser(address);
  txn.send({from: web3.eth.defaultAccount})
    .then(response => {
      document.getElementsByClassName('delete-user')[0].reset();
      if (response.status) alert('User deleted!')
      else alert('Failed to delete user.')
    });
}

function getCustomer() {
  const id = document.getElementById('customerId').value;
  const txn = customerContract.methods.getCustomerById(id);

  txn.call().then(response => {
    document.getElementsByClassName('get-customer')[0].reset();

    document.getElementById('customer-id').innerHTML = 'ID: '
    document.getElementById('customer-id-val').innerHTML = response.idRet
    document.getElementById('customer-name').innerHTML = 'Name: '
    document.getElementById('customer-name-val').innerHTML = response.name
    document.getElementById('customer-dob').innerHTML = 'DOB: '
    document.getElementById('customer-dob-val').innerHTML = new Date(parseInt(response.dateOfBirth))
    document.getElementById('customer-social').innerHTML = 'SSN: '
    document.getElementById('customer-social-val').innerHTML = response.social
  });
}

function getLogs() {
  customerContract.getPastEvents('allEvents')
    .then(logs => {
      if (logs.length > 0) {
        logs.forEach(log => {
          const headerElement = document.createElement('h3');
          const headerText = document.createTextNode(`Log ${log['logIndex']}:`)
          headerElement.appendChild(headerText);

          const logElement = document.createElement('ul');
          const keys = Object.keys(log);

          keys.forEach(key => {
            const listElement = document.createElement('li');
            const text = document.createTextNode(`${key}: ${JSON.stringify(log[key])}`);
            listElement.appendChild(text);
            logElement.appendChild(listElement);
          });

          document.getElementsByClassName('logs')[0].appendChild(headerElement);
          document.getElementsByClassName('logs')[0].appendChild(logElement);
        });
      } else {
        const pElement = document.createElement('p');
        const text = document.createTextNode('No logs to display.');
        pElement.appendChild(text);
        document.getElementsByClassName('logs')[0].appendChild(pElement);
      }
    });
}

function isUser() {
  customerContract.methods.isUser(web3.eth.defaultAccount, 'genAccess')
    .call({from: web3.eth.defaultAccount})
    .then(response => {
      if (response) {
        document.getElementsByClassName('user')[0].style.display = 'block';
      }
    });
}

function isAdmin() {
  customerContract.methods.isOwner()
    .call({from: web3.eth.defaultAccount})
    .then(response => {
      if (response) {
        document.getElementsByClassName('admin')[0].style.display = 'block';
        getLogs();
      }
    });
}
