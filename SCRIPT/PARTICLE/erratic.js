var erratic = {

    _erratic:[],
    posX: 250,
    posY: 250,

    vx: 10,
    vy: 10,
    gravity: 1,

    color: 'rgba(10,10,10,0.8)',
    red: 100,
    blue: 100,
    green: 100,
    opacity: 1,

    particleIndex:0,

    maxLife:1,
    maxNum:1000,

    reset:function(){
        this._erratic=[];
    },

    draw:function(){
       // Draw a square particle on the canvas
       ctx.fillStyle = "rgba("+this.red+","+this.blue+","+this.green+","+this.opacity+")";
       ctx.fillRect(this.posX, this.posY, 10, 10);

    },

    drawMany:function(){
       for (var i = 0, len = this._erratic.length; i <len; i++){
            var p = this._erratic[i];
            ctx.fillStyle = "#ffaa00";
            ctx.fillRect(p.x, p.y, 10, 10);
        }
    },

    update:function(){
        this.posX += this.vx;
        this.posY += this.vy;
        this.vy += this.gravity;
    },

    updateMany:function(){

        this._erratic.push({
            x: Math.random() * 500 ,
            y:0 ,
            life:0,
        });

        for (var i = 0, len = this._erratic.length; i <len; i++){
            var p = this._erratic[i];

            p.x += Math.random() * 20 - 10;
            p.y += Math.random() * 20 - 5;



          // Age the particle
           p.life++;

          // If Particle is old, remove it
          if (p.life >= this.maxLife) {
            delete p;
          }//if
        }//for
    },

    setPOS:function(x,y){
        this.posX = x;
        this.posY = y;
    },

    setColor:function(color){
        this.color = color;
    },

    setVelocity:function(){
        // Random X and Y velocities
        this.vx = Math.random() * 20 - 10;
        this.vy = Math.random() * 20 - 5;
    },

    scary:function(){
        for (var i = 0; i < this.maxNum; i++)
        {
            this.setVelocity();
            this.draw();
        }
    },

};




