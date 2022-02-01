var rocket , rocketImg ;
var bomb , bombImg ;
var star , starImg ; 
var star2 ,star2Img ;
var bg , bgImg ;
var gameOver ;
var gameOverImg ;


var treasureCollection = 0;

var PLAY = 1 ;
var END = 0 ;
var gameState = 1 ;

function preload(){

bgImg = loadImage("bk.png") ;
bombImg = loadImage("bomb1.png")  ;
rocketImg = loadImage("rocket.png") ;
starImg = loadImage("star.png") ;
star2Img = loadImage("star2.png") ;
gameOverImg = loadImage("gameOver.png")


}

function setup() {
    createCanvas(windowWidth , windowHeight ) ;
bg = createSprite(width/2,height/2) ;
bg.addImage(bgImg) ;
bg.velocityY = 4 ;
bg.scale = 6 ;

rocket = createSprite(width/2,height-20,30,30) ;
rocket.addImage("rising",rocketImg) ;
rocket.scale = 0.4 ;

gameOver = createSprite(width/2 , height/2 -50 ) ;
gameOver.addImage("over",gameOverImg) ;

bomb1G = new Group() ;
starG = new Group() ;
star2G = new Group() ;
 
edges= createEdgeSprites();

}

function draw() {

 
    if(gameState===PLAY){
        background(0);
        rocket.x = World.mouseX;
        gameOver.visible = false ;
        
     
        rocket.collide(edges);
        
        //code to reset the background
        if(bg.y > height ){
          bg.y = height/2;
      
        }
        
      createBomb1() ;
      createStar() ;
      createStar2() ;
     
      if (starG.isTouching(rocket)) {
        starG.destroyEach();
        treasureCollection=treasureCollection+50;
      }

       if (star2G.isTouching(rocket)) {
        star2G.destroyEach();
        treasureCollection=treasureCollection+100;
      }
        
      if(bomb1G.isTouching(rocket)){
          gameState = END ;}
      }

           else if(gameState === END)
          
           {

           // rocket.changeImage(gameOverImg);
            bg.velocityY = 0 ;
            rocket.visible = false ;
            gameOver.visible = true ;
            starG.destroyEach() ;
            starG.setVelocityYEach(0) ;
            star2G.destroyEach() ;
            star2G.setVelocityYEach(0) ;
           bomb1G.destroyEach() ;
         
          }
       
        drawSprites();
        textSize(20);
        fill("red");
        text("Treasure: "+ treasureCollection,150,30);
    
      
        }
      


function createStar() {
    if (World.frameCount % 60 == 0) {
        var star = createSprite(Math.round(random(50, 1200),40, 10, 10));
        star.addImage(starImg);
        star.scale=0.12;
        star.velocityY = 8;
        star.lifetime = 350;
        starG.add(star);
        }
}


function createStar2() {
  if (World.frameCount % 60 == 0) {
      var star2 = createSprite(Math.round(random(50, 1200),40, 10, 10));
      star2.addImage(star2Img);
      star2.scale=0.12;
      star2.velocityY = 8;
      star2.lifetime = 350;
      star2G.add(star2);
      }
}

function  createBomb1() {
    if (World.frameCount % 80 == 0) {
        var bomb = createSprite(Math.round(random(50, 1200),40, 10, 10));
        bomb.addImage(bombImg);
        bomb.scale=0.12;
        bomb.velocityY = 8;
        bomb.lifetime = 350;
        bomb1G.add(bomb);
        }
}

