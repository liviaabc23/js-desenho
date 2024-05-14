function setup() {
    createCanvas(400, 400);
    background("pink")
  }
  
  function draw() {
    stroke("blue");
    fill("lightblue");
    
    
    if (mouseIsPressed) {
      rect(mouseX, mouseY, 20, 35);
    }
  }