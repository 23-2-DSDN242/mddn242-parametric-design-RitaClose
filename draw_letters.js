/* these are optional special variables which will change the system */
var systemBackgroundColor = 10;
var systemLineColor = "#000090";
var systemBoxColor = "#00c800";
const backgroundColor  = "#fee0b0";
const strokeColor      = "#ffffff";

/* internal constants */
const darkBlue  = "#faa9f0";
const lightBlue  = "#faa9a9";

function drawLetter(letterData) {
  // color/stroke setup
  stroke(strokeColor);
  strokeWeight(4);

  // determine parameters for second circle

  let cirRot = letterData['cirRot'];
  let slant1 = letterData['slant1'];
  let rectTran0 = letterData['rectTran0'];
  let slant2Type = letterData['slant2Type'];
  let rectTran1 = letterData['rectTran1'];
  let rectTranX2 = letterData['rectTranX2'];
  let rectTranY2 = letterData['rectTranY2'];
  let cirRad = letterData['cirRad'];
  let rectLen = letterData['rectLen'];
  let rectGap = letterData['rectGap'];

  let rectWidth = letterData['rectWidth'];
  let cirStroke = letterData['cirStroke'];
  let coverCir = letterData['coverCir'];

  // draw two circles
  fill(0);
  noStroke();
  rectMode(CENTER);
  angleMode(DEGREES);
  stroke(0);
  strokeWeight(3);
  noFill();

  //Outer Blade
  let c1 = color(255, 255, 255, 255);
  let c2 = color(255, 255, 255, 0);
  for (i = 0; i < 10; i ++) {
    let gradient1 = lerpColor(c1, c2, i / 10);
    noFill();
    strokeWeight(1);
    stroke(gradient1);
    circle(50, 100, 94 + i);
  }
  
  //Blade Background
  fill(70);
  stroke(190);
  strokeWeight(5);
  circle(50, 100, 90);

  // Inner Blade Shadow
  let c3 = color(0, 0, 0, 255);
  let c4 = color(0, 0, 0, 0);
  for (i = 0; i < 10; i ++) {
    let gradient2 = lerpColor(c3, c4, i / 10);
    noFill();
    strokeWeight(1);
    stroke(gradient2);
    circle(50, 100, 80 - i * 2);
  }
  
  // Inner Blade Ring
  stroke(230);
  strokeWeight(3);
  noFill();
  circle(50, 100, 80);
  fill(10);
  noStroke();

  // Booleen Circles
  push();
    translate(50, 100);
    rotate(cirRot);
    push();
      translate(34, 0);
      circle(0, 0, 60);
      push();
        translate(0, 35);
        circle(0, 0, coverCir);
      pop();
    pop();
    push();
    rotate(cirRot / 2);
    translate(34, 0);

    circle(0, 0, rectTran1 + 25);
    
    // White Circle
    if (cirRad == 0) {
      noStroke();
      noFill();
    } else {
      stroke(255);
      strokeWeight(cirStroke);
    }
    circle(0, 0, cirRad);
    pop();
  pop();

  // Small Angle Rectangles
  rectMode(CORNER);
  push();
  if (rectTranX2 < 0) {
    translate(-1 * (rectTranX2 / 4) + 50, - rectTranY2 + 100);
  } else {
    translate((rectTranX2 / 4) + 50, - rectTranY2 + 100);
  }
    rotate(rectTranX2);
    fill(153, 18, 101);
    rect(0, 0, -rectLen, 3, 5);
    fill(255, 105, 180);
    rect(0, -1, -rectLen, 2, 5);
  pop();

  if(rectLen > 0) {
    push();
    if (rectTranX2 < 0) {
      translate(-1 * (-rectTranX2 / 4) + 50, - rectTranY2 + 100);
    } else {
      translate((-rectTranX2 / 4) + 50, - rectTranY2 + 100);
    }
      rotate(-rectTranX2);
      fill(130);
      rect(0, 0, rectLen, 3, 5);
      fill(240);
      rect(0, -1, rectLen, 2, 5);
    pop();
  }
  
  // Double Line Rectangles
  rectMode(CENTER);
  push()
    translate(rectTran0, 100);
    rotate(slant1);

    strokeWeight(1);
    stroke(84, 13, 57);
    fill(153, 18, 101);

    rect(3 + rectGap, 0, 3, (rectTran0 * 0.6) + 30, 5);
    for (i = 0; i < (30 + rectTran0 * 0.6) / 12; i ++) {
      noStroke();
      fill(255, 105, 180);
      rect(3 + rectGap, i * 6, 3, 3);
      rect(3 + rectGap, -i * 6, 3, 3);
      fill(252, 128, 205);
      rect(3 + rectGap, i * 6 - 2, 3, 1);
      rect(3 + rectGap, -i * 6 - 2, 3, 1);
    }
    fill(210);
    rect(2 - rectGap, 0, 0.5, rectTran0 + 25, 5);

    fill(80);
    stroke(50);

    rect(3 - rectGap, 0, 3, rectTran0 + 30, 5);
    for (i = 0; i < (30 + rectTran0) / 12; i ++) {
      noStroke();
      fill(150);
      rect(3 - rectGap, i * 6, 3, 3);
      rect(3 - rectGap, -i * 6, 3, 3);
      fill(190);
      rect(3 - rectGap, i * 6 - 2, 3, 1);
      rect(3 - rectGap, -i * 6 - 2, 3, 1);
    }
    fill(210);
    rect(2 - rectGap, 0, 0.5, rectTran0 + 25, 5);
  pop();

  // Single Line Rectangle
  push()
    translate(rectTran1, 100);
    rotate(-slant1);
    if (rectWidth != 0) {
      fill(80);
      stroke(50);
      strokeWeight(1);
    }
    rect(0, 0, rectWidth, 30 + rectTran1, 5);
    for (i = 0; i < (30 + rectTran1) / 12; i ++) {
      noStroke();
      fill(150);
      rect(0, i * 6, rectWidth, 3);
      rect(0, -i * 6, rectWidth, 3);
      fill(190);
      rect(0, i * 6 - 2, rectWidth, 1);
      rect(0, -i * 6 - 2, rectWidth, 1);
    }
    fill(200);
    rect(rectWidth / 3 * -1, 0, rectWidth / 3, 28 + rectTran1, 5);
  pop();

  for (i = 0; i < 10; i ++) {
    let gradient2 = lerpColor(c3, c4, i / 10);
    noFill();
    strokeWeight(1);
    stroke(gradient2);
    circle(50, 100, 80 - i * 2);
  }
}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  new_letter["cirRot"] = map(percent, 0, 100, oldObj["cirRot"], newObj["cirRot"]);
  new_letter["slant1"] = map(percent, 0, 100, oldObj["slant1"], newObj["slant1"]);
  new_letter["rectTran0"] = map(percent, 0, 100, oldObj["rectTran0"], newObj["rectTran0"]);
  new_letter["slant2Type"] = map(percent, 0, 100, oldObj["slant2Type"], newObj["slant2Type"]);
  new_letter["rectTran1"] = map(percent, 0, 100, oldObj["rectTran1"], newObj["rectTran1"]);
  new_letter["rectTranX2"] = map(percent, 0, 100, oldObj["rectTranX2"], newObj["rectTranX2"]);
  new_letter["rectTranY2"] = map(percent, 0, 100, oldObj["rectTranY2"], newObj["rectTranY2"]);
  new_letter["cirRad"] = map(percent, 0, 100, oldObj["cirRad"], newObj["cirRad"]);
  new_letter["rectLen"] = map(percent, 0, 100, oldObj["rectLen"], newObj["rectLen"]);
  new_letter["rectGap"] = map(percent, 0, 100, oldObj["rectGap"], newObj["rectGap"]);
  new_letter["rectWidth"] = map(percent, 0, 100, oldObj["rectWidth"], newObj["rectWidth"]);
  new_letter["cirStroke"] = map(percent, 0, 100, oldObj["cirStroke"], newObj["cirStroke"]);
  new_letter["coverCir"] = map(percent, 0, 100, oldObj["coverCir"], newObj["coverCir"]);
  return new_letter;
}

var swapWords = [
  "PINKAXES",
  "AXECRAFT",
  "QUESTING",
  "TOMAHAWK",
]

//if (percent < 50) // have new letter be going to different letter than end
//new_letter['coverCir'] = oldObj["coverCir"]; // stay as last position.
// newpercent = percent * -1 for negative/opposite directions
// look up easing functions.

// copy default letter into draw_letters 
/* let home_pos = {
  defaultletter params.
}
then put percent 0-50 to home_pos then 50-100 to newPos

*/