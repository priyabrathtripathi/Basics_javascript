const accountId= 12345
let accountEmail="arjun@gmail.com"
var accountPassword="654323"
accountCity="Pbh"

/*
we do not prefer to var because of its issue in block
and functional scope
*/
console.log(accountEmail)
console.table([accountId,accountEmail,accountPassword,accountCity])