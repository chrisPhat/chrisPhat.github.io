let tileSize = 50;

function setup() {
  var canvas = createCanvas(500, 500);
  // Move the canvas so it's inside our <div id="sketch-holder">.
  canvas.parent('sketch-holder');
}

function draw(){
  background(0); //Set your background color to black (0)

  //These 3 variables hold the mapped values from the mouse position (from coordinates to 16bit)
  var mouse1 = map(mouseY, 0, height, 0, 255);
  var mouse2 = map(mouseX, 0, width, 0, 255);
  var mouse3 = map(mouseY, 0, width, 255, 0);

  //Four different values are created. The alpha channel is controlled
  //by the mouse variables we created before
  var color1 = color(255, 37, 54, 255);
  var color2 = color(36, 194, 203, mouse1);
  var color3 = color(36, 194, 203, mouse2);
  var color4 = color(239, 108, 46, mouse3);

  //The nested for-loop creates the grid, and according to the position of the mouse,
  //the fill color of the shape will be different
  for (let y = 0; y < height; y+=tileSize) {
    for (let x = 0; x < width; x+=tileSize) {
      //Create a conditional statement that it will check the coordinates of the mouse
      //in relation to the position of the shapes on the grid, and according to this
      //a color value will be selected
      if(mouseX>x && mouseX<x+tileSize && mouseY>y && mouseY<y+tileSize) fill(color1);
      else if (mouseX>x && mouseX<x+tileSize) fill(color2);
      else if (mouseY>y && mouseY<y+tileSize) fill(color3);
      else fill(color4);
      rect(x, y, tileSize, tileSize);
    }
  }
}
