canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
mouseevent="";
lastx="";
lasty="";
canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
    mouseevent="mousedown"
}
canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e){
    mouseevent="mouseup"
}
canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e){
    mouseevent="mouseleave"
}
canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e){
    currentx=e.clientX-canvas.offsetLeft
    currenty=e.clientY-canvas.offsetTop
    if(mouseevent=="mousedown"){
        ctx.beginPath();
        ctx.strokeStyle="red"
        ctx.lineWidth=5
        ctx.arc(currentx,currenty,50,0,2*Math.PI)
        ctx.stroke()
    }
    lastx=currentx
    lasty=currenty
    
    
    
}