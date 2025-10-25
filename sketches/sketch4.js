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

    p.circle(-100, 100, 300);
    p.circle(100, 100, 280);
    p.circle(0, -100, 260);
  };

  p.windowResized = function () { p.resizeCanvas(p.windowWidth, p.windowHeight); };
});
