let img;
let x = 512;
let y = 410;

function preload() {
    img = loadImage('assets/pallas_cat.jpg')
}


function setup(){
    createCanvas(512, 410);
}

function draw(){
if (x < img.width && y < img.height) {
    x++;
    y++;
}

imageMode(CENTER)

image(img, width / 2, height / 2, x, y)
}