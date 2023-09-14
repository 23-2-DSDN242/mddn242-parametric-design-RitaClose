//SYSTEM VARIABLES
var systemBackgroundColor = 10;
var systemLineColor = "#212121";
var systemBoxColor = "#ffffff";
const backgroundColor = 10;
// const strokeColor = "#ffffff";


function drawLetter(letterData) {

  //COLOUR VARIABLES
  const outerCircle = backgroundColor;
  colorMode(HSB);
  let sec = second() * 6;
  var pink = sec;
  var lightPink = color(pink, 59, 100);
  var darkPink = color(pink - 10, 88, 60);
  var shadowPink = color(pink - 10, 85, 33);
  var complementaryColor = color(pink + 80, 85, 90);
  colorMode(RGB);
  var baseGrey = 150;

  //PARAMETER LIST

  // Outer Circles
  let cirRot = letterData['cirRot'];
  let cirRad = letterData['cirRad'];
  let ringColour = letterData['ringColour'];
  let cirStroke = letterData['cirStroke'];
  let coverCir = letterData['coverCir'];
  //Rectangle 1
  let rect1X = letterData['rect1X'];
  let rectWidth = letterData['rectWidth'];
  //Rectangle 2
  let rect1Angle = letterData['rect1Angle'];
  let rect2X = letterData['rect2X'];
  let rectGap = letterData['rectGap'];
  //Rectangle 3
  let rect3Angle = letterData['rect3Angle'];
  let rect3Y = letterData['rect3Y'];
  let rectLen = letterData['rectLen'];
  //Spinning Arcs
  let arcLen = letterData['arcLen'];

  // Mode Settings
  rectMode(CENTER);
  angleMode(DEGREES);

  //BackgroundCircle (Seen in Interpolation)
  stroke(complementaryColor);
  noFill();
  strokeWeight(1);
  for (i = 0; i < 20; i ++) {
    let gradient1 = lerpColor(complementaryColor, shadowPink, i / 10);
    stroke(gradient1);
    circle(50, 100, 80 + i);
  }
  circle(50, 100, 100);


  //OUTER BLADE (Static Silver Circle)
  let c1 = color(255, 255, 255, 255);
  let c2 = color(255, 255, 255, 0);
  for (i = 0; i < 10; i ++) {
    let gradient1 = lerpColor(c1, c2, i / 10);
    stroke(gradient1);
    circle(50, 100, (arcLen * 0.2) + 94 + i);
  }

  //Blade Background (Grey Background)
  fill(50);
  stroke(190);
  strokeWeight(3.5);
  circle(50, 100, 90 - arcLen);

  // Inner Blade Shadow (Inner Drop Shadow)
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
  colorMode(HSB);
  stroke(pink, ringColour, 90);
  colorMode(RGB);
  let ringWeight = map(ringColour, 0, 59, 3, 5);
  strokeWeight(ringWeight);
  noFill();
  circle(50, 100, 80);
  fill(outerCircle);
  noStroke();

  // BLACK CUTOUT CIRCLES
  push();
    translate(50, 100); // Center
    rotate(cirRot);
    push();
      // Black Circle 1
      translate(34, 0);
      circle(0, 0, 60);
      push();
        // Black Circle 3
        translate(0, 35);
        circle(0, 0, coverCir);
      pop();
    pop();
    
    push();
      // Black Circle 2
      rotate(cirRot / 2);
      translate(34, 0);
      circle(0, 0, rect1X + 25);
      
      // White Circle (Black Circle Outline)
      if (cirRad == 0) {
        noStroke();
        noFill();
      } else {
        stroke(255);
        strokeWeight(cirStroke);
      }
      circle(0, 0, cirRad);
    pop();

    // OUTER Velocity Based ARCS (Seen During Interpolation)
    noFill();
    stroke(255);
    strokeWeight(arcLen / 5);
    //White Arcs
    arc(0, 0, 115, 115, 0 - arcLen, 0 + arcLen);
    arc(0, 0, 115, 115, 180 - arcLen, 180 + arcLen);

    arc(0, 0, 120, 120, 10 - arcLen, 10 + arcLen);
    arc(0, 0, 120, 120, 190 - arcLen, 190 + arcLen);

    stroke(lightPink);
    //Coloured Arcs
    arc(0, 0, 115, 115, 0, 0 + 5 + arcLen);
    arc(0, 0, 115, 115, 180, 180 + 5 + arcLen);
    noStroke();
  pop();

  //SMALL RECTANGLES (Rect 3)
  rectMode(CORNER);
  push();
    //Pos|Neg Constraints
    if (rect3Angle < 0) {
      translate(-1 * (rect3Angle / 4) + 50, - rect3Y + 100);
    } else {
      translate((rect3Angle / 4) + 50, - rect3Y + 100);
    }
    rotate(rect3Angle);
    fill(darkPink); // Shaded Rect
    rect(0, 0, -rectLen, 3, 5);
    fill(lightPink); // Main Rect
    rect(0, -1, -rectLen, 2, 5);
  pop();

  //Double Rectangle
  if(rectLen > 0) {
    push();
    if (rect3Angle < 0) {
      translate(-1 * (-rect3Angle / 4) + 50, - rect3Y + 100);
    } else {
      translate((-rect3Angle / 4) + 50, - rect3Y + 100);
    }
      rotate(-rect3Angle);
      fill(baseGrey + 90); // Shaded Rect
      rect(0, 0, rectLen, 3, 5);
      fill(baseGrey - 20); // Main Rect
      rect(0, -1, rectLen, 2, 5);
    pop();
  }
  
  // Double Line Rectangles (Rect 2)
  rectMode(CENTER);
  push()
    translate(rect2X, 100);
    rotate(rect1Angle);

    //Pink Rectangle
    strokeWeight(1);
    stroke(shadowPink);
    fill(darkPink);
    rect(3 + rectGap, 0, 3, (rect2X * 0.6) + 30, 5);
    //Tile Detailing
    for (i = 0; i < (30 + rect2X * 0.6) / 12; i ++) {
      noStroke();
      fill(lightPink);
      rect(3 + rectGap, i * 6, 3, 3);
      rect(3 + rectGap, -i * 6, 3, 3);
      fill(shadowPink);
      rect(3 + rectGap, i * 6 - 2, 3, 1);
      rect(3 + rectGap, -i * 6 - 2, 3, 1);
    }

    //Grey Rectangle
    fill(baseGrey + 60);
    rect(2 - rectGap, 0, 0.5, rect2X + 25, 5);
    fill(baseGrey - 70);
    stroke(baseGrey - 100);
    rect(3 - rectGap, 0, 3, rect2X + 30, 5);
    //Tile Detailing
    for (i = 0; i < (30 + rect2X) / 12; i ++) {
      noStroke();
      fill(baseGrey);
      rect(3 - rectGap, i * 6, 3, 3);
      rect(3 - rectGap, -i * 6, 3, 3);
      fill(baseGrey + 40);
      rect(3 - rectGap, i * 6 - 2, 3, 1);
      rect(3 - rectGap, -i * 6 - 2, 3, 1);
    }
    fill(baseGrey + 60);
    rect(2 - rectGap, 0, 0.5, rect2X + 25, 5);
  pop();

  // Single Line Rectangle (Rect 1)
  push();
    translate(rect1X, 100);
    rotate(-rect1Angle);
    //Rect Width
    if (rectWidth != 0) {
      fill(baseGrey - 70);
      stroke(baseGrey - 100);
      strokeWeight(1);
    }
    rect(0, 0, rectWidth, 30 + rect1X, 5);
    //Tile Detailing
    for (i = 0; i < (30 + rect1X) / 12; i ++) {
      noStroke();
      fill(baseGrey);
      rect(0, i * 6, rectWidth, 3);
      rect(0, -i * 6, rectWidth, 3);
      fill(baseGrey + 40);
      rect(0, i * 6 - 2, rectWidth, 1);
      rect(0, -i * 6 - 2, rectWidth, 1);
    }
    fill(baseGrey + 50);
    rect(rectWidth / 3 * -1, 0, rectWidth / 3, 28 + rect1X, 5);
  pop();

  //Foreground Depth Drop Shadow
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

  // Spinning Arc Transition
  let arcSpeedMath = Math.abs(oldObj["cirRot"] - newObj["cirRot"]);
  let arcSpeed = map(arcSpeedMath, 0, 360, 0, 50);
  //Fade in and out
  if (percent < 50){
    new_letter["arcLen"] = map(percent, 0, 100, oldObj["arcLen"], arcSpeed);
  } else {
    new_letter["arcLen"] = map(percent, 0, 100, arcSpeed, newObj["arcLen"]);
  }
  
  // Other Parameter Transitions
  new_letter["cirRot"] = map(percent, 0, 100, oldObj["cirRot"], newObj["cirRot"]);
  new_letter["rect1Angle"] = map(percent, 0, 100, oldObj["rect1Angle"], newObj["rect1Angle"]);
  new_letter["rect2X"] = map(percent, 0, 100, oldObj["rect2X"], newObj["rect2X"]);
  new_letter["rect1X"] = map(percent, 0, 100, oldObj["rect1X"], newObj["rect1X"]);
  new_letter["rect3Angle"] = map(percent, 0, 100, oldObj["rect3Angle"], newObj["rect3Angle"]);
  new_letter["rect3Y"] = map(percent, 0, 100, oldObj["rect3Y"], newObj["rect3Y"]);
  new_letter["cirRad"] = map(percent, 0, 100, oldObj["cirRad"], newObj["cirRad"]);
  new_letter["rectLen"] = map(percent, 0, 100, oldObj["rectLen"], newObj["rectLen"]);
  new_letter["rectGap"] = map(percent, 0, 100, oldObj["rectGap"], newObj["rectGap"]);
  new_letter["rectWidth"] = map(percent, 0, 100, oldObj["rectWidth"], newObj["rectWidth"]);
  new_letter["cirStroke"] = map(percent, 0, 100, oldObj["cirStroke"], newObj["cirStroke"]);
  new_letter["ringColour"] = map(percent, 0, 100, oldObj["ringColour"], newObj["ringColour"]);
  new_letter["coverCir"] = map(percent, 0, 100, oldObj["coverCir"], newObj["coverCir"]);
  return new_letter;
}

var swapWords = [
  "AXECRAFT",
  "QUESTING",
  "TOMAHAWK",
  "SPITFIRE",
  "MECHANIC",
  "PRINGLES",
]