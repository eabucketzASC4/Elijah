var ship;
var aliens = [];;

function setup() {
    createCanvas(windowWidth,windowHeight);
    ship = new Ship();
    for (var i = 0; i < 20; i++)
    aliens[i] = new Alien(i*80+80, 60);
}
function draw(){
    background(51);
    ship.show();
   for (var i = 0; i < aliens.length; i++) {
       aliens[i].show();
   }
}

function Ship(){
    this.x = width/2;

    this.show = function() {
        fill(255);
        rect(this.x, height-20, 20, 20);
        }




}
   function keyPressed() {
       console.log(keyCode)
        if (keyCode === RIGHT_ARROW){
         ship.move(1);
        }else if (keyCode === LEFT_ARROW) {
         ship.move(-1);
        }
   }


    