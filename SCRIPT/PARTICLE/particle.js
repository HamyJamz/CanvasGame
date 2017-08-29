var particle = {
    posX: 100,
    posY: 100,

    vx: 10,
    vy: 10,
    gravity: 1,

    color: '#ffffff',
    red: 100,
    blue: 100,
    green: 100,
    opacity: 1,

    particleIndex:0,

    maxNum:100,


    draw:function(){
       // Draw a square particle on the canvas
        ctx.fillStyle = "rgba("+this.red+","+this.blue+","+this.green+","+this.opacity+")";
        ctx.fillRect(this.posX, this.posY, 10, 10);
    },

    update:function(){
        this.posX += this.vx;
        this.posY += this.vy;
        this.vy += this.gravity;
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

    many:function(){
        for (var i = 0; i < this.maxNum; i++)
        {
            this.setVelocity();
            this.draw();
        }
    },





};




