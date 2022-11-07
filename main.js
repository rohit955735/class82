var mouse_events ="empty";
var last_position_of_x ,last_position_of_y;
canvas = document.getElementById("myCanvas");  
ctx = canvas.getContext("2d");
color = "black";
width=1;
canvas.addEventListener("mousedown",mymousedown);
function mymousedown(e){
mouse_events="mouse_down";

}
canvas.addEventListener("mouseup",mymouseup);
function mymouseup(e){
mouse_events="mouse_up";

}
canvas.addEventListener("mouseleave",mymouseleave);
function mymouseleave(e){
mouse_events="mouse_leave";

}
canvas.addEventListener("mousemove",mymousemove);
function mymousemove(e){
 current_position_of_x = e.clientX-canvas.offsetLeft;
 current_position_of_y = e.clientY-canvas.offsetTop;
 if(mouse_events=="mouse_down"){
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width;
    console.log("last_position_of_x_and_y = ");
    console.log("x= "+last_position_of_x+"y="+ last_position_of_y);
    ctx.moveTo(last_position_of_x,last_position_of_y);
    console.log("current_position_of_x_and_y = ");
    console.log("x= "+current_position_of_x+"y="+ current_position_of_y);
    ctx.lineTo(current_position_of_x,current_position_of_y);    
    ctx.stroke();
 }
 last_position_of_x=current_position_of_x;
 last_position_of_y=current_position_of_y;
}
