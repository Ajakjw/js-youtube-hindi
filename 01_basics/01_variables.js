const accountId = 144553
let accountEmail = "anantsharma0768gmail.com"
var accountPassword = "12345"
accountCity = "Kolkata"

//accountId = 2 // not allowed

accountEmail = "as@as.com"
accountPassword = "212121"
accountCity = "bengaluru"

console.log(accountId);
/*
prefer not to use var
because of issue in block scope and functional scope
*/

console.table({accountId, accountEmail, accountPassword, accountCity})