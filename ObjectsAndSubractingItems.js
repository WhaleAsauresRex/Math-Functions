var bankAccount1 = {};
bankAccount1["name"] = "Tony";
bankAccount1["balance"] = 10;
//This is how you create an object, and add stuff into it
var bankAccount2 = {};
bankAccount2["name"] = "Brian";
bankAccount2["balance"] = 20;
var x = prompt("How much do you want to withdraw?");
//You are now trying to subtract the balance
var y = +x;
//y is changing x into an integer instead of string
window.alert(bankAccount1.balance-=x);
window.alert(bankAccount1.balance);