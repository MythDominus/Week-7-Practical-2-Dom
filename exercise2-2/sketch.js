let imgSky;
let imgNight;
let wipeX = 0;

function preload() {
    imgSky = loadImage('assets/blue-sky.jpg')
    imgNight = loadImage('assets/night-sky.jpg')
}

function setup() {
    createCanvas(600, 400);
    pixelDensity(1);
    frameRate(30)
}

function draw() {
    image(imgSky, 0, 0, width, height)

    getIndexOfPixel();

    image(imgSky, 0, 0, width, height);
}

function getIndexOfPixel() {
   imgSky.loadPixels();
    imgNight.loadPixels();

    let w = imgSky.width
    let h = imgSky.width

    let wipeSpeed = 5;

    for (let x = 0; x < wipeX; x++) {
        for (let y = 0; y < h; y++)     {
            let index = (x + y * w) * 4;

            imgSky.pixels[index+0] = imgNight.pixels[index + 0]; //red
            imgSky.pixels[index+1] = imgNight.pixels[index + 1]; //green
            imgSky.pixels[index+2] = imgNight.pixels[index + 2]; //blue
            imgSky.pixels[index+3] = 255 //alpha
    }
        }

    if (wipeX < w) {
        wipeX += wipeSpeed;
        }

    imgSky.updatePixels();
}