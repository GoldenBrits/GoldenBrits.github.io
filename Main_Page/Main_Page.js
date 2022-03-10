window.addEventListener('resize', function(event)
{
  let Canvas = document.querySelector("#CanvasHolder");
  var Body = document.getElementById("Canvas");
  var Width = Canvas.clientWidth;
  var Height = Canvas.clientHeight;

  Body.setAttribute('width', Width);
  Body.setAttribute('height', Height);
  console.log(Width, Height);
}
);


var MainPage = "Mathematics is vital in our modern life, it surrounds us everywhere and is the key subject that opens many doors.  As our world becomes more and more technology based so the need for mathematical skills becomes more and more important.<br><br>You may be a student struggling with exams and day to day maths lessons, or an adult trying to cope with numeracy in the workplace, I am here to assist and help.<br><br>I am an enthusiastic and experienced maths tutor, tutoring all age groups from primary school up to GCSE standard.  With clear and concise explanations I aim to make maths more understandable and enjoyable.";

var AboutMe = "I am a private maths tutor providing one-to-one tuition and support to all students from Key Stage 2 up to GCSE level, or to adult learners who need to improve their maths skills for further education or career opportunities.<br><br>I’ve been teaching and mentoring Maths for over 15 years. I started tutoring for fun but, as I had such good results with my initial pupils it attracted so many more.  This inspired me to do the job professionally.  I cover all essential topics at Key Stage 2, Key Stage 3 and Key Stage 4 including preparing pupils for 11+, 13+ and GCSE exams. I also teach adult learners, who may be struggling with a maths exam on a higher education course, wishing to retake a maths GCSE or grappling with numerical reasoning in the workplace or for a job interview.<br><br>I love showing the fun side of maths and demonstrating that a problem isn’t just a set of terrifying numbers but an enjoyable challenge!  Working one-to-one, I concentrate on specific areas to build pupils’ self-confidence and understanding to improve results. Initially I assess each individual’s level and need and encourage them to understand the basics and use their own common sense to simplify more complex problems.  I enjoy teaching all standards; fine tuning to achieve an A* or helping a pupil who is really struggling with everything.<br><br>I can provide one-off lessons or regular weekly slots.  Regular students will benefit from tailormade study plans, homework, ongoing mini tests and exam preparation as part of the learning package.<br><br>I am a member of The Tutor's Association and have a DBS Certificate.";

function OnLoad()
{
    Content();
    setInterval(Colour, 1000);
}

function Content(Requested)
{
switch(Requested)
{
  case 'MainPage':
    document.getElementById('Title_Main').innerHTML = 'Home';
    document.getElementById('DisplayText').innerHTML = MainPage;
    break;
    
  case 'AboutMe':
    document.getElementById('Title_Main').innerHTML = 'About Me';
    document.getElementById('DisplayText').innerHTML = AboutMe;
    break;
    
  default:
    document.getElementById('Title_Main').innerHTML = 'Home';
    document.getElementById('DisplayText').innerHTML = MainPage;
    break;
  
}
}



function Colour()
{
  const Time = new Date();

  var mins = Time.getMinutes();
  var hrs = Time.getHours();
  var CurrentDate = Time.getDate();
  var month = Time.getMonth();
  
  var Width = Canvas.width;
  var Height = Canvas.height;
  
  
  var Hue = 6*mins;
  var Brightness = 40*Math.pow(Math.sin(hrs*3+mins), 2)+30;
  
  document.documentElement.style.setProperty("--Hue", Hue);
  document.documentElement.style.setProperty("--Brightness", Brightness);
}


/*
//Credit to https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Basic_animations for the code
function Background()
{
var img = new Image();


  
img.src = "Assets/MainPage_Background.png";
var CanvasXSize = document.getElementById('Canvas').clientwidth;
var CanvasYSize = document.getElementById('Canvas').clientheight;
var speed = 30; // lower is faster
var scale = 1.05;

// Main program

var dx = 0.75;
var imgW;
var imgH;
var x = 0;
var clearX;
var clearY;
var y = 1000;
var ctx;

img.onload = function() 
{
    imgW = img.width * scale;
    imgH = img.height * scale;

    if (imgW > CanvasXSize) 
    {
        // image larger than canvas
        x = CanvasXSize - imgW;
    }
    if (imgW > CanvasXSize) 
    {
        // image width larger than canvas
        clearX = imgW;
    } else {
        clearX = CanvasXSize;
    }
    if (imgH > CanvasYSize) 
    {
        // image height larger than canvas
        clearY = imgH;
    } else 
    {
        clearY = CanvasYSize;
    }

    // get canvas context
    ctx = document.getElementById('Canvas').getContext('2d');

    // set refresh rate
    return setInterval(draw, speed);
}

  
function draw() 
{
    ctx.clearRect(0, 0, clearX, clearY); // clear the canvas
  
    //Set the colour chang up here[][][][][][][][][][][][][][[][][][[][][][][][][[][][][][][][][][][][][][[][][][][][][][][][][][][[][[][][]
    const Time = new Date();

    var mins = Time.getMinutes();
    var hrs = Time.getHours();
    var CurrentDate = Time.getDate();
    var month = Time.getMonth();
  
    var Width = Canvas.width;
    var Height = Canvas.height;

    console.log(Width, Height, mins, hrs, CurrentDate, month);
  
    //specific dates such as christmas easter egg
  
    if (month == 5 && currentDate == 4)
    {
      conosle.log('Happy Star wars day');
    }
  
    if (month == 12 && currentDate == 25)
    {
      Console.log('Happy Christmas')
    }
    
    //Equation calculating the Hue of the image
    
    var Brightness = 50;
    var Hue = 6*mins;
  
    ctx.rect(0,0, Width, Height);
    ctx.fillstyle = 'hsla('+ Hue +', 100%, '+ Brightness +', 0.3)';


    // if image is <= Canvas Size
    if (imgW <= CanvasXSize) 
    {
        // reset, start from beginning
        if (x > CanvasXSize) 
        {
            x = -imgW + x;
        }
        // draw additional image1
        if (x > 0) 
        {
            ctx.drawImage(img, -imgW + x, imgW, imgH);
        }
        // draw additional image2
        if (x - imgW > 0) 
        {
            ctx.drawImage(img, -imgW * 2 + x, imgW, imgH);
        }
    }

    // image is > Canvas Size
    else 
    {
        // reset, start from beginning
        if (x > (CanvasXSize)) 
        {
            x = CanvasXSize - imgW;
        }
        // draw additional image
        if (x > (CanvasXSize-imgW))
        {
            ctx.drawImage(img, x - imgW + 1, imgW, imgH);
        }
    }

    // draw image
    console.log(imgW, imgH, x);
    ctx.drawImage(img, x, y, imgW, imgH);

    // amount to move
    x += dx;
}
}
*/
