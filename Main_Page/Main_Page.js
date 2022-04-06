/*
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
*/

var MainPage = "Mathematics is vital in our modern life, it surrounds us everywhere and is the key subject that opens many doors.  As our world becomes more and more technology based so the need for mathematical skills becomes more and more important.<br><br>You may be a student struggling with exams and day to day maths lessons, or an adult trying to cope with numeracy in the workplace, I am here to assist and help.<br><br>I am an enthusiastic and experienced maths tutor, tutoring all age groups from primary school up to GCSE standard.  With clear and concise explanations I aim to make maths more understandable and enjoyable.";

var AboutMe = "I am a private maths tutor providing one-to-one tuition and support to all students from Key Stage 2 up to GCSE level, or to adult learners who need to improve their maths skills for further education or career opportunities.<br><br>I’ve been teaching and mentoring Maths for over 15 years. I started tutoring for fun but, as I had such good results with my initial pupils it attracted so many more.  This inspired me to do the job professionally.  I cover all essential topics at Key Stage 2, Key Stage 3 and Key Stage 4 including preparing pupils for 11+, 13+ and GCSE exams. I also teach adult learners, who may be struggling with a maths exam on a higher education course, wishing to retake a maths GCSE or grappling with numerical reasoning in the workplace or for a job interview.<br><br>I love showing the fun side of maths and demonstrating that a problem isn’t just a set of terrifying numbers but an enjoyable challenge!  Working one-to-one, I concentrate on specific areas to build pupils’ self-confidence and understanding to improve results. Initially I assess each individual’s level and need and encourage them to understand the basics and use their own common sense to simplify more complex problems.  I enjoy teaching all standards; fine tuning to achieve an A* or helping a pupil who is really struggling with everything.<br><br>I can provide one-off lessons or regular weekly slots.  Regular students will benefit from tailormade study plans, homework, ongoing mini tests and exam preparation as part of the learning package.<br><br>I am a member of The Tutor's Association and have a DBS Certificate.";


//A function that is used to Load Many functions from one onload in html
function OnLoad()
{
    Content();
    setInterval(Colour, 1000);
}


//Switched the content on the MainPage based off of the button pressed
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


//The Function that deals with the colour in the Background
function Colour()
{
  const Time = new Date();

  var mins = Time.getMinutes();
  var hrs = Time.getHours();
  var CurrentDate = Time.getDate();
  var month = Time.getMonth();
  
  var Hue = 6*mins;
  var Brightness = 40*Math.pow(Math.sin(hrs*3+mins), 2)+30;
  
  console.log(Hue, Brightness);
  
  document.documentElement.style.setProperty("--Hue", Hue);
  document.documentElement.style.setProperty("--Brightness", Brightness);
}
