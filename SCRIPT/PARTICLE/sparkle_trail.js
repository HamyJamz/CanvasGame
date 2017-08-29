
var sparkle_trail = {

    _sparkle_trail:[],

    vx: 10,
    vy: 10,
    gravity: 1,

    maxNum:10,

    x_bound:0,
    y_bound:0,
    rad:0,

    reset:function(){
        this._sparkle_trail=[];
    },

    draw:function(){
       for (var i = 0, len = this._sparkle_trail.length; i <len; i++){
            var p = this._sparkle_trail[i];
            ctx.fillStyle = "rgba(244, 66, 191,1)";
            ctx.fillRect(p.x, p.y, p.size, p.size);
        }
    },

    update:function(){

       if(this._sparkle_trail.length < this.maxNum)
       {
        this._sparkle_trail.push({
            //random on whole page
            //x: Math.random() * 500+1,
            //y: Math.random() * 500+1,

            //random around area
            x: Math.random() * ( (this.x_bound+this.rad) - (this.x_bound -this.rad)) + (this.x_bound -this.rad),
            y: Math.random() * ( (this.y_bound+this.rad) - (this.y_bound -this.rad)) + (this.y_bound -this.rad),
            size: Math.floor(Math.random()*5+1),

        });
       }
        for (var i = 0, len = this._sparkle_trail.length; i <len; i++){
            var p = this._sparkle_trail[i];
            p.x += 0;
            p.y += 0;
            p.size -= Math.random()*0.5;


          // If Particle is too small remove it
          if (p.size <= 0) {
            //delete p;
            this._sparkle_trail.splice(i,1);
            len--;
            i--;
          }//if
        }//for
    },

    updateIN:function(x,y, rad)
    {
        this.x_bound = x;
        this.y_bound = y;
        this.rad =rad;
    }

};




