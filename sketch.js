    var fixedRect, movingRect;
    
    
    
    function setup() {
      createCanvas(800,400);
     fixedRect= createSprite(500,200,70,120);
     fixedRect.shapeColor= "red";

     movingRect= createSprite(700,300,80,30);
     movingRect.shapeColor= "blue";

     movingRect.debug= true;
     fixedRect.debug= true;

    }

    function draw() {
      background(0); 
      
      movingRect.x= mouseX;
      movingRect.y= mouseY;

      console.log(movingRect.x-fixedRect.x);

      if(movingRect.x-fixedRect.x<movingRect.width/2+fixedRect.width/2 &&
          fixedRect.x-movingRect.x<movingRect.width/2+fixedRect.width/2
        ){
        movingRect.shapeColor="green";
      }
      else{
        movingRect.shapeColor= "blue";
      }

      drawSprites();
    }