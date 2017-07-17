function setup() {
  createCanvas(windowWidth,windowHeight);
     ellipse(600,600,36,30);
}
var value = 0;
function draw() {
  fill(value);
  rect(30, 25, 50, 50);
}
function mouseDragged() {
  value = value + 5;
  if (value > 255) {
    value = 0;
  }
  var c;  // Declare color 'c'
noStroke();  // Don't draw a stroke around shapes

// If no colorMode is specified, then the
// default of RGB with scale of 0-255 is used.
c = color(50, 55, 100);  // Create a color for 'c'
fill(c);  // Use color variable 'c' as fill color
rect(0, 10, 45, 80);  // Draw left rect

colorMode(HSB, 100);  // Use HSB with scale of 0-100
c = color(50, 55, 100);  // Update 'c' with new color
fill(c);  // Use updated 'c' as fill color
rect(55, 10, 45, 80);  // Draw right rect

for (var i = 0; i < 100; i++) {
  var r = random(50);
  stroke(r*5);
  line(50, i, 50+r, i);
}

rect(mouseX,mouseY,50,50)
}