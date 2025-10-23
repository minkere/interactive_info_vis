// Instance-mode sketch for tab 2
registerSketch('sk2', function (p) {

  p.setup = function () {
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.angleMode(p.DEGREES);
  };

  p.draw = function () {
    p.background(239, 252, 252);
    p.clock();
  };

  p.clock = function() {  
    // Setting the Time Variables
    let sec = p.second();
    let min = p.minute();
    let mils = p.millis();

    // Centering Coordinates to the Center of the Canvas and Setting the Radius
    p.translate(p.width / 2, p.height / 2);
    const R = p.min(p.width, p.height) * 0.45;

    // Drawing the Clock Face
    p.fill(245, 245, 245);
    p.ellipse(0, 0, 550, 550);
    p.fill(255, 235, 125);
    p.ellipse(0, 0, 200, 200);
    
    // Drawing the Clock Face Boundaries
    p.stroke("black");
    p.strokeWeight(2);
    p.line(0, 0 - 275, 0, 0 + 275);
    p.push();
    p.rotate(60);
    p.line(0, 0, 0, 0  - 275);
    p.rotate(60)
    p.line(0, 0, 0, 0 - 275);
    p.pop();


    
    let totalsecs = Math.floor(600 - (mils / 1000));
    let secs = totalsecs % 60;
    let mins = Math.floor(totalsecs / 60);

    // Calculating the Angles for the Minute and Second Hands
    let secondAngle = p.map(secs, 0, 60, 0, 360);
    let minuteAngle = p.map(mins, 0, 60, 0, 360);
 
    p.push();
    p.rotate(secondAngle);
    p.strokeWeight(1);
    p.line(0, 0, 0, -R * 0.7);
    p.pop();

    p.textAlign(p.CENTER);
    p.textSize(30);
    p.text(secondAngle + " " + minuteAngle + " " + mins + " : " + secs , 0, 0 + 350);
  }
  
  p.windowResized = function () { p.resizeCanvas(p.windowWidth, p.windowHeight); };
});
