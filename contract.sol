pragma solidity ^0.4.11;

/*
    Note: this contract is not used locally by this project and must be deployed separately. For example, it can be copied into Remix and deployed on a local blockchain.
*/
contract ACL {
    struct Customer{
        uint id;
        string name;
        uint dateOfBirth;
        uint social;
        uint status;
    }
    
    uint constant active = 1;
    uint constant pending = 2;
    uint constant deleted = 3;
    mapping (uint => Customer) customers;
    uint public count = 0;
    
    address public owner;
    address [] public users;
    
    function ACLContract() {
        owner = msg.sender;
        users.push(owner);
    }
    
    function addUser(address user) {
        if (msg.sender != owner) throw;
        users.push(user);
    }
    
    function getIthUser(uint i) constant returns (address) {
        return users[i];
    }
    
    function getUserCount() constant returns (uint) {
        return users.length;
    }
    
    function deleteUser(address user) {
        if (msg.sender != owner) throw;
        for (uint8 i = 0; i < users.length; i++) {
            if (users[i] == user) {
                delete users[i];
            }
        }
    }
    
    function isUser(address candidate, string method) returns (bool) {
        for (uint8 i = 0; i < users.length; i++) {
            if (users[i] == candidate) {
                LogAccess(candidate, now, method, "successful access");
                return true;
            }
        }
        LogAccess(candidate, now, method, "failed access");
        return false;
    }
    
    function isOwner() constant returns (bool) {
        if (msg.sender != owner) return false;
        else return true;
    }
    
    event LogAccess(address indexed by, uint indexed accessTime, string method, string desc);
    
    function createCustomer(uint id, string name, uint dateOfBirth, uint social){
        if (isUser(msg.sender, "createCustomer")) {
            customers[count] = Customer(id, name, dateOfBirth, social, pending);
            count++;
        }
        else throw;
    }
    
    function getCustomer(uint index)
    constant returns (uint id, string name, uint dateOfBirth, uint social, uint status){
        id = customers[index].id;
        name = customers[index].name;
        dateOfBirth = customers[index].dateOfBirth;
        social = customers[index].social;
        status = customers[index].status;
    }

    function getCustomerById(uint id)
    constant returns (uint idRet, string name, uint dateOfBirth, uint social, uint status)
    {
        for (uint8 i=0; i<count; i++)
        {
            if (customers[i].id == id) {
                idRet = customers[i].id;
                name = customers[i].name;
                dateOfBirth = customers[i].dateOfBirth;
                social = customers[i].social;
                status = customers[i].status;
                return;
            }
        }
    }

    function updateCustomer(uint index, string name) {
        if (isUser(msg.sender, "updateCustomer")) {
            if (index > count) throw;
            customers[index].name = name;
        }
        else throw;
    }

    function updateCustomerStatus(uint index, uint status) {
        if (isUser(msg.sender, "updateCustomer")) {
            if (index > count) throw;
            customers[index].status = status;
        }
        else throw;
    }
}
