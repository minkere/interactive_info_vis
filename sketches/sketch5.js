// Example 2
registerSketch('sk5', function (p) {
  let data;

  p.preload = function () {
    // Load CSV file from data folder
    data = p.loadTable('data/FoodImports.csv', 'csv', 'header');
  }

  p.setup = function () {
    p.createCanvas(1080, 1350);

    console.log(data.getRowCount() + ' total rows in table');
    console.log(data.getColumnCount() + ' total columns in table');
  };

  p.draw = function () {
    p.background('lightgrey');
  }

  p.windowResized = function () { p.resizeCanvas(p.windowWidth, p.windowHeight); };
});
