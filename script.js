var xPositie = [50,60,70,80,90];
var yPositie = [50,100,20,80,60];
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
    xPositie = xPositie + speedX;
    yPositie = yPositie + speedY;

  }

//beweging van de bal
xPositie = xPositie + speedX;
yPositie = yPositie + speedY;
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


  
