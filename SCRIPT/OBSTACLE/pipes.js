pipes = {

        _pipes:[],

        reset:function(){
            this._pipes =[];
        },

        update:function(){
            /*ever hundred frames push a new object to array*/

            if( frames % 100 == 0 && bird.velX >0){

                var _y = height - (s_pipeSouth.height + s_fg.height + 120 + 200*Math.random());
                this._pipes.push({
                    x:fg_posX+500,
                    y: _y,
                    width: s_pipeSouth.width,
                    height: s_pipeSouth.height
                });
            }
            for (var i = 0, len = this._pipes.length; i <len; i++){
                var p = this._pipes[i];

                /*speed pipes move by*/
                /*only move pipe when bird moves*/
                p.x -= bird.velX;

                /*if pipe goes too far off screen remove it from the array*/
                if (p.x <-50){
                    this._pipes.splice(i,1);
                    i--;
                    len--;
                }
            }
        },

        draw: function(ctx){
           for (var i = 0, len = this._pipes.length; i <len; i++){
                var p = this._pipes[i];
                s_pipeSouth.draw(ctx, p.x, p.y);
                s_pipeNorth.draw(ctx, p.x, p.y+80+p.height);
            }
        }
    },/*pipes end*/