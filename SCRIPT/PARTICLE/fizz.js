var fizz
 = {

    _fizz
    :[],

    vx: 10,
    vy: 10,
    gravity: 1,

    maxNum:1000,

    reset:function(){
        this._fizz
        =[];
    },

    draw:function(){
       for (var i = 0, len = this._fizz
       .length; i <len; i++){
            var p = this._fizz
            [i];
            ctx.fillStyle = "rgba(255,255,255,1)";
            ctx.fillRect(p.x, p.y, p.size, p.size);

        }
    },

    update:function(){

       if(this._fizz
       .length < this.maxNum)
       {
        this._fizz
        .push({
            x: Math.random() * 500 ,
            y:0 ,
            size: Math.floor(Math.random()*5),
            life:0,
            //maxLife: Math.floor(Math.random()*2000),
            maxLife: 20,
            color_r: 255,
            color_g: Math.floor(Math.random() * 255),

        });
       }
        for (var i = 0, len = this._fizz
        .length; i <len; i++){
            var p = this._fizz
            [i];

            p.x -= Math.random() * 2 - 1;
            p.y += Math.random() * 1  ;
            //p.y -= 2.5

          // Age the particle
           p.life++;

          // If Particle is old, remove it
          if (p.life >= p.maxLife) {
            //delete p;
            this._fizz
            .splice(i,1);
            len--;
            i--;

          }//if
        }//for
    },

};




