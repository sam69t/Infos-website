var Engine = Matter.Engine,
  World = Matter.World,
  Bodies = Matter.Bodies;

var engine;
var world;
var boxes = [];

var state = true;
var state1 = true;
var state2 = true;
var state3 = true;
var state4 = true;
var state5 = true;
var state6 = true;
var state7 = true;

var grav = true;
var released = true;

var ground;
let textSize = 130;
let heightPush = 0;
let center = 100;
let center2 = -100;

// let heightPush = -200;

let myFont;
function preload() {
  // myFont = loadFont("assets/Condensed-Times.otf");
}

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  pixelDensity(1.5);
  console.log(windowWidth);
  var options = {
    isStatic: true,
    pixelRatio: 0.5,
  };
  // top = Bodies.rectangle(width / 2, height, width, 100, options);
  // dESKTOP
  // ground = Bodies.rectangle(width / 2, 790, width, 275, options);
  // MOBILE
  // ground = Bodies.rectangle(0, 2100, width, 100, options);

  // World.add(world, ground);

  // World.add(world, top);

  world.gravity.y = 1;
}

function Box(x, y, w, h) {
  this.body = Bodies.rectangle(x, y, w, h);
  this.w = w;
  this.h = h;
  World.add(world, this.body);

  this.show = function () {
    var pos = this.body.position;
    var angle = this.body.angle;
    textFont("serif", textSize);

    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(LEFT);
    fill(255, 255, 0, 1);
    noStroke();
    rect(0, 0, this.w * 10, this.h * 1.6);
    // translate(-this.w / 2, -this.h / 2);
    fill(0);
    text("Design + Developpment", center2, this.h);
    pop();
  };
}
function Box2(x, y, w, h) {
  this.body = Bodies.rectangle(x, y, w, h);
  this.w = w;
  this.h = h;
  World.add(world, this.body);

  this.show = function () {
    var pos = this.body.position;
    var angle = this.body.angle;

    textFont("serif", textSize);
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(LEFT);
    blendMode(MULTIPLY);

    fill(255, 255, 0, 1);
    noStroke();
    rect(0, 0, this.w * 10, this.h * 2);
    // translate(-this.w / 2, -this.h / 2);
    fill(0);

    text("Samuel Dumez", center, 100);
    pop();
  };
}
function Box3(x, y, w, h) {
  this.body = Bodies.rectangle(x, y, w, h);
  this.w = w;
  this.h = h;
  World.add(world, this.body);

  this.show = function () {
    var pos = this.body.position;
    var angle = this.body.angle;
    textFont("serif", textSize);

    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    blendMode(MULTIPLY);

    fill(255, 255, 0, 1);
    noStroke();
    rect(0, 0, this.w * 10, this.h * 2);
    // translate(-this.w / 2, -this.h / 2);
    fill(0);
    text("hello@samueldumez.com", center2, 100);
    pop();
  };
}
function Box4(x, y, w, h) {
  this.body = Bodies.rectangle(x, y, w, h);
  this.w = w;
  this.h = h;
  World.add(world, this.body);

  this.show = function () {
    var pos = this.body.position;
    var angle = this.body.angle;
    textFont("serif", textSize);

    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(LEFT);
    blendMode(MULTIPLY);

    fill(255, 255, 0, 1);
    noStroke();
    rect(0, 0, this.w * 10, this.h * 2);
    // translate(-this.w / 2, -this.h / 2);
    fill(0);
    text("+33(0)630626263", center, 100);
    pop();
  };
}
function Box5(x, y, w, h) {
  this.body = Bodies.rectangle(x, y, w, h);
  this.w = w;
  this.h = h;
  World.add(world, this.body);

  this.show = function () {
    var pos = this.body.position;
    var angle = this.body.angle;
    textFont("serif", textSize);

    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(LEFT);
    blendMode(MULTIPLY);

    fill(255, 255, 0, 1);
    noStroke();
    rect(0, 0, this.w * 10, this.h * 2);
    // translate(-this.w / 2, -this.h / 2);
    fill(0);
    text("Write or Call me", center, 100);
    pop();
  };
}
function Box6(x, y, w, h) {
  this.body = Bodies.rectangle(x, y, w, h);
  this.w = w;
  this.h = h;
  World.add(world, this.body);

  this.show = function () {
    var pos = this.body.position;
    var angle = this.body.angle;
    textFont("serif", textSize);

    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(LEFT);
    blendMode(MULTIPLY);

    fill(255, 255, 0, 1);
    noStroke();
    rect(0, 0, this.w * 10, this.h * 2);
    // translate(-this.w / 2, -this.h / 2);
    fill(0);
    text("For any", center + 250, 100);
    pop();
  };
}
function Box7(x, y, w, h) {
  this.body = Bodies.rectangle(x, y, w, h);
  this.w = w;
  this.h = h;
  World.add(world, this.body);

  this.show = function () {
    var pos = this.body.position;
    var angle = this.body.angle;
    textFont("serif", textSize);

    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(LEFT);
    blendMode(MULTIPLY);

    fill(255, 255, 0, 1);
    noStroke();
    rect(0, 0, this.w * 10, this.h * 2);
    // translate(-this.w / 2, -this.h / 2);
    fill(0);
    text("Creative Commission", center2, 100);
    pop();
  };
}
function mouseReleased() {
  released = true;
  return false;
}
function mousePressed() {
  //   if (grav == true) {
  //     world.gravity.y = 0.5;
  //     let canvas = document.getElementById('tutorial');
  //     canvas
  //     grav = false;
  //   } else if (grav == false) {
  //     world.gravity.y = 0;
  //     grav = true;
  //   }
  if (!released) {
    return;
  }
  released = false;

  if (state == true) {
    boxes.push(new Box2(windowWidth / 8, heightPush, 100, 100));
    console.log("1");
    state = false;
    state1 = false;
  } else if (state1 == false) {
    state1 = true;
    state2 = false;

    boxes.push(new Box(windowWidth / 8, heightPush, -50, 100));
    console.log("2");
  } else if (state2 == false) {
    state2 = true;
    state3 = false;
    boxes.push(new Box3(windowWidth / 8, heightPush, 1000, 100));
    console.log("3");
  } else if (state3 == false) {
    state3 = true;
    state4 = false;

    boxes.push(new Box4(windowWidth / 8, heightPush, 100, 100));
    console.log("4");
  } else if (state4 == false) {
    state4 = true;
    state5 = false;
    boxes.push(new Box5(windowWidth / 8, heightPush, 100, 100));
  } else if (state5 == false) {
    state5 = true;
    state6 = false;
    boxes.push(new Box6(windowWidth / 8, heightPush, 100, 100));
  } else if (state6 == false) {
    state6 = true;
    state7 = false;
    boxes.push(new Box7(windowWidth / 8, heightPush, 100, 100));
  } else if (state7 == false) {
    state7 = true;
    // World.remove(world, ground);
    setTimeout(() => {
      // World.add(world, ground);
    }, 1700);
    state = true;
  }
}

function draw() {
  background(255);
  for (var i = 0; i < boxes.length; i++) {
    boxes[i].show();
  }

  if (windowWidth < 1000) {
    console.log("queries");
    textSize = 80;
    center2 = -25;
  } else {
    textSize = 120;
    center2 = 100;
    center = 350;
  }
}

var released = true;
