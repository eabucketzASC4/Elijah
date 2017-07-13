/* Welcome to cha Boi's Boujee Bodega/
/* Where everything is $100 or more ;) */

var prompt = require('prompt-sync')();

var cat = "KittyCat"
var money = 1000;
var name = prompt("What's your name? ");

// var i = 0
// while (i< 10) {
//     console.log(i);
//     i++;
// }

while (money > 0) {
    var item = prompt("What do you want to buy? ")
    console.log("You purchased the '+ item");
    money = money - 100; //Everything is $100
}