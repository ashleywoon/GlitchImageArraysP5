/*
	Image display array will glitch behavior and interactivity showcasing 6 unique slides
*/
var bRegular = true;
var imageList = [];
var img;
var stringList1, stringList2;
var displayString1 = "";
var displayString2 = "";
var startMillis1, startMillis2, startMillis3;
//coordinate variables
var x, x2, y;
var rotating=0;
//color variables
var r, g, b;
//state machine
var state=0;
var image1=1;
var image2=2;
var image3=3;
var image4=4;
var image5=5;
var image6=6;

// preload() will execture before setup()
function preload() {
  imageList[0] = loadImage('images/image1.jpg'); 			
  imageList[1] = loadImage('images/image2.jpg');
  imageList[2] = loadImage('images/image3.jpg');
  imageList[3] = loadImage('images/image4.jpg');
  imageList[4] = loadImage('images/image5.jpg');
  imageList[5] = loadImage('images/image6.jpg');
  stringList1 = ["It's a Violin", "It's a Guitar", "It's a Violin AND a Guitar", "OOOOO nice aesthetic", "Cool"];
  stringList2 = ["Concrete roaaaads", "Everywhere I gooooo", "Cutting forests", "Burying valleys", "Killing rivers", "My home town...is a concrete road"];
}

function setup() {
  print("Glitch image arrays P5");

	imageMode(CENTER);
  ellipseMode(CENTER);

	createCanvas(1024, 800);
  startMillis1 = millis();
  startMillis2 = millis();
  startMillis3 = millis();
}

function draw() {
	if(state==0)
    draw0();
  else if(state==image1)
    draw1();
  else if(state==image2) {
    background(0);
    draw2();
  }
  else if(state==image3) 
    draw3();
  else if(state==image4) 
    draw4();
  else if(state==image5) 
    draw5();
  else if(state==image6)
    draw6();
}

// chooses a new items from the array, select a random
// index 0 to length of array-1
function chooseNewImage() {
  img = imageList[0];
  print(img);
}

//static state/ welcome slide
function draw0() {
  background(0);
  r=random(100,255);
  g=random(100,255);
  b=random(100,255);
    stroke(r,g,b);
    fill(r+50,g+50,b+50);
    textSize(60);
    text("Welcome to Glitch Image Arrays P5",10, height/2);
    textSize(30);
    text("By Ashley Woon", width/4, 600);  
}
//image1 - decibel waves, ellipses in random colors will appear in random locations within their columns 
function draw1() {
  background(0);
  img=imageList[0];
  print(img);
  image(img, width/2, height/2, 900, 800);
  fill(255);
  //randomizers
  x2=random(100);
  y=random(800);
  r=random(100,255);
  g=random(100,255);
  b=random(100,255);

  for(var i=0; i<20; i++) {
    if(millis()>startMillis1+900) {
      fill(r);
      ellipse(150,y,x2,x2);
      startMillis1=millis();
    }
    if(millis()>startMillis2+700) {
      fill(0,g,0);
      ellipse(550, y, x2,x2);
      startMillis2=millis();
    }
    if(millis()>startMillis3+500) {
      fill(0,0,b);
      ellipse(950, y, x2, x2);
      startMillis3=millis();
    }
  }
}

/*image2 - soundbite, ellipse will follow mouse coordinates and image height and width
will fluctuate with the mouse coordinates
*/
function draw2() {
  img=imageList[1];
  print(img);
  image(img,width/2, height/2, mouseX*3, mouseY*2);
  noStroke();
  fill(255,0,100);
  ellipse(mouseX, mouseY, mouseX, 15);
}

//image3 - KH orchestra emblem, dots appear at random
function draw3() {
  img=imageList[2];
  print(img);
  noStroke();
  fill(255,0,100);
  ellipse(mouseX, mouseY, 80,60);
  //randomizers
  x2=random(width);
  y=random(height);
  fill(180,0,150);
  ellipse(x2,y, 60,80);
  image(img, width/2, height/2);
}

//image4 - guitar & violin, when mouse is clicked text will appear on screen in varying sizes
function draw4() {
  background(0);
  img=imageList[3];
  print(img);
  image(img, width/2, height/2, 600,600);

  textSize(x);
  b=random(50,250);
  fill(b,0,b);
  if(bRegular) {
    text(displayString1, x,x);
  }
}

//image5 - studio Ghibli, randomized lines continuously cross the entire screen and the diagonal
//lines follow the mouse coordinates
function draw5() {
  img = imageList[4];
  print(img);
  image(img,width/2, height/2, 600,600);

  strokeWeight(8);
  //mouse interaction
  //diagonal right slanting line 
  stroke(0,0,255);
  line(0,0, mouseX, mouseY);
  stroke(0,128,128);
  line(mouseX, mouseY, 1024, 800);
  //diagonal left slanting line
  stroke(0,255,0);
  line(1024,0,mouseX,mouseY);
  stroke(100,68,26);
  line(0, 800, mouseX,mouseY);

  //randomized
  //horizontal line
  stroke(255,0,0);
  y=random(1,800);
  line(0,y,1024,y);
  //vertical line
  stroke(255);
  x=random(1,1024);
  line(x,0,x,800);
}

//image6 - whisper of the heart, when mouse if clicked randomized text will appear with a randomized stroke color
function draw6() {
  background(71,29,13);
  img=imageList[5];
  print(img);
  image(img, width/2, height/2, 600,600);

  //randomizers
  r=random(100,255);
  g=random(100,255);
  b=random(100,255);

  stroke(r,b,g);
  strokeWeight(4);
  textSize(x);
  fill(150);
  if(bRegular) {
    text(displayString2, width/6,x);
  }
  }

  function mousePressed() {
    bRegular = !bRegular;
    x=random(20,60);
    displayString1=random(stringList1);
    displayString2=random(stringList2);
  }
  function keyPressed() {
    if(key == '0')
      state=0;
    else if(key == '1')
      state=image1;
    else if(key == '2')
      state=image2;
    else if(key =='3') 
      state=image3;
    else if(key == '4') 
      state=image4;
    else if(key =='5') 
      state=image5;
    else if(key == '6')
      state=image6;
  }
