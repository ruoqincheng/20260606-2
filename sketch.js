let capture;

function setup() {
  createCanvas(windowWidth, windowHeight);
  capture = createCapture(VIDEO);
  capture.hide(); // 隱藏預設的 DOM 影片元件
}

function draw() {
  background('#e7c6ff');

  // 計算影像寬高為畫布的 60%
  let vW = width * 0.6;
  let vH = height * 0.6;
  
  // 將影像繪製在畫布中央
  image(capture, (width - vW) / 2, (height - vH) / 2, vW, vH);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
