var paddle1
var paddle2
var ball
var edges
var gameState = "serve"
var gameState = "END"
var compScore = 0
var playerScore

function setup() {
  createCanvas(600, 600);

  paddle1 = createSprite(10, 300, 10, 60)
  paddle1.shapeColor = "purple"

  paddle2 = createSprite(590, 300, 10, 60)
  paddle2.shapeColor = "blue"

  ball = createSprite(300, 300, 20, 20)
  ball.shapeColor = "orange"

  edges = createEdgeSprites();

}

function draw() {
  background(51);
  if (keyDown("space") && gameState === "serve") {
    serve();
    gameState = "play"
  }

  if (gameState === "serve") {
    text("Press Space to Serve", 235, 190)
  }

  

  if(ball.x > 600 || ball.x < 0){
   if(ball.x > 600){
    compScore = compScore
   } 
  }

  ball.bounceOff(edges[2])
  ball.bounceOff(edges[3])

  paddle1.y = mouseY
  paddle2.y = ball.y
 ball.bounceOff(paddle1)
  ball.bounceOff(paddle2)

  drawSprites();
}

function serve() {
  ball.velocityX = 6
  ball.velocityY = 5
}