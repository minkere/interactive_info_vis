// Example 2
registerSketch('sk5', function (p) {
  p.setup = function () {
    p.createCanvas(1080, 1350);
  };

  p.draw = function () {
    p.background("lightgrey");
  }

  p.windowResized = function () {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };
});
