/* these are optional special variables which will change the system */
var systemBackgroundColor = "#caf0f8";
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

  let quad1Pt2X = letterData['quad1Pt2X'];
  let quad1Pt2Y = letterData['quad1Pt2Y'];
  let quad1Pt3X = letterData['quad1Pt3X'];
  let quad1Pt3Y = letterData['quad1Pt3Y'];
  let quad1Pt4X = letterData['quad1Pt4X'];
  let quad1Pt4Y = letterData['quad1Pt4Y'];

  // draw two circles
  fill(0);
  noStroke();
  rectMode(CENTER);
  // rect(0, 100, 30, 150, 5);
  // push();
  angleMode(DEGREES);
  stroke(0);
  strokeWeight(3);
  // noFill();

  quad(0, 100, quad1Pt2X, quad1Pt2Y, quad1Pt3X, quad1Pt3Y, quad1Pt4X, quad1Pt4Y);




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
  "ABBAABBA",
  "CAB?CAB?",
  "BAAAAAAA"
]
