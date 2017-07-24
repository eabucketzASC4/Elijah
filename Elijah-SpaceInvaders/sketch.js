var ship;
var aliens = [];
var shoots = [];

function setup() {
    createCanvas(windowWidth,windowHeight);
    ship = new Ship();
    //shoot = new Shoot();
    for (var i = 0; i < 20; i++)
    aliens[i] = new Alien(i*80+80, 60);
}

function draw() {
    background(51);
    ship.show();
    for (var i = 0; i < shoots.length; i++) {
        shoots[i].show();
        shoots[i].move();
    }
    for (var j = 0; j < aliens.length;j++) {
       if (aliens[i].hits(aliens[j])) {
           console.log("SHOOTING")

       }

    }
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

function Shoot(x, y) {
    this.x = x;
    this.y = y;

    this.show = function () {
        noStroke();
        fill(0,0,255)
        ellipse(this.x,this.y,16,18)
    }

    this.move = function() {
        this.y = this.y - 5
    }
}



   function keyPressed() {
      if (key === ' '){
           var shoot = new Shoot(ship.x, height) 
           shoots.push(shoot);
       }
       console.log(keyCode)
        if (keyCode === RIGHT_ARROW){
         ship.move(1);
        }else if (keyCode === LEFT_ARROW) {
         ship.move(-1);
        }
   }


    