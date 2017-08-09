var name = prompt ("What's your name?");
var favFood = prompt("What's your favorite food?");

firebase.database().ref(name).set(
    {
        food: favFood
    }
)