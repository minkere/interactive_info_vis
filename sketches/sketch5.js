// Example 2
registerSketch('sk5', function (p) {
  p.setup = function () {
    p.createCanvas(650, 5);
  };

  p.draw = function () {
    p.background("lightgrey");
  }

  p.windowResized = function () {
    p.resizeCanvas(650, 860);
  };
});
