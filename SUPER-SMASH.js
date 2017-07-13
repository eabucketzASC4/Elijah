var prompt = require("prompt-sync")()
var locations = ["Brooklyn","Queens","Manhattan","Bronx"];
var firstQuestion = ["3","10"];
var secondQuestion = ["Pokemon Trainer","Pit"]
//Create a function that prompts the user to input the answer to 2 questions: “How many times will you strike?” AND “Who will you choose to fight?”
//and adds the answers to the firstQuestion and secondQuestion arrays.
function Question(){
var Question1 = prompt("How many times will you strike? ")
var Question2 = prompt("Who will you choose to fight? ")
}
//Finally, create a new function that logs this answer to the console
Question()