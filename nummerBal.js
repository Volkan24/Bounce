class nummerBal extends Bal {
   nummer;

    constructor(_x,_y,_speedX,_speedY,_nummer){

        super(_x, _y, _speedX, _speedY);
        this.nummer = _nummer;
    
    }

  show(){
      fill(255,0,255);
      ellipse(this.x, this.y, 20,20);
      text("4");
  }  
  
    
  
  
}
  
  
    
  