var xPositie = [10,100,300,400,600];
var yPositie = [0,100,400,200,50];
var speedX = 2;
var speedY = 5;


/**
 * setup
 * de code in deze functie wordt één keer uitgevoerd door
 * de p5 library, zodra het spel geladen is in de browser
 */
function setup() {
  // Maak een canvas (rechthoek) waarin je je speelveld kunt tekenen
  createCanvas(1280, 720);

  // Kleur de achtergrond blauw, zodat je het kunt zien
  background('blue');
}


/**
 * draw
 * de code in deze functie wordt meerdere keren per seconde
 * uitgevoerd door de p5 library, nadat de setup functie klaar is
 */
function draw() {
  // stel vulkleur in
  fill(255, 255, 255);

  background('blue');

  // teken een cirkel
  for (var i = 0; i < xPositie.length; i++) {
    ellipse(xPositie[i], yPositie[i], 80, 80);
    yPositie[i] = yPositie [i] + speedY;
    xPositie[i] = xPositie[i] +speedX;


  }

//beweging van de bal

  if (yPositie === 720){
    speedY = speedY * -1;
  }

  if (yPositie === 0){
    speedY = speedY * -1;
  }

  if (xPositie === 1280){
    speedX = speedX * -1;
  }

  if (xPositie === 0){
    speedX = speedX * -1;
  }
}


  
