function debug(){
    //MOUSE MOVE
      canvas.addEventListener("mousemove", function(){

            //gives position in relation to canvas
            var rect = canvas.getBoundingClientRect();
            
            var x = Math.round((event.clientX-rect.left)/(rect.right-rect.left)*canvas.width)
            var y = Math.round((event.clientY-rect.top)/(rect.bottom-rect.top)*canvas.height)

            var coords = "X coords: " + x + ", Y coords: " + y;
            var debugPane = document.getElementById("debug");
            debugPane.innerHTML =  coords;

      });

    //CLICKS


    //KEYPRESS / ACTIONS

}