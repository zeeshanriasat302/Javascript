const accountId = 11445566;
// accountId = 1234567 // not allowed to change

let accountEmail = "zeeshan@gmail.com";

var accountPassword = "123456";
accountCity = "Lahore"; // you can reserve memory without using let const var but not preffered
let accountState; // value will be undefined because you declare a variable but not assigned any value

/*
preffer not to use var
because of issue in block scope and functional scope
*/
console.table([accountId, accountEmail, accountPassword, accountCity]);
