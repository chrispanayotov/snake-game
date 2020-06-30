let snake;
let resolution = 15;
let food;
let row;
let col;

function setup() {
  createCanvas(400, 400);
  frameRate(10);
  row = floor(width / resolution);
  col = floor(height / resolution);
  snake = new Snake();
  foodLocation();
}

function foodLocation() {
  let x = floor(random(row));
  let y = floor(random(col));
  food = createVector(x, y);
}

function draw() {
  scale(resolution);
  background(51);
  if (snake.eat(food)) {
    foodLocation();
  }
  snake.update();
  snake.show();

  if (snake.endGame()) {
    background(255, 0, 0);
    noLoop();
  }

  noStroke();
  fill(0, 255, 0);
  rect(food.x, food.y, 1, 1);
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    snake.setDirection(0, -1);
  } else if (keyCode === DOWN_ARROW) {
    snake.setDirection(0, 1);
  } else if (keyCode === LEFT_ARROW) {
    snake.setDirection(-1, 0);
  } else if (keyCode === RIGHT_ARROW) {
    snake.setDirection(1, 0);
  }
}
