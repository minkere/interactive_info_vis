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
    let mils = p.millis();

    // Centering Coordinates to the Center of the Canvas and Setting the Radius
    p.translate(p.width / 2, p.height / 2);
    const R = p.min(p.width, p.height) * 0.45;

    // Egg White Clock Base
    p.strokeWeight(1.5);
    p.fill(245, 245, 245);
    p.ellipse(0, 0, 550, 550);
    p.fill(230, 230, 230);
    p.arc(0, 0, 550, 550, -90, -18);
    p.fill(235, 235, 235);
    p.arc(0, 0, 550, 550, -18, 54);

    // Egg Yolk Clock Base
    p.stroke(255, 199, 0);
    p.fill(255, 235, 125);
    p.ellipse(0, 0, 200, 200);
    p.fill(255, 209, 25);
    p.arc(0, 0, 200, 200, -90, -18);
    p.fill(255, 225, 94);
    p.arc(0, 0, 200, 200, -18, 54);

    // Text Labels for Boiled Egg Doneness
    p.textAlign(p.CENTER);
    p.textSize(20);
    p.fill("black");
    p.strokeWeight(0);
    p.text("Hard-Boiled", 0, -325);
    p.text("10 Min", 0, -300);

    p.text("Soft-Boiled", 330, -100);
    p.text("8 Min", 330, -75);

    p.text("Runny Yolk", 210, 260);   
    p.text("6 Min", 210, 285); 
    
    // Drawing the Clock Face Boundaries
    p.stroke("grey");
    p.strokeWeight(1.5);
    p.line(0, -275, 0, -100);

    p.stroke(255, 199, 0);
    p.line(0, -100, 0, 0);

    p.push();
    p.stroke("grey");
    p.rotate(72);
    p.line(0, -100, 0, -275);
    p.stroke(255, 199, 0);
    p.line(0, 0, 0, -100);
    
    p.stroke("grey");
    p.rotate(72)
    p.line(0, -100, 0, -275);
    p.stroke(255, 199, 0);
    p.line(0, 0, 0, -100);
    p.pop();

    p.stroke("black");

    // Adding Boiled Egg Doneness Text

    // Calculating Total Seconds Left in the 10-Minute Countdown
    let totalsecs = Math.floor(600 - (mils / 1000));
    let secs = totalsecs % 60;
    let mins = Math.floor(totalsecs / 60);

    // Calculating the Angles for the Minute and Second Hands
    let totalsecAngle = p.map(totalsecs, 0, 600, 0, 360);

    if(true){
      // Timer Hand
      p.push();
      p.rotate(totalsecAngle);
      p.stroke(180, 50, 50)
      p.strokeWeight(2);
      p.line(0, -101, 0, -R * 0.76);
      p.pop();

      // Time Display Text
      p.strokeWeight(0);
      p.textSize(30);
      p.text(mins + " : " + secs , 0, 0 + 350);
    }

  }
  
  p.windowResized = function () { p.resizeCanvas(p.windowWidth, p.windowHeight); };
});
