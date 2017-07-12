//Declare an array with 2 cool Nick entries to increase his odds
var people = ["Chris", "Will", "Edgar","Faisal", "Cool Nick"];
// Function to get random number
function getRandomWinner(index) {

    // var randomIndex = Math.random() *index;
    // var result = Math.floor(randomINdex);
    return Math.floor(Math.random() * index)
}
// Prints out a random name
console.log(people[getRandomWinner(people.length)]);