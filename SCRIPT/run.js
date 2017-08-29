function run(){
    var loop = function(){
         update();
         render();
         window.requestAnimationFrame(loop, canvas);
    }
    window.requestAnimationFrame(loop, canvas);

}