var star = {

    _star:[],

    vx: 10,
    vy: 10,
    gravity: 1,

    maxNum:10,

    x_bound:500,
    y_bound:500,
    rad:1,

    reset:function(){
        this._star=[];
    },

    draw:function(){
       for (var i = 0, len = this._star.length; i <len; i++){
            var p = this._star[i];
            ctx.fillStyle = "rgba(255,255,0,1)";
            ctx.fillRect(p.x, p.y, p.size, p.size);
        }
    },

    update:function(){

       if(this._star.length < this.maxNum)
       {
        this._star.push({
            //random on whole page
            x: Math.random() * 500+1,
            y: Math.random() * 500+1,

            //random around area
            //x: Math.random() * ( (this.x_bound+this.rad) - (this.x_bound -this.rad)) + (this.x_bound -this.rad),
            //y: Math.random() * ( (this.y_bound+this.rad) - (this.y_bound -this.rad)) + (this.y_bound -this.rad),
            size: Math.floor(Math.random()*5+1),
        });
       }
        for (var i = 0, len = this._star.length; i <len; i++){
            var p = this._star[i];
            p.x += 0;
            p.y += 0;
            p.size -= Math.random()*0.5;

          // If Particle is too small remove it
          if (p.size <= 0) {
            //delete p;
            this._star.splice(i,1);
            len--;
            i--;
          }//if
        }//for
    },

    updateIN:function(x,y, rad)
    {
        this.x_bound = x;
        this.y_bound = y;
        this.rad = rad;
    }

};




