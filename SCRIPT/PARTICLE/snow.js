var snow = {

    _snow:[],
    vx: 10,
    vy: 10,
    gravity: 1,
    maxNum:1000,

    reset:function(){
        this._snow=[];
    },

    draw:function(){
       for (var i = 0, len = this._snow.length; i <len; i++){
            var p = this._snow[i];
            ctx.fillStyle = "rgba(255,255,255,1)";
            ctx.fillRect(p.x, p.y, p.size, p.size);
        }
    },

    update:function(){
       if(this._snow.length < this.maxNum)
       {
           this._snow.push({
                x: Math.random() * 500 ,
                y:0 ,
                size: Math.floor(Math.random()*5),
                life:0,
                maxLife: 1000,
           });
       }
        for (var i = 0, len = this._snow.length; i <len; i++){
            var p = this._snow[i];
            p.x -= Math.random() * 2 - 1;
            p.y += Math.random() * 1  ;
            p.life++; // Age the particle
            // If Particle is old, remove it
            if (p.life >= p.maxLife) {
                //delete p;
                this._snow.splice(i,1);
                len--;
                i--;
            }//if
        }//for
    },

};




