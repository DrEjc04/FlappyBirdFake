var cvs = document.getElementById("canvas");
var ctx = cvs.getContext("2d");

// ljdi processing
var zoga = new Image();
var ozadje = new Image();
var tla = new Image();
var pillarUp = new Image();
var pillarDown = new Image();

zoga.src = "images/bird.png";
ozadje.src = "images/bg.png";
tla.src = "images/fg.png";
pillarUp.src = "images/pillarUp.png";
pillarDown.src = "images/pillarDown.png";

var gap = 85;
var constant;
var zogaX = 10;
var zogaY = 150;
//Pro tip: ce hoces dat n bel lhku se splaca znizat gravitacijo in hitrost pr skoki
var gravitacija = 0.20;
var score = 0;
var hitrost=0;

// to npisi unu z skwct kr se nvejs kku
document.addEventListener("keydown", jump);

function jump() {
  hitrost=-4;
}

var Pravokotniki = [];

Pravokotniki[0] = {
  x: cvs.width,
  y: 0,
};

function draw() {
  //background(0);
  ctx.drawImage(ozadje, 0, 0);

  // PravokotnikiUpdate() + genNew();
  for (var i = 0; i < Pravokotniki.length; i++) {
    constant = pillarUp.height + gap;

    //nrisi kowce nejklih to
    ctx.drawImage(pillarUp, Pravokotniki[i].x, Pravokotniki[i].y);
    ctx.drawImage(pillarDown, Pravokotniki[i].x, Pravokotniki[i].y + constant);

    //zmkni kowce u lejvo
    Pravokotniki[i].x--;

    //genNew() sam de u javaskripti ja nvem kku
    if (Pravokotniki[i].x == 125) {
      Pravokotniki.push({
        x: cvs.width,
        y: Math.floor(Math.random() * pillarUp.height) - pillarUp.height,
      });
    }

    // collision ček;
    if((zogaX + zoga.width >= Pravokotniki[i].x && zogaX <= Pravokotniki[i].x + pillarUp.width && (zogaY <= Pravokotniki[i].y + pillarUp.height || zogaY + zoga.height >= Pravokotniki[i].y + constant)) || zogaY + zoga.height >= cvs.height - tla.height)
    {
      location.reload(); // komanda z zresetirat usje ukop
    }

    if (Pravokotniki[i].x == 5) {
      score++;
    }
  }

  //nrisi tla cez usje ukop de se lepu prikriva
  ctx.drawImage(tla, 0, cvs.height - tla.height);

  //risi zogco
  ctx.drawImage(zoga, zogaX, zogaY);

  //updejtej zogco szi vektorjemi ce se da
  hitrost+=gravitacija;
  zogaY += hitrost;

  //narisi se punte cz usje ukop
  ctx.fillStyle = "#000";
  ctx.font = "20px Verdana";
  ctx.fillText("Punti : " + score, 10, cvs.height - 20);
  requestAnimationFrame(draw);
}

draw();


function collision()
{
  if((zogaX + zoga.width >= Pravokotniki[i].x && zogaX <= Pravokotniki[i].x + pillarUp.width && (zogaY <= Pravokotniki[i].y + pillarUp.height || zogaY + zoga.height >= Pravokotniki[i].y + constant)) || zogaY + zoga.height >= cvs.height - tla.height)
  {
    location.reload(); // reload the page
  }
}

function PravokotnikiUpdate()
{
  for (var i = 0; i < Pravokotniki.length; i++) {
    constant = pillarUp.height + gap;

    ctx.drawImage(pillarUp, Pravokotniki[i].x, Pravokotniki[i].y);
    ctx.drawImage(pillarDown, Pravokotniki[i].x, Pravokotniki[i].y + constant);

    Pravokotniki[i].x--;

    if (Pravokotniki[i].x == 125) {
      Pravokotniki.push({
        x: cvs.width,
        y: Math.floor(Math.random() * pillarUp.height) - pillarUp.height,
      });
    }

    collision;

    if (Pravokotniki[i].x == 5) {
      score++;
    }
  }
}

// function ZogaUpdate()
// {
//   zogaY += gravitacija;
// }