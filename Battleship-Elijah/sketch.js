var userCol = 0
var userRow = 0
var secretRow = Math.floor(Math.random()*5)
var secretCol = Math.floor(Math.random()*5)
function setup() {
    createCanvas(windowWidth,windowHeight)
    fill(255,255,255)
    
    for(var col=0; col < 5; col++){
        for(var row =0; row < 5; row++){
            rect(col*200,row*200,200,200)
        }
    }
}
   function mouseClicked(){
       if(mouseY<=200){
           userRow=0
       } else if(mouseY<=400){
           userRow=1
       } else if(mouseY<=600){
           userRow=2
       } else if(mouseY<=800){
           userRow=3
       } else if(mouseY<=1000){
           userRow=4
       }
    if(mouseX<=200){
            userCol=0
        } else if(mouseX<=400){
             userCol=1
        }else if(mouseX<=600){
             userCol=2
        }else if(mouseX<=800){
             userCol=3
        }else if(mouseX<=1000){
             userCol=4
        }
if(userRow  == secretRow && secretCol == userCol){
    alert("you sunk my battleship")
    }
}
