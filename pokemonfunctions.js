var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
function randLetter(){
    return alphabet[Math.floor(Math.random()*alphabet.length)]
}
console.log(randLetter());

function randWord(){
   //Write a function called randWord() that returns a string of random length of random letters
   var wordLength = Math.floor(Math.random()*10)+1
   var ranWord = ""

   for (var i=0;i<wordLength;i++) {
      ranWord += randLetter()
   }
return ranWord 
}
console.log(randWord());

function randSentence(){
//Write a function called randSentence() that returns a string of a random number of random words 
//separated by a space and ending with a period. The first letter should be capitalized.
var sentencelength = Math.floor(Math.random()*10)+2
var ranSentence = ""
}