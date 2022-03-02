window.addEventListener('resize', function(event)
{
  let Canvas = document.getElementById("CanvasHolder");
  var Body = document.getElementById("Canvas");
  var Width = Canvas.clientWidth;
  var Height = Canvas.clientHeight;

  Body.setAttribute('width', Width);
  Body.setAttribute('height', Height);
  console.log(Width, Height);
}
);


var img = new Image();

// User Variables - customize these to change the image being scrolled, its
// direction, and the speed.

img.src = 'Assets/MainPage_Background.png';

var speed = 30; // lower is faster
var scale = 1.05;
var y = 100; // vertical offset

// Main program

var dx = 0.75;
var imgW;
var imgH;
var x = 100;
var clearX;
var clearY;
var ctx;

img.onload = function() {
    imgW = img.width * scale;
    imgH = img.height * scale;

    if (imgW > CanvasXSize) {
        // image larger than canvas
        x = CanvasXSize - imgW;
    }
    if (imgW > CanvasXSize) {
        // image width larger than canvas
        clearX = imgW;
    } else {
        clearX = CanvasXSize;
    }
    if (imgH > CanvasYSize) {
        // image height larger than canvas
        clearY = imgH;
    } else {
        clearY = CanvasYSize;
    }

    // get canvas context
    ctx = document.getElementById('canvas').getContext('2d');

    // set refresh rate
    return setInterval(draw, speed);
}

function draw() {
    ctx.clearRect(0, 0, clearX, clearY); // clear the canvas

    // if image is <= Canvas Size
    if (imgW <= CanvasXSize) {
        // reset, start from beginning
        if (x > CanvasXSize) {
            x = -imgW + x;
        }
        // draw additional image1
        if (x > 0) {
            ctx.drawImage(img, -imgW + x, y, imgW, imgH);
        }
        // draw additional image2
        if (x - imgW > 0) {
            ctx.drawImage(img, -imgW * 2 + x, y, imgW, imgH);
        }
    }

    // image is > Canvas Size
    else {
        // reset, start from beginning
        if (x > (CanvasXSize)) {
            x = CanvasXSize - imgW;
        }
        // draw additional image
        if (x > (CanvasXSize-imgW)) {
            ctx.drawImage(img, x - imgW + 1, y, imgW, imgH);
        }
    }
    // draw image
    ctx.drawImage(img, x, y, imgW, imgH);

    ctx.rect(x, y,imgW, imgH);
    // amount to move
    x += dx;
}