var mouseEvent="empty";
var last_position_of_x, last_position_of_y;
canvas=document.getElementById("canva");
ctx=canvas.getContext("2d");
color=black;
width_of_line=1;
canvas.addEventListner("mousedown",my_mousedown);
function my_mousedown(e){
    mouseEvent="mousedown";
}
canvas.addEventListner("mouseup",my_mouseup);
function my_mouseup(e){
    mouseEvent="mouseUP";
}
canvas.addEventListner("mouseleave",my_mouseleave);
function my_mouseleave(e){
    mouseEvent="mouseleave";
}
canvas.addEventListner("mousemove",my_mousemove);
function my_mousemove(e){
    current_position_of_mouse_x=e.clientX-canvas.offsetLeft;
    current_position_of_mouse_y=e.clientY-canvas.offsetTop;
    if(mouseEvent="mousedown"){
       ctx.beginPath();
       ctx.strokeStyle=color;
       ctx.LineWidth=width_of_line;
       ctx.moveTo(last_position_of_x,last_position_of_y);
       ctx.lineTo(current_position_of_mouse_x,current_position_of_mouse_y);
       ctx.stroke(); 
    }
    last_position_of_x=current_position_of_mouse_x;
    last_position_of_y=current_position_of_mouse_y;
}