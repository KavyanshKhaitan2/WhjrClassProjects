canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

nasa_mars_images_array = ["nasa_image_1.jpg", "nasa_image_2.jpeg", "nasa_image_3.jpg", "nasa_image_4.jpg"]

random_number = Math.floor((Math.random() * 4));
console.log(random_number);

rover_width = 100;
rover_height = 90;

background_img = nasa_mars_images_array[random_number];
console.log("background_img= " + background_img);

rover_img = "rover.png";

var rover_x = 10;
var rover_y = 10;


function add() {
  background_imgTag = new Image();
  background_imgTag.onload = uploadBackground;
  background_imgTag.src = background_img;

  rover_imgTag = new Image();
  rover_img.onload = uploadRover;
  rover_imgTag.src = rover_img;
}

function uploadBackground() {
  ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}
function uploadRover() {
  ctx.drawImage(rover_imgTag, rover_x, rover_y, rover_width, rover_height);
}


window.addEventListener("keydown", my_keydown);
function my_keydown(e) {
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
  }
}



function up() {
  if (rover_y >= 0) {
    rover_y = rover_y - 10;
    console.log(
      "When up arrow is pressed, x = " + rover_x + " | y = " + rover_y
    );
    uploadBackground();
    uploadRover();
  }
}

function down() {
  if (rover_y <= 500) {
    rover_y = rover_y + 10;
    console.log(
      "When down arrow is pressed, x = " + rover_x + " | y = " + rover_y
    );
    uploadBackground();
    uploadRover();
  }
}
function left() {
  if (rover_x >= 0) {
    rover_x = rover_x - 10;
    console.log(
      "When left arrow is pressed, x = " + rover_x + " | y = " + rover_y
    );
    uploadBackground();
    uploadRover();
  }
}
function right() {
  if (rover_x <= 700) {
    rover_x = rover_x + 10;
    console.log(
      "When right arrow is pressed, x = " + rover_x + " | y = " + rover_y
    );
    uploadBackground();
    uploadRover();
  }
}
