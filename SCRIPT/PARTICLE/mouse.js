
var mouse = {

    color: "#ffffff",
    posX:0,
    posY:0,

    draw:function(){
       //SET COLOR
       ctx.fillStyle = this.color;

       //DRAW CIRCLE
       ctx.beginPath();
       ctx.arc(this.posX, this.posY,25,0,2*Math.PI);
       ctx.fill();

    },

    update:function(x,y){
            this.posY = y;
            this.posX = x;
    },

};




