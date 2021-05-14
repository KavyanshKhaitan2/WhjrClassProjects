var last_position_of_x, last_position_of_y;
color="black";
width_of_line=2;
canvas=document.getElementById('canva');
ctx=canvas.getContext("2d");
var width=screen.width;
new_width=screen.width-70;
new_heigth=screen.height-300;
if(width<992){
    document.getElementById("canva").width=new_width;
    document.getElementById("canva").height=new_heigth;
    document.body.style.overflow="hidden";
}
canvas.addEventListener("touchstart", my_touchstart);
function my_touchstart(e){
    color=document.getElementById("color").value;
    width_of_line=getElementById("width_of_line").value;
    last_position_of_x=e.touches[0].clientX-canvas.offsetLeft;
    last_position_of_y=e.touches[0].clientY-canvas.offsetTop;
}
canvas.addEventListener("touchmove",my_touchmove);
function my_touchmove(e){
    current_position_of_touch_x=e.touches[0].clientX-canvas.offsetLeft;
    current_position_of_touch_y=e.touches[0].clientY-canvas.offsetTop;
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=width_of_line;
    
    ctx.moveTo(last_position_of_x,last_position_of_y);
    ctx.lineTo(current_position_of_touch_x,current_position_of_touch_y);
    ctx.stroke();
    last_position_of_x=current_position_of_touch_x;
    last_position_of_y=current_position_of_touch_y;
}
function cleararea(){
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
}