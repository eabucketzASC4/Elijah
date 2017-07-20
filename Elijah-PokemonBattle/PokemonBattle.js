function setup(){
    createCanvas(windowWidth,windowHeight);
    //background("black")
    fill(rand1,rand2,rand3);
    ellipse(150,350,250,100);
    
    fill("black")
    text("Blastoise",320,320)
    fill(rand3,rand2,rand1)
    ellipse(800,120,250,100);
    fill("black")
    text("Charizard",80,10de0)
    fill(rand2,rand1,rand3)
    rect(0,520,1200,250);
    fill("white")
    rect(20,100,300,50)
    rect(320,325,300,50)
    rect(100,550,450,200)
    rect(600,550,450,200)
    fill("black") 
    textSize(48)
    textStyle(BOLD)
    text("Attack1",225,675)
    text("Attack2",750,675)
   
}
//Random color ish
var rand1 = Math.floor(Math.random()*255);
var rand2 = Math.floor(Math.random()*255);
var rand3 = Math.floor(Math.random()*255);
// Pokemon Statistics
function Pokemon(name,type,hp,atk,def,legendary){
    this.name = name
    this.type = type
    this.hp = hp
    this.atk = atk
    this.def= def
    this.legendary = legendary
}
// My Real Pokemon Homies
var roster = [new Pokemon("Squirtle","Water",44,48,65,false),
new Pokemon("Scizor","Steel",70,130,100,false),
new Pokemon("Blastoise","Water",79,83,100,false),
new Pokemon("Dialga","Dragon",100,120,120,true),
new Pokemon("Blaziken","Fire",80,120,70,false),
new Pokemon("Turtwig","Grass",55,68,64,false),
]