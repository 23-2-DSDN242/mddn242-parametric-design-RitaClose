/* these are optional special variables which will change the system */
var systemBackgroundColor = 10;
var systemLineColor = "#000090";
var systemBoxColor = "#00c800";
const backgroundColor  = "#fee0b0";
const strokeColor      = "#ffffff";

/* internal constants */
const darkBlue  = "#faa9f0";
const lightBlue  = "#faa9a9";

/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {
  // color/stroke setup
  stroke(strokeColor);
  strokeWeight(4);

  // determine parameters for second circle
  let size1 = letterData["size1"];
  let pos1x = letterData["offsetx1"];
  let pos1y = letterData["offsety1"];
  let size2 = letterData["size2"];
  let pos2x = letterData["offsetx2"];
  let pos2y = letterData["offsety2"];
  let size3 = letterData["size3"];
  let pos3x = letterData["offsetx3"];
  let pos3y = letterData["offsety3"];

  let cirX1 = letterData['cirX1'];
  let cirY1 = letterData['cirY1'];
  let rad1 = letterData['rad1'];
  let cirX2 = letterData['cirX2'];
  let cirY2 = letterData['cirY2'];
  let rad2a = letterData['rad2a'];
  let rad2b = letterData['rad2b'];

  let quadPosX = letterData['quadPosX'];
  let quadPosY = letterData['quadPosY'];
  let quadRot = letterData['quadRot'];

  // let quad1Pt2X = letterData['quad1Pt2X'];
  // let quad1Pt2Y = letterData['quad1Pt2Y'];
  // let quad1Pt3X = letterData['quad1Pt3X'];
  // let quad1Pt3Y = letterData['quad1Pt3Y'];
  // let quad1Pt4X = letterData['quad1Pt4X'];
  // let quad1Pt4Y = letterData['quad1Pt4Y'];

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

  // draw two circles
  fill(0);
  noStroke();
  rectMode(CENTER);
  // rect(0, 100, 30, 150, 5);
  // push();
  angleMode(DEGREES);
  stroke(0);
  strokeWeight(3);
  noFill();

  // quad(0, 100, quad1Pt2X, quad1Pt2Y, quad1Pt3X, quad1Pt3Y, quad1Pt4X, quad1Pt4Y);
  fill(70);
  stroke(190);
  strokeWeight(5);
  circle(50, 100, 90);
  stroke(230);
  strokeWeight(3);
  noFill();
  circle(50, 100, 80);
  fill(10);
  noStroke();
  push();
    translate(50, 100);
    rotate(cirRot);
    push();
    translate(34, 0);
    // stroke(180);
    // strokeWeight(0.25);
    circle(0, 0, 60);
    pop();
    push();
    rotate(cirRot / 2);
    translate(34, 0);
    // stroke(180);
    // strokeWeight(0.25);
    circle(0, 0, rectTran1  + 20);
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

  fill(255);
  // push();
  // if (rectTranX2 < 0) {
  //   translate(-1 * (rectTranX2 / 4) + 25, - rectTranY2 + 100);
  // } else {
  //   translate((rectTranX2 / 4) + 25, - rectTranY2 + 100);
  // }
  //   rotate(rectTranX2);
  //   rect(0, 0, 30 - rectTran1, 3);
  // pop();
  // push();
  // if (rectTranX2 < 0) {
  //   translate(-1 * (-rectTranX2 / 4) + 75, - rectTranY2 + 100);
  // } else {
  //   translate((-rectTranX2 / 4) + 75, - rectTranY2 + 100);
  // }
  //   rotate(-rectTranX2);
  //   rect(0, 0, 30 - rectTran1, 3);
  // pop();
  rectMode(CORNER);
  push();
  if (rectTranX2 < 0) {
    translate(-1 * (rectTranX2 / 4) + 50, - rectTranY2 + 100);
  } else {
    translate((rectTranX2 / 4) + 50, - rectTranY2 + 100);
  }
    rotate(rectTranX2);
    fill(180);
    rect(0, 0, -rectLen, 3, 5);
  pop();
  if(rectLen > 0) {
    push();
    if (rectTranX2 < 0) {
      translate(-1 * (-rectTranX2 / 4) + 50, - rectTranY2 + 100);
    } else {
      translate((-rectTranX2 / 4) + 50, - rectTranY2 + 100);
    }
      rotate(-rectTranX2);
      rect(0, 0, rectLen, 3, 5);
    pop();
  }
  
  rectMode(CENTER);
  push()
    translate(rectTran0, 100);
    rotate(slant1);
    rect(3 - rectGap, 0, 3, (rectTran0 * 1) + 30, 5);
    rect(3 + rectGap, 0, 3, (rectTran0 * 0.6) + 30, 5);
    // if (slant2Type) {
      // translate(10, 0); // good for 'T'
      // rotate(-slant1);
      // rect(0, 0, 3, 80);
    // } else {
      // rotate(-slant1 * 2); // Acender/Decender
      // translate(0, 50);
      // rect(0, 0, 3, 80);
    // }
  pop();

  push()
    // if (slant1 < 90) {
      translate(rectTran1, 100);
    // } else {
    //   translate(rectTran1 - (slant1 - 90), 100);
    // }
    rotate(-slant1);
    rect(0, 0, rectWidth, 30 + rectTran1, 5);
  pop();



  // rotate(34);
  // translate(20, -17);
  // quad(0, 180, 0, 40, 30, 20, 30, 160);
  // // pop();
  // push();
  // rotate(quadRot);
  // quad(quadPosX, quadPosY, quadPosX + 40, quadPosY - 20, quadPosX + 80, quadPosY, quadPosX + 40, quadPosY + 20);
  // pop();
  // fill(darkBlue);
  // ellipse(pos1x, pos1y, size1);
  // fill(lightBlue);
  // ellipse(pos2x, pos2y, size2);
  // fill(darkBlue);
  // ellipse(pos3x, pos3y, size3);

  // rect(15, 180, 32, 5, 1);
  // rect(15, 20, 32, 5, 1);
  // noFill();
  // stroke(0);
  // strokeWeight(1);
  // circle(cirX1, cirY1, rad1);
  // ellipse(cirX2, cirY2, rad2a, rad2b);

  // stroke("#caf0f8");
  // strokeWeight(30);
  // ellipse(cirX2, cirY2, rad2a + 32, rad2b + 32);
}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  new_letter["size"]    = map(percent, 0, 100, oldObj["size"], newObj["size"]);
  new_letter["offsetx"] = map(percent, 0, 100, oldObj["offsetx"], newObj["offsetx"]);
  new_letter["offsety"] = map(percent, 0, 100, oldObj["offsety"], newObj["offsety"]);
  return new_letter;
}

var swapWords = [
  "BATTLEAXE",
  "AXECRAFT",
  "QUESTING",
]
