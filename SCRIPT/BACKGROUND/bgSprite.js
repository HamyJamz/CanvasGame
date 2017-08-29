var
s_bg,
color;


function Sprite(img, x, y, width, height) {
	this.img = img;
	this.x = x*2;
	this.y = y*2;
	this.width = width*2;
	this.height = height*2;
}

Sprite.prototype.draw = function(ctx, x, y) {
	ctx.drawImage(this.img, this.x, this.y, this.width, this.height,
		x, y, this.width, this.height);
};

function initSprites(img) {

    
    s_bg = new Sprite(img,  1, 2, 248, 154);
	s_bg.color = "#FFAACC";

	
}