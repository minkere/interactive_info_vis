// Instance-mode sketch for tab 4
registerSketch('sk4', function (p) {
  p.setup = function () {
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.angleMode(p.DEGREES);
  };
  p.draw = function () {
    p.background(200, 240, 200);
    p.clock();
  };

  p.clock = function() {
    p.translate(p.width / 2, p.height / 2);

    p.fill("darkgrey");
    p.stroke("grey");

    // Second Pot
    p.strokeWeight(50);
    p.line(-130, 130, -450, 200);
    p.strokeWeight(10);
    p.circle(-130, 130, 300);

    // Minute Pot
    p.strokeWeight(40);
    p.line(170, 120, 375, 275);
    p.strokeWeight(10);
    p.circle(170, 120, 250);

    // Hour Pot
    p.strokeWeight(30);
    p.line(30, -100, 60, -320);
    p.strokeWeight(10);
    p.circle(30, -100, 210);


    let secs = p.second();
    let mins = p.minute();
    let hrs = p.hour();

    p.textSize(40);
    p.textAlign(p.CENTER);
    p.fill("black");
    p.strokeWeight(0);

    if (secs < 10) {
      secs = "0" + secs;
    }
    if (mins < 10) {
      mins = "0" + mins;
    }
    if (hrs < 10) {
      hrs = "0" + hrs;
    }

    p.text(hrs + " : " + mins + " : " + secs, 60, 325);
    
    let secSize = p.map(secs, 0, 60, 5, 300);
    let minSize = p.map(mins, 0, 60, 4.1666, 250);
    let hrSize = p.map(hrs, 0, 24, 8.75, 210);

    p.fill ("lightblue");
    p.circle(-130, 130, secSize);
    p.circle(170, 120, minSize);
    p.circle(30, -100, hrSize);
  };

  p.windowResized = function () { p.resizeCanvas(p.windowWidth, p.windowHeight); };
});
