// Instance-mode sketch for tab 3
registerSketch('sk3', function (p) {

  // timer state (minimal additions)
  p.timerDuration = 660; // 11 minutes in seconds
  p.timerRunning = false;
  p.timerStartMillis = 0;
  p.timerPausedElapsed = 0;
  p.startPauseButton = null;
  p.resetButton = null;
  
  p.setup = function () {
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.angleMode(p.DEGREES);

    // create start/pause and reset buttons (minimal change)
    p.startPauseButton = p.createButton('Start');
    p.startPauseButton.mousePressed(function () { p.toggleTimer(); });
    p.resetButton = p.createButton('Reset');
    p.resetButton.mousePressed(function () { p.resetTimer(); });
    p.positionTimerButtons();
  };

  // toggle start / pause
  p.toggleTimer = function () {
    if (p.timerRunning) {
      p.timerPausedElapsed = (p.millis() - p.timerStartMillis) / 1000.0;
      p.timerRunning = false;
      if (p.startPauseButton) p.startPauseButton.html('Start');
    } else {
      p.timerStartMillis = p.millis() - p.timerPausedElapsed * 1000.0;
      p.timerRunning = true;
      if (p.startPauseButton) p.startPauseButton.html('Pause');
    }
  };

  // reset timer back to full duration
  p.resetTimer = function () {
    p.timerRunning = false;
    p.timerStartMillis = 0;
    p.timerPausedElapsed = 0;
    if (p.startPauseButton) p.startPauseButton.html('Start');
  };

  // remaining whole seconds (>=0)
  p.getRemainingSecs = function () {
    const elapsedMs = p.timerRunning ? (p.millis() - p.timerStartMillis) : (p.timerPausedElapsed * 1000.0);
    const remainingMs = Math.max(0, p.timerDuration * 1000.0 - elapsedMs);
    return Math.floor(remainingMs / 1000.0);
  };

  // position the buttons (called on setup + resize)
  p.positionTimerButtons = function () {
    if (!p.startPauseButton) return;
    const x = 780;
    const y = 655;
    p.startPauseButton.position(x, y);
    if (p.resetButton) p.resetButton.position(x + 65, y);
  };

  p.draw = function () {
    p.background(252, 245, 219);
    p.clock();
  };

  p.clock = function() {
    p.translate(p.width / 2, p.height / 2);
    p.strokeWeight(0);

    // Outer Pot
    p.fill(193, 193, 193);
    p.rect(-200, -225, 350, 399);

    // Handles
    p.rect(-225, -225, 400, 20);
    p.fill(140, 140, 140)
    p.circle(-225, -205, 40);
    p.circle(175, -205, 40);

    // Inner Pot
    p.fill(168, 168, 168);
    p.rect(-175, -225 , 300, 374);

    // Time Increments
    p.fill("black");
    p.textSize(20);
    p.textAlign(p.LEFT);
    p.rect(-175, -38, 300, 1);
    p.text("5 1/2 minutes", -160, -18);
    p.rect(-175, -225, 300, 1);
    p.text("11 minutes", -160, -205);

    // Timer helpers: compute remaining seconds and stop when finished
    let remainingSecs = p.getRemainingSecs();
    if (p.timerRunning && remainingSecs <= 0) {
      p.timerRunning = false;
      p.timerPausedElapsed = p.timerDuration;
      if (p.startPauseButton) p.startPauseButton.html('Start');
    }

    // Water: water height rises as time counts down
    const potHeight = 374; // same as inner pot height
    // map remainingSecs (from full duration -> 0) to water height (0 -> potHeight)
    let waterHeight = p.map(remainingSecs, p.timerDuration, 0, 0, potHeight);
    waterHeight = p.constrain(waterHeight, 0, potHeight);

    p.fill(100, 149, 237, 200);
    // draw water so it fills upward from pot bottom (pot bottom y = -225 + 374 = 149)
    p.rect(-175, 149 - waterHeight, 300, waterHeight);

    // optional: show time text (minimal)
    p.fill(0);
    p.textAlign(p.CENTER);
    p.textSize(35);
    const mins = Math.floor(remainingSecs / 60);
    const secs = remainingSecs % 60;
    p.text(p.nf(mins,2) + ":" + p.nf(secs,2), -50, 220);
  };

  p.windowResized = function () { 
    p.resizeCanvas(800, 800); 
    p.positionTimerButtons();
  };
});
