var ember = {

    _ember:[],

    vx: 10,
    vy: 10,
    gravity: 1,

    maxNum:100,

    reset:function(){
        this._ember=[];
    },

    draw:function(){
       for (var i = 0, len = this._ember.length; i <len; i++){
            var p = this._ember[i];
            ctx.fillStyle = "rgba("+p.color_g+",0,0,1)";
            ctx.fillRect(p.x, p.y, p.size, p.size);
        }
    },

    update:function(){

        if(this._ember.length < this.maxNum)
        {
            this._ember.push({
                x: Math.random() * 500 ,
                y:500 ,
                size: Math.floor(Math.random()*5),
                life:0,
                maxLife: Math.floor(Math.random()*500),
                color_r: 255,
                color_g: Math.floor(Math.random() * 255),
            });
        }

        for (var i = 0, len = this._ember.length; i <len; i++){
            var p = this._ember[i];

            p.x -= Math.random() * 10 - 5;
            p.y -= Math.random() * 5  ;


          // Age the particle
           p.life++;

          // If Particle is old, remove it
          if (p.life >= p.maxLife) {
            this._ember.splice(i,1);
            len--;
            i--;
          }//if
        }//for
    },



};




