var fireflies = {

    _fireflies:[],

    vx: 10,
    vy: 10,
    gravity: 1,

    maxNum:50,

    x_bound:500,
    y_bound:500,
    rad:1,

    reset:function(){
        this._fireflies=[];
    },

    draw:function(){
       for (var i = 0, len = this._fireflies.length; i <len; i++){
            var p = this._fireflies[i];
            ctx.fillStyle = "rgba(255,255,0,"+p.opacity+")";
            ctx.fillRect(p.x, p.y, p.size, p.size);
        }
    },

    update:function(){

        if(this._fireflies.length < this.maxNum)
        {
            this._fireflies.push({
                //random on whole page
                x: Math.random() * width+1,
                y: Math.random() * height+1,

                //random around area
                //x: Math.random() * ( (this.x_bound+this.rad) - (this.x_bound -this.rad)) + (this.x_bound -this.rad),
                //y: Math.random() * ( (this.y_bound+this.rad) - (this.y_bound -this.rad)) + (this.y_bound -this.rad),
                size: Math.floor(Math.random()*5+1),
                opacity: 0,
                fade:false,
                speed: Math.random()*0.02,
                life: Math.random()*10000,
            });
       }
        for (var i = 0, len = this._fireflies.length; i <len; i++){
            var p = this._fireflies[i];
            p.x += 0;
            p.y += 0;
            //p.size += (Math.random()-0.5);

             if (p.opacity <= 0)
             {
                p.fade=false;
             }else if (p.opacity >=0.8)
             {
                p.fade=true;
             }


            if (p.fade == true)
            {
                p.opacity -= p.speed;
                p.size -= p.speed;
            }else
             {
                 p.opacity += p.speed;
                 p.size += p.speed;
             }

             p.life--;

          // If Particle is too small remove it
          //if (p.size <= 0) {
          //if particle life is 0 kill particle
          if(p.life <=0 ){
            //delete p;
            this._fireflies.splice(i,1);
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




