let imgSky;
let imgNight;
let x = 255

function preload() {
    imgSky = loadImage('assets/blue-sky.jpg')
    imgNight = loadImage('assets/night-sky.jpg')
}

function setup() {
    createCanvas(600, 400);
    frameRate[1]
}

function draw() {

    imgSky.loadPixels();

    if (x > 0) {
        x--
    }

    for (let i = 0; i < imgSky.pixels.length; i += 4) {
        //red
        imgSky,pixels[i] = 0
        //green
        imgSky.pixels[i + 0] = 0
        //blue
        imgSky,pixels[i + 0] = 0
        //alpha
        imgSky.pixels[i + 3] = x }

    imageMode(CENTER);

    imgSky.updatePixels();

    image(imgNight, width / 2, height / 2, 0, 0)
    image(imgSky, width / 2, height / 2, 0, 0)
}