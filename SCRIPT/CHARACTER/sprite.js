var 

s_bird,
s_bg;


function Sprite(img, x, y, width, height,solid) {
	this.img = img;
	this.x = x*2;
	this.y = y*2;
	this.width = width*2;
	this.height = height*2;
	this.solid = solid;
}

Sprite.prototype.draw = function(ctx, x, y) {
	ctx.drawImage(this.img, this.x, this.y, this.width, this.height,
		x, y, this.width, this.height);
};

function initSprites(img) {
/*
	s_bird = [
        //1: x=21/2 y=341/2 width=79 height=98
		new Sprite(img, 10, 170, 29, 49),
		//2: 82x341 139x439
		new Sprite(img, 41, 170, 29, 49),
		new Sprite(img, 71, 170, 29, 49),
		new Sprite(img, 101, 170, 29, 49)
		
	];
	
    
    s_bg = new Sprite(img,  1, 2, 248, 154);
	s_bg.color = "#FFAACC";
*/

    s_bird = [
		new Sprite(img, 156, 115, 17, 12, true),
		new Sprite(img, 156, 128, 17, 12, true),
		new Sprite(img, 156, 141, 17, 12, true)
	];
	
	s_bg = new Sprite(img,   0, 0, 138, 114, false);
	s_bg.color = "#70C5CF";
	
	s_fg = new Sprite(img, 138, 0, 112,  56, true);
	
	s_pipeNorth = new Sprite(img, 251, 0, 26, 200, true);
    s_pipeSouth = new Sprite(img, 277, 0, 26, 200, true);
	
}