let imgSky;
let imgPlane;
let x = -50;
let y = -300

function preload() {
    imgSky = loadImage('assets/blue-sky.jpg');
    imgPlane = loadImage('assets/plane.png');
}

function setup() {
createCanvas(600, 400);
}

function draw() {
if (x < imgSky.width) {
    x++;
}
if (x >= imgSky.width) {
    x = -50
}
if (y < imgSky.width) (
    y++
)
if (y >= imgSky.width) {
    y = -300
}

    imageMode(CENTER);
    image(imgSky, width / 2, height / 2, 0 , 0);
    image(imgPlane, x, 200, 100 , 100);
    image(imgPlane, y, 350, 400 , 300);
}