var player1 = ["rock","scissors","paper"];
// var player2 = ["rock", "scissors", "paper"];
/* Choices */
var randomChoice = Math.floor(Math.random() * 3);
var playerChoice = player2[2];// Paper

if (p1Choice == p2Choice) {
    console.log("It's a tie!");
} else if (p1Choice === "Scissors") { // if p1 is scissors 
    if (p2Choice === "rock") {
        console.log ("playerone loses");
        console.log("Playertwo wins");
    } else {
        console.log("Player one wins");
        console.log("Player two wins");
    }
} else if (p1Choice === "rock") { 
    if (p2Choice === "scissors") {
        console.log("PlayerOne wins");
        console.log ("Player two loses");
    } else {
        console.log("Player one wins");
        console.log("Plaer two loses");
    }
} else if (p1Choice === "paper") {
    if(p2Choice === "scissors") {
        console.log("Player one loses");
        console.log("Player two wins");
    }