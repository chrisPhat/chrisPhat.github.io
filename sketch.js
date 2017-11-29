//https://github.com/stavrosdidakis/DAT-GAD-405_2017
//https://p5js.org

//DAT405 / GAD405
//08_Universe Interaction

//Create a variable that will store the selection number
//that defines the shape (via keyboard)
let selection = 0;
let canvas;

function setup() {
  canvas = createCanvas(1000, 500);
  canvas.parent('myContainer');
  strokeWeight(8);
  noFill();
  frameRate(10);
  //noLoop();
}

function draw() {
  //background(50);
  //Create 300 shapes using the for-loop
  for (var i = 0; i < 300; i++) {
    push(); //store the matrix before translate
    //Random position between the size of the canvas
    translate(random(-100, width+100), random(-100, height+100));
    //Random rotation
    rotate(random(2*PI));
    //Random scale
    scale(random(3));

    //Create two variables that store the mapped values for mouse position
    let makeRed = map(mouseX, 0, width, 0, 255);
    let makeBlue = map(mouseY, 0, height, 0, 255);

    //Mouse interaction defines the color of the strokes
    stroke(makeRed, random(255), makeBlue);
    //The fill color is black, but with a transparency variation
    fill(0, random(255));

    //Selection of colors
    //Based on the key pressed (defined outside the for-loop),
    //the selection variable will either be 0, 1, or 2.
    //This selected one of the colors defined below
    if (selection===0) ellipse(0, 0, 40, 40);
    if (selection===1) rect(0, 0, 40, 40);
    if (selection===2) triangle(30, 75, 58, 20, 86, 75);

    pop(); //reset the matrix to original state
  }

  //According to the key pressed, change the number of the selection variable
  if (key === 'a') selection = 0;
  if (key === 's') selection = 1;
  if (key === 'd') selection = 2;
}
