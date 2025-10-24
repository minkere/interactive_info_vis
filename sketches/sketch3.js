// Instance-mode sketch for tab 3
registerSketch('sk3', function (p) {
  p.setup = function () {
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.angleMode(p.DEGREES);
  };

  p.draw = function () {
    p.background(252, 245, 219);
    p.clock();
  };

  p.clock = function() {
    p.translate(p.width / 2, p.height / 2);
    p.fill(193, 193, 193);
    p.strokeWeight(0);
    p.rect(-200, -225, 350, 400);
    p.rect(-225, -225, 400, 20);
    p.fill(140, 140, 140)
    p.circle(-225, -205, 40);
    p.circle(175, -205, 40);
    p.fill(168, 168, 168);
    p.rect(-175, -225 , 300, 375);
  };

  p.windowResized = function () { p.resizeCanvas(p.windowWidth, p.windowHeight); };
});
