let zBereich;

function setup() {
  zBereich = createCanvas(windowWidth, windowHeight);
  zBereich.position(0,0); //Links oben
  zBereich.style('z-index','-1'); // Verschiebung auf z-Achse
}

function draw() {
  //ohne background = transparent
  noStroke;
  if(mouseX > windowWidth / 2){
  fill (0,255,0,50)
  }
  else{
  fill(255,0,0,50);
}
  circle(mouseX,mouseY,20);
}
