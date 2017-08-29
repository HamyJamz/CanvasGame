function canvas(){

    //variables
    var rect = 0;
    var mouse_y = 0;
    var mouse_x = 0;

    //MAKE CANVAS
    canvas = document.createElement("canvas");
    width = window.innerWidth;
    height = window.innerHeight;

    //sizing conditionals
    //turned off
    /*
    if(width >= 500){
        width=500;
        height=500;
        canvas.style.border = "1px solid #000";
    }
    */

    canvas.width = width;
    canvas.height = height;
    ctx = canvas.getContext("2d");
    document.body.appendChild(canvas);



    canvas.addEventListener("mousemove", function(){

        var rect = canvas.getBoundingClientRect();
        mouse_x = Math.round((event.clientX-rect.left)/(rect.right-rect.left)*canvas.width);
        mouse_y = Math.round((event.clientY-rect.top)/(rect.bottom-rect.top)*canvas.height);

    });



}