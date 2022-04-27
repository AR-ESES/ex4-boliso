let espLarg = 20;
let espAltura = 20;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  stroke(255);
  strokeWeight(2);
  noFill();
  background(0);
}

function draw() {

  for (let i = 1; i < espLarg; i++) {
    for (let j = 1; j < espAltura; j++) {
      push();
      translate(i * width / espLarg,j * height / espAltura)
   translate(-25,-20)
      scale(0.09);
      noStroke();



 
  fill(28,28,28)
  arc(176, 108, 60, 200, 150, PI + QUARTER_PI, CHORD);   //cabelo
 
  fill(28,28,28)
  arc(165, 129, 60, 200, 150, PI + QUARTER_PI, CHORD); //cabelo

  fill(28,28,28)
  arc(222, 108, 60, 200, 150, PI + QUARTER_PI, CHORD); //cabelo
 
  fill(28,28,28)
  arc(235, 130, 60, 200, 150, PI + QUARTER_PI, CHORD); //cabelo
 
  fill(28,28,28)
  arc(185, 110, 100, 100, 100, 100 + 100, 100) //cabelo
 
  fill(28,28,28)
  arc(215, 110, 100, 100, 100, 100 + 100, 100) //cabelo

  fill(255,228,196)
  ellipse(200, 179, 5, 10); //pescoço
 
  fill(255,228,196)
  ellipse(152, 135, 15, 20); //orelha
 
  fill(255,228,196)
  ellipse(248, 135, 15, 20); //orelha
 
  fill(255,228,196)
  circle(200, 127, 100); //cabeça
 
  fill(255,228,196)
  arc(175, 97, 40, 20, 50, 800 + QUARTER_PI, CHORD);    //sobrancelha esquerda
 
   fill(255,228,196)
   arc(230, 97, 40, 20, 50, 800 + QUARTER_PI, CHORD);    //sobrancelha direita
 
  fill(248,248,255)
  ellipse(150, 143, 8, 8); //brinco
 
  fill(248,248,255)
  ellipse(250, 143, 8, 8); //brinco
 
  fill(28,28,28)
  arc(160, 81, 40, 48, 150, PI + QUARTER_PI, OPEN); //cabelo
 
  fill(28,28,28)
  arc(182, 81, 40, 48, 150, PI + QUARTER_PI, OPEN); //cabelo
 
  fill(28,28,28)
  arc(216, 81, 40, 48, 150, PI + QUARTER_PI, OPEN); //cabelo
 
  fill(28,28,28)
  arc(240, 81, 40, 48, 150, PI + QUARTER_PI, OPEN); //cabelo
 
  fill(255,0,0)
  ellipse(160, 70, 17,10) //gancho
 
  fill(255,0,0)
  ellipse(150, 70, 17,10) //gancho
 
  fill(255,215,0)
  ellipse(155, 70, 12,12) //gancho
 
  fill(255,0,0)
  ellipse(250, 70, 17,10) //gancho
 
  fill(255,0,0)
  ellipse(240, 70, 17,10) //gancho
 
  fill(255,215,0)
  ellipse(245, 70, 12,12) //gancho
 
  arc(208, 150, 40, 20, 40, 800 + QUARTER_PI, CHORD); //boca
 
  fill(255,250,250)
  circle(175, 120, 20); //olho esquerdo

  fill(139,69,19)
  circle(175, 120, 10); //olho esquerdo

  fill(255,250,250)
  circle(225, 120, 20); //olho direito

  fill(139,69,19)
  circle(225, 120, 10); //olho direito

  fill(255,228,196)
  ellipse(200, 135, 10, 10); //nariz

  fill(255,228,196)
  ellipse(180, 300, 30, 110); //perna direita

  fill(255,228,196)
  ellipse(219, 300, 30, 110); //perna esquerda

  fill(255,228,196)
  ellipse(160, 210, 110, 25); //braço esquerdo

  fill(255,228,196)
  ellipse(240, 210, 110, 25); //braço direito
 
  fill(255,228,196)
  ellipse(200, 230, 60, 100); //tronco

  fill(255,250,250) //olho esquerdo
  circle(177, 117, 3);
 
  fill(255,250,250) //olho direito
  circle(227, 117, 3);
 
  fill(255,0,0)
  ellipse(200, 246, 76, 130); //vestido
 
  fill(50,205,50)
  ellipse(189, 190, 25, 25); //bolas do vestido
 
  fill(50,205,50)
  ellipse(213, 190, 25, 25); //bolas do vestido
 
  fill(255,215,0)
  circle(190, 224, 6); //bolinhas do vestido
 
  fill(255,215,0)
  circle(180, 240, 6); //bolinhas do vestido
 
  fill(255,215,0)
  circle(210, 227, 6); //bolinhas do vestido
 
  fill(255,215,0)
  circle(226, 224, 6); //bolinhas do vestido
 
  fill(255,215,0)
  circle(178, 224, 6); //bolinhas do vestido
 
  fill(255,215,0)
  circle(200, 240, 6); //bolinhas do vestido
 
  fill(255,215,0)
  circle(190, 280, 6); //bolinhas do vestido
 
  fill(255,215,0)
  circle(187, 257, 6); //bolinhas do vestido
 
  fill(255,215,0)
  circle(172, 257, 6); //bolinhas do vestido
 
  fill(255,215,0)
  circle(215, 270, 6); //bolinhas do vestido
 
  fill(255,215,0)
  circle(200, 270, 6); //bolinhas do vestido
 
  fill(255,215,0)
  circle(226, 270, 6); //bolinhas do vestido
 
  fill(255,215,0)
  circle(200, 257, 6); //bolinhas do vestido
 
  fill(255,215,0)
  circle(215, 240, 6); //bolinhas do vestido
 
  fill(255,215,0)
  circle(227, 255, 6); //bolinhas do vestido
 
  fill(255,215,0)
  circle(207, 286, 6); //bolinhas do vestido
 
  fill(255,215,0)
  circle(213, 255, 6); //bolinhas do vestido
 
  fill(255,215,0)
  circle(178, 270, 6); //bolinhas do vestido
 
  fill(255,215,0)
  circle(190, 209, 6); //bolinhas do vestido
 
  fill(255,215,0)
  circle(217, 209, 6); //bolinhas do vestido
 
  fill(255,215,0)
  circle(217, 293, 6); //bolinhas do vestido
 
  fill(255,215,0)
  circle(198, 293, 6); //bolinhas do vestido
 
  fill(255,215,0)
  circle(186, 293, 6); //bolinhas do vestido
 
  fill(255,215,0)
  circle(198, 303, 6); //bolinhas do vestido
 
  fill(255,215,0)
  circle(203, 215, 6); //bolinhas do vestido
 
  fill(248,248,255)
  ellipse(179, 340, 25, 30); //sapato
 
  fill(248,248,255)
  ellipse(220, 340, 25, 30); //sapato
 
  ellipse(117, 210, 1, 95); //linha
 
  ellipse(292, 165, -1, 160); //linha
 
  fill(0,191,255)
  ellipse(118, 173, 40, 40); //doce
 
  fill(255,20,147)
  ellipse(118, 173, 30, 30); //doce
 
  fill(255,215,0)
  ellipse(118, 173, 20, 20); //doce
 
  fill(255,228,196)
  ellipse(115, 210, 24, 20); //mão
 
  fill(255,228,196)
  ellipse(290, 210, 24, 20); //mão
 
  fill(72,209,204)
  ellipse(292, 50, 60, 80); //balão
 
 

      pop();
    }
  }
}
