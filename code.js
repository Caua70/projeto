var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

// variavel para pontução
var pontuacao = 0;

//variavel para texto de inicio 
var estadodojogo = "sacar";

var box1 = createSprite(25, 75, 50, 50);
box1.shapeColor="turquoise";
var box2 = createSprite(75, 75, 50, 50);
box2.shapeColor="darkblue";
var box3 = createSprite(125, 75, 50, 50);
box3.shapeColor="turquoise";
var box4 = createSprite(175, 75, 50, 50);
box4.shapeColor="darkblue";
var box5 = createSprite(225, 75, 50, 50);
box5.shapeColor="turquoise";
var box6 = createSprite(275, 75, 50, 50);
box6.shapeColor="darkblue";
var box7 = createSprite(325, 75, 50, 50);
box7.shapeColor="turquoise";
var box8 = createSprite(375, 75, 50, 50);
box8.shapeColor="darkblue";


var box9 = createSprite(25, 125, 50, 50);
box9.shapeColor="darkblue";
var box10 = createSprite(75, 125, 50, 50);
box10.shapeColor="turquoise";
var box11 = createSprite(125, 125, 50, 50);
box11.shapeColor="darkblue";
var box12 = createSprite(175, 125, 50, 50);
box12.shapeColor="turquoise";
var box13 = createSprite(225,125, 50, 50);
box13.shapeColor="darkblue";
var box14 = createSprite(275, 125, 50, 50);
box14.shapeColor="turquoise";
var box15 = createSprite(325, 125, 50, 50);
box15.shapeColor="darkblue";
var box16 = createSprite(375, 125, 50, 50);
box16.shapeColor="turquoise";

createEdgeSprites();

paddle=createSprite(200,390,100,20);
paddle.shapeColor="black"
ball=createSprite(200,200,20,20);
ball.shapeColor="black"

ball2=createSprite(250,200,20,20);
ball2.shapeColor="black";

  function draw() {
  background("white");
  textSize(15);
  stroke("steelblue");
  text("pontos: " + pontuacao ,300,20);
  drawSprites();

  //condição do texto de inicio e condição da velocidade da bola
  
  if(estadodojogo == "sacar"){
    text("Precione enter para iniciar ", 100, 250);
    
    if(keyDown("enter")){
    ball.velocityX = 2;
    ball.velocityY = 4;
    ball2.velocityY = -4;
    ball2.velocityX = -2;
    
    estadodojogo = "jogar";
      
  }
  }
  
  if(estadodojogo == "jogar"){
    paddle.x = World.mouseX;
  if(ball.isTouching(bottomEdge)||ball2.isTouching(bottomEdge)||pontuacao == 16){
    estadodojogo = "fim"
  }
  }
  
   if(estadodojogo == "fim"){
     text("Fim de jogo", 160, 200);
     ball.velocityX = 0;
     ball.velocityY = 0;
     ball2.velocityX = 0;
     ball2.velocityY = 0;
   }
  
  
  ball.bounceOff(topEdge);
  ball.bounceOff(rightEdge);
  ball.bounceOff(leftEdge);
  ball.bounceOff(paddle);
  
  ball2.bounceOff(topEdge);
  ball2.bounceOff(rightEdge);
  ball2.bounceOff(leftEdge);
  ball2.bounceOff(paddle);
  
  //condição da bola 1 (ball) e da bola 2 (ball2)
   
  if(ball.isTouching(box1)||ball2.isTouching(box1)){
    ball.bounceOff(box1) ;
    ball2.bounceOff(box1);
    box1.destroy() ;
    pontuacao = pontuacao + 1;
  }
  
  if(ball.isTouching(box2)||ball2.isTouching(box2)){
    ball.bounceOff(box2);
    ball2.bounceOff(box2);
    box2.destroy();
    pontuacao = pontuacao + 1;
  }
  
  if(ball.isTouching(box3)||ball2.isTouching(box3)){
    ball.bounceOff(box3);
    ball2.bounceOff(box3);
    box3.destroy();
    pontuacao = pontuacao + 1;
  }
  
  if(ball.isTouching(box4)||ball2.isTouching(box4)){
    ball.bounceOff(box4);
    ball2.bounceOff(box4);
    box4.destroy();
    pontuacao = pontuacao + 1;
  }
  
  if(ball.isTouching(box5)||ball2.isTouching(box5)){
    ball.bounceOff(box5);
    ball2.bounceOff(box5);
    box5.destroy();
    pontuacao = pontuacao + 1;
  }
  
  if(ball.isTouching(box6)||ball2.isTouching(box6)){
    ball.bounceOff(box6);
    ball2.bounceOff(box6);
    box6.destroy();
    pontuacao = pontuacao + 1;
  }
  
  if(ball.isTouching(box7)||ball2.isTouching(box7)){
    ball.bounceOff(box7);
    ball2.bounceOff(box7);
    box7.destroy();
    pontuacao = pontuacao + 1;
  }

  if(ball.isTouching(box8)||ball2.isTouching(box8)){
    ball.bounceOff(box8);
    ball2.bounceOff(box8);
    box8.destroy();
    pontuacao = pontuacao + 1;
  }
  
  if(ball.isTouching(box9)||ball2.isTouching(box9)){
    ball.bounceOff(box9);
    ball2.bounceOff(box9);
    box9.destroy();
    pontuacao = pontuacao + 1;
  }
  
  if(ball.isTouching(box10)||ball2.isTouching(box10)){
    ball.bounceOff(box10);
    ball2.bounceOff(box10);
    box10.destroy();
    pontuacao = pontuacao + 1;
  }
  
  if(ball.isTouching(box11)||ball2.isTouching(box11)){
    ball.bounceOff(box11);
    ball2.bounceOff(box11);
    box11.destroy();
    pontuacao = pontuacao + 1;
  }
  
  if(ball.isTouching(box12)||ball2.isTouching(box12)){
    ball.bounceOff(box12);
    ball2.bounceOff(box12);
    box12.destroy();
    pontuacao = pontuacao + 1;
  }
  
  if(ball.isTouching(box13)||ball2.isTouching(box13)){
    ball.bounceOff(box13);
    ball2.bounceOff(box13);
    box13.destroy();
    pontuacao = pontuacao + 1;
  }
  
  if(ball.isTouching(box14)||ball2.isTouching(box14)){
    ball.bounceOff(box14);
    ball2.bounceOff(box14);
    box14.destroy();
    pontuacao = pontuacao + 1;
  }
  
  if(ball.isTouching(box15)||ball2.isTouching(box15)){
    ball.bounceOff(box15);
    ball2.bounceOff(box15);
    box15.destroy();
    pontuacao = pontuacao + 1;
  }
  
  if(ball.isTouching(box16)||ball2.isTouching(box16)){
    ball.bounceOff(box16);
    ball2.bounceOff(box16);
    box16.destroy();
    pontuacao = pontuacao + 1;
  }
  

  
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
