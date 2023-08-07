const canvasWidth = 960;
const canvasHeight = 500;

/*
 * my three variable per letter are:
 *
   size: radius of the second circle (in pixels)
   offsetx: x offset (in pixels) of the second circle
            relative to the first one
   offsety: y offset (in pixels) of the second circle
            relative to the first one
 *
 */

const letterA = {
  "size1": 40,
  "offsetx1": -5,
  "offsety1": - 55,
  "size2": 50,
  "offsetx2": - 45,
  "offsety2": - 15,
  "size3": 70,
  "offsetx3": - 90,
  "offsety3": 45,
}

const letterB = {
  "size1": 40,
  "offsetx1": - 35,
  "offsety1": - 55,
  "size2": 80,
  "offsetx2": 45,
  "offsety2": - 30,
  "size3": 90,
  "offsetx3": 45,
  "offsety3": 30,
}

const letterC = {
  "size1": 40,
  "offsetx1": 35,
  "offsety1": 55,
  "size2": 70,
  "offsetx2": - 10,
  "offsety2": 0,
  "size3": 40,
  "offsetx3": 35,
  "offsety3": - 55,
}

const backgroundColor  = "#fee0b0";
const strokeColor      = "#ffffff";

const darkBlue  = "#faa9f0";
const lightBlue  = "#faa9a9";

function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // color/stroke setup
  stroke(strokeColor);
  strokeWeight(4);

  // with no animation, redrawing the screen is not necessary
  noLoop();
}

function draw () {
  // clear screen
  background(backgroundColor);

  // compute the center of the canvas
  let center_x = canvasWidth / 2;
  let center_y = canvasHeight / 2;

  // draw the letters A, B, C from saved data
  drawLetter(center_x - 250, center_y, letterA);
  drawLetter(center_x      , center_y, letterB);
  drawLetter(center_x + 250, center_y, letterC);
}

function drawLetter(posx, posy, letterData) {
  // determine parameters for second circle
  let size1 = letterData["size1"];
  let pos1x = posx + letterData["offsetx1"];
  let pos1y = posy + letterData["offsety1"];
  let size2 = letterData["size2"];
  let pos2x = posx + letterData["offsetx2"];
  let pos2y = posy + letterData["offsety2"];
  let size3 = letterData["size3"];
  let pos3x = posx + letterData["offsetx3"];
  let pos3y = posy + letterData["offsety3"];

  // draw two circles
  fill(255);
  noStroke();
  rectMode(CENTER);
  rect(posx, posy, 30, 150, 5);
  fill(darkBlue);
  ellipse(pos1x, pos1y, size1);
  fill(lightBlue);
  ellipse(pos2x, pos2y, size2);
  fill(darkBlue);
  ellipse(pos3x, pos3y, size3);
  noFill();
  strokeWeight(2);
  stroke(backgroundColor);
  rect(posx - 10, posy + 31, 70, 10, 2);
  circle(pos3x, pos3y, size3 - 10);
  fill(255);
  noStroke();
  rect(posx - 10, posy + 30, 70, 10, 2);
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
