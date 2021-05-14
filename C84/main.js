canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

rover_width = 100;
rover_height = 90;

var move_pixels = 1;

var rover_x = 10;
var rover_y = 10;

background_img = "mars.jpg";
rover_img = "rover.png";

function add() {
  background_imgTag = new Image(background_img);
  background_imgTag.onload = uploadBackground;
  background_imgTag.src = background_img;

  rover_imgTag = new Image(rover_img);
  rover_img.onload = uploadRover;
  rover_imgTag.src = rover_img;

  function uploadBackground() {
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
  }
  function uploadRover() {
    ctx.drawImage(rover_imgTag, rover_x, rover_y, rover_width, rover_height);
  }
}

window.addEventListener("keydown", myKeydown);
function myKeydown(e) {
  key_pressed = e.keyCode;
  console.log(key_pressed);

  if (key_pressed === 38) {
    up();
    console.log("UP");
  }
  if (key_pressed === 40) {
    down();
    console.log("DOWN");
  }
  if (key_pressed === 37) {
    left();
    console.log("LEFT");
  }
  if (key_pressed === 39) {
    right();
    console.log("RIGHT");
  } if (key_pressed === 87) {
    move_pixels = move_pixels + 1;
    alert("Current Move Pixels: " + move_pixels);
  } if (key_pressed === 83) {
    move_pixels = move_pixels - 1;
    alert("Current Move Pixels: " + move_pixels);
  }
}

function up() {
  if (rover_y >= 0) {
    rover_y = rover_y - move_pixels;
    console.log(
      "When up arrow is pressed, x = " + rover_x + " | y = " + rover_y
    );
    uploadBackground();
    uploadRover();
  }
  function uploadBackground() {
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
  }
  function uploadRover() {
    ctx.drawImage(rover_imgTag, rover_x, rover_y, rover_width, rover_height);
  }
}
function down() {
  if (rover_y <= 500) {
    rover_y = rover_y + move_pixels;
    console.log(
      "When down arrow is pressed, x = " + rover_x + " | y = " + rover_y
    );
    uploadBackground();
    uploadRover();
  }
  function uploadBackground() {
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
  }
  function uploadRover() {
    ctx.drawImage(rover_imgTag, rover_x, rover_y, rover_width, rover_height);
  }
}
function left() {
  if (rover_x >= 0) {
    rover_x = rover_x - move_pixels;
    console.log(
      "When left arrow is pressed, x = " + rover_x + " | y = " + rover_y
    );
    uploadBackground();
    uploadRover();
  }
  function uploadBackground() {
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
  }
  function uploadRover() {
    ctx.drawImage(rover_imgTag, rover_x, rover_y, rover_width, rover_height);
  }
}
function right() {
  if (rover_x <= 700) {
    rover_x = rover_x + move_pixels;
    console.log(
      "When right arrow is pressed, x = " + rover_x + " | y = " + rover_y
    );
    uploadBackground();
    uploadRover();
  }
  function uploadBackground() {
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
  }
  function uploadRover() {
    ctx.drawImage(rover_imgTag, rover_x, rover_y, rover_width, rover_height);
  }
}
