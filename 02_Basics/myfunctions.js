"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    return num + 2;
    //return "Hello" without TS there is no error in this which is a problem
}
function getUpper(name) {
    return name.toUpperCase();
}
function signUpUser(name, email, isPaid) {
}
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
addTwo(5);
getUpper("Aaquib");
signUpUser("Aaquib", "aaquib@gmail.com", true);
loginUser("Aaquib", "aaquib@gmail.com");
/* How to handle two different return type in TS
function getValue(myval:number){
    if(myval >5){
        return true
    }
    return "200 OK"
}*/
//declaring types in arrow functions
var hello = function (s) {
    return "";
};
var heros = ["thor", "spiderman", "ironman"];
//const heros = [1, 2, 3]
heros.map(function (hero) {
    return "hero is ".concat(hero);
});
