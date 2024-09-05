// Variables
/*
1. Variables are containers, used to store any data (for later use).
2. Variables can be declared in 4 ways :-
    a. automatically.
    b. var (not use much, global scope, can modify).
    c. let (block scope, can be updated but not re-declared).
    d. const (block scope, cannot be updated but not re-declared).
*/

const accountId = 12345;
let accountEmail = "johndoe@google.com";
var accountPassword = "abc1234";
accountCity = "London";
let accountState;

// accountId = 2 // not allowed

accountEmail = "jonathan@facebook.com";
accountPassword = "123456@abc";
accountCity = "Manchester";

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

// Instead of using console.log again, we can use console.table for a better view

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);
