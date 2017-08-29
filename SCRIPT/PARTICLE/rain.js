var rain = {

    _rain:[],

    maxNum:200,

    mouse_x: 0,
    mouse_y: 0,

    reset:function(){
        this._rain=[];
    },

    draw:function(){
        ctx.fillStyle='rgba(0,0,0,0.5)';
        ctx.fillRect(0,0,width,height);

       for (var i = 0, len = this._rain.length; i <len; i++){
            var p = this._rain[i];
            ctx.fillStyle = "rgba(0,0,255,1)";
            ctx.fillRect(p.x, p.y, p.size, p.size*3);
            ctx.fillStyle = "rgba(0,0,255,0.8)";
            ctx.fillRect(p.x, p.y-p.size*3, p.size, p.size*3);
            ctx.fillStyle = "rgba(0,0,255,0.6)";
            ctx.fillRect(p.x, p.y-p.size*4, p.size, p.size*3);
            ctx.fillStyle = "rgba(0,0,255,0.4)";
             ctx.fillRect(p.x, p.y-p.size*5, p.size, p.size*3);
        }
    },

    update:function(){

       if(this._rain.length < this.maxNum)
       {
        this._rain.push({
            x: Math.random() * 500 ,
            y:0 ,
            vy: Math.floor(Math.random()*20+10),
            //vy: 5,
            size: Math.floor(Math.random()*3+1),
            life:0,
            maxLife: 25,
        });
       }

        for (var i = 0, len = this._rain.length; i <len; i++){
            var p = this._rain[i];

            p.x += 0;
            p.y += p.vy;


            //collision
             if(p.x > this.mouse_x)
            {
                if( (p.x >= this.mouse_x-50 && p.x <= this.mouse_x+50 ) && (p.y >= this.mouse_y-50 && p.y <= this.mouse_y) )
                {
                    p.x += Math.random()*5+1;

                }

            }
            else if ( p.x < this.mouse_x)
            {
                if( (p.x >= this.mouse_x-50 && p.x <= this.mouse_x+50 ) && (p.y >= this.mouse_y-50 && p.y <= this.mouse_y) )
                {
                    p.x -= Math.random()*5+1;

                }
            }

          // Age the particle
           p.life++;

          // If Particle is old, remove it
          if (p.life >= p.maxLife) {
            //delete p;
            this._rain.splice(i,1);
            len--;
            i--;

          }//if
        }//for
    },

    updateIN:function(x,y){

        this.mouse_x = x;
        this.mouse_y = y;

    },

};




