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

var ball1 = createSprite(50,50,50,50);
ball1.shapeColor = "pink";
var ball2 = createSprite(395,395,10,10);
ball2.shapeColor = "Green";
var ball3 = createSprite(200, 200,30,30);
ball3.shapeColor = "orange";
var ball4 = createSprite(200, 100,40,40);
var ball5 = createSprite(100,200,55,55);
ball4.shapeColor = "blue";
ball5.shapeColor = "red";
var ball6 = createSprite(200, 300,35,35);
ball1.rotationSpeed=50;
ball2.rotationSpeed=50;
ball3.rotationSpeed=50;
ball4.rotationSpeed=50;
ball5.rotationSpeed=50;
ball6.rotationSpeed=50;
ball1.displace(ball2);

ball1.velocityX = 12;
ball1.velocityY = 2;
ball2.velocityX = -20;
ball2.velocityY = -5;
ball3.velocityX = 8;
ball3.velocityY = 6;
ball4.velocityX = -6;
ball4.velocityY = -10;
ball5.velocityX = -7;
ball5.velocityY = 9;
ball6.velocityX = 7;
ball6.velocityY = -13;


function draw() {
  
  background("white");
  
  createEdgeSprites();
  
ball1.bounceOff(edges);
ball2.bounceOff(edges);
ball3.bounceOff(edges);
ball4.bounceOff(edges);
ball5.bounceOff(edges);
ball6.bounceOff(edges);
        
  
ball1.bounce(ball2);
ball1.bounce(ball3);
ball1.bounce(ball4);
ball1.bounce(ball5);
ball1.bounce(ball6);

ball2.bounce(ball3);
ball2.bounce(ball4);
ball2.bounce(ball5);
ball2.bounce(ball6);

ball3.bounce(ball4);
ball3.bounce(ball5);
ball3.bounce(ball6);

ball4.bounce(ball5);
ball4.bounce(ball6);

ball5.bounce(ball6);

  drawSprites();
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
