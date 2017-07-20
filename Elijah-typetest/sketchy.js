var points = 0
var nameArray =["The Brooklyn Nets used to be the New Jersey Nets.","I get more buckets than you","Yo hablo espanol mejor que tu.","Yo soy mejor que tu en todos.",]
var index = 0
// just called once and done
function setup() {
 createCanvas(windowWidth,windowHeight);  
     background("red")
    inp = createInput('', "text")
    inp.position(250, 5+140)
    inp.size(10*20, 90);

}

function draw() {
    fill('red')
    rect(0,0,windowWidth,100)
    textSize(32)
    fill("black")
    text(nameArray[index],200,75)    
}

function keyTyped() {
    
    if(keyCode==ENTER) {
console.log(inp.value())
if(inp.value()==nameArray[index]) {
    points = points + 10 
    index = index + 1
    noStroke()
    fill("red")
    rect(125,475,300,50);
    fill("black")
    text("Points:" + points,40,500)
    
    
}
    }
}
