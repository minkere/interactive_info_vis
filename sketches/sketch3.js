// Instance-mode sketch for tab 3
registerSketch('sk3', function (p) {
  p.setup = function () {
    p.createCanvas(p.windowWidth, p.windowHeight);
  };
  p.draw = function () {


irregularEllipsePoints(2, 5, 5, 5, 5)
// ...existing code...
function irregularEllipsePoints(p, cx, cy, rx, ry, segments = 180, jitter = 0.18, noiseScale = 1, noiseOffset = 0) {
  // returns array of {x,y} points around an ellipse with smooth irregularity
  const pts = [];
  for (let i = 0; i < segments; i++) {
    const a = p.map(i, 0, segments, 0, p.TWO_PI);
    // base ellipse vector
    const vx = Math.cos(a) * rx;
    const vy = Math.sin(a) * ry;
    // sample noise using angle scaled
    const n = p.noise(Math.cos(a) * noiseScale + noiseOffset, Math.sin(a) * noiseScale + noiseOffset);
    const rFactor = 1 + (n * 2 - 1) * jitter;
    pts.push({ x: cx + vx * rFactor, y: cy + vy * rFactor });
  }
  return pts;
}

function drawPolygon(p, pts, doFill = true, doStroke = false) {
  if (doFill) p.beginShape();
  if (doFill) p.noStroke();
  if (doStroke) {
    p.noFill();
    p.beginShape();
  }
  // either fill shape (single loop) or stroke outline
  if (doFill) {
    for (let v of pts) p.vertex(v.x, v.y);
    p.endShape(p.CLOSE);
  }
  if (doStroke) {
    for (let v of pts) p.vertex(v.x, v.y);
    p.endShape(p.CLOSE);
  }
}

// resample polygon to N points (arc-length parameterization)
function resamplePolygon(p, srcPts, n) {
  if (srcPts.length === n) return srcPts.slice();
  // build cumulative length
  const lens = [];
  let total = 0;
  for (let i = 0; i < srcPts.length; i++) {
    const a = srcPts[i];
    const b = srcPts[(i + 1) % srcPts.length];
    const d = p.dist(a.x, a.y, b.x, b.y);
    lens.push(d);
    total += d;
  }
  const cum = [];
  let s = 0;
  for (let L of lens) { cum.push(s); s += L; }
  // sample at equally spaced distances
  const out = [];
  for (let i = 0; i < n; i++) {
    const target = (i / n) * total;
    // find segment
    let seg = 0;
    while (seg < cum.length - 1 && cum[seg + 1] <= target) seg++;
    const a = srcPts[seg];
    const b = srcPts[(seg + 1) % srcPts.length];
    const segStart = cum[seg];
    const segLen = lens[seg] || 1e-6;
    const t = (target - segStart) / segLen;
    out.push({
      x: p.lerp(a.x, b.x, t),
      y: p.lerp(a.y, b.y, t)
    });
  }
  return out;
}

// fill between two polygons (outerPts, innerPts). If lengths differ, inner is resampled to outer length.
function fillBetweenPolygons(p, outerPts, innerPts, fillColor) {
  const n = outerPts.length;
  const inner = innerPts.length === n ? innerPts : resamplePolygon(p, innerPts, n);
  p.noStroke();
  p.fill(fillColor);
  p.beginShape();
  // outer clockwise
  for (let i = 0; i < n; i++) p.vertex(outerPts[i].x, outerPts[i].y);
  // inner counter-clockwise (reverse) to make a ring
  for (let i = n - 1; i >= 0; i--) p.vertex(inner[i].x, inner[i].y);
  p.endShape(p.CLOSE);
}
// ...existing code...
  };
  p.windowResized = function () { p.resizeCanvas(p.windowWidth, p.windowHeight); };
});
