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
    p.fill(245, 245, 245);
    p.ellipse(p.width/2, p.height/2, 550, 550);
    p.fill(255, 235, 125);
    p.ellipse(p.width/2, p.height/2, 200, 200);
    
    p.stroke("black");
    p.strokeWeight(2);
    p.line(p.width/2, p.height/2 - 275, p.width/2, p.height/2 + 275);
    p.line(p.width/2, p.height/2, p.width/2 + 220, p.height/2 + 165);
    p.line(p.width/2, p.height/2, p.width/2 + 220, p.height/2 - 165);

    labelButton("Start", "Stop");
  }
  
  p.windowResized = function () { p.resizeCanvas(p.windowWidth, p.windowHeight); };
});
