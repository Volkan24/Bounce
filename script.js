var ballen = [];
/**
 * setup
 * de code in deze functie wordt één keer uitgevoerd door
 * de p5 library, zodra het spel geladen is in de browser
 */
function setup() {
  // Maak een canvas (rechthoek) waarin je je speelveld kunt tekenen
  createCanvas(1280, 720);

  for(var i = 0; i<30; i++){
    var randomX = random(50,1230);
    var randomY= random(50,670);
    var randomspeedX = random(50-50);
    var randomspeedY = random(50,-50);

    var bal = new Bal(randomX, randomY, randomspeedX, randomspeedY);

    ballen.push(bal);
  }

}

function draw() {
  background('blue');


  for(var i=0; i<ballen.length; i++){
    ballen[i].show();
    ballen[i].update();
  }
 
}