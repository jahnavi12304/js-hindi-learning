const accountId=15246
let accountEmail="jinnie@mail.com"
var accountPassword="12345"
accountCity= "Udaipur"

//we don't use var because of block scope, so it can change it everywhere whereever it is defined 
/*
direct declaration is also not allowed it is possible but not allowed 
constant cannot change the value 
*/

accountEmail="jin@mail.com"
accountPassword="67895"
accountCity= "Solapur"

console.log(accountId)
console.table([accountId, accountEmail, accountPassword, accountCity])



