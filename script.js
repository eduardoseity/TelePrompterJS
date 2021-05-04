let video;
let videoRatio = 3;
let videoW;
let videoH;
let scrollElement;

function videoReady() {
    console.log("Video ready!!");
    videoW = video.width / videoRatio;
    videoH = video.height / videoRatio;
    resizeCanvas(videoW,videoH);
}

function setup() {
    webcamCanvas = createCanvas(200, 200);
    webcamCanvas.parent("webcamDiv");
    video = createCapture(VIDEO, videoReady);
    video.hide();
}

function draw() {
    background(0);
    image(video, 0, 0, videoW, videoH);
}