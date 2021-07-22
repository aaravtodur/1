class Fun {
    constructor() {
    }
    display() {
      
        console.log(frameCount);
        var brick1 = createSprite(100, 100, 50, 50);
       brick1.addImage("brick1",brick1_img);
       brick1.scale = 0.9;
     // brick1.velocityY = 1;
   
  
      brick2 = createSprite(300, 200, 50, 50);
  
 
     var wall1 = createSprite(100, windowHeight/2, 300, windowHeight);
     wall1.shapeColor="brown";

     playerninja.bounceOff(wall1);
     
     var wall2 = createSprite(850, windowHeight/2, 300, windowHeight);
     wall2.shapeColor="brown";
 
     playerninja.velocityX = 4;


       
    drawSprites();
 
    }

    
  }
  