class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smokeimage=loadImage("sprites/smoke.png");
    this.trajecatory=[]
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    super.display();
    if(this.body.velocity.x>10 && this.body.position.x>200){
      var position=[this.body.position.x,this.body.position.y];
    this.trajecatory.push(position)
    }
    
    for(var i=0;i<this.trajecatory.length;i++){
    image(this.smokeimage,this.trajecatory[i][0],this.trajecatory[i][1])
    }

  }
}
