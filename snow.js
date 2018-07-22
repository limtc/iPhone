/** 
 	Snow - by Lim Ding Wen (24/08/2008)
**/

graphics(320,480);

var snows = new Array();

for (i = 0; i < 100; i++)
	snows[i] = new Snow(random(320),random(400),random(5) + 1,random(5) + 1,random(3) + 1);

setInterval(main,50);

// Define snow

function Snow(x,y,speed,slide,size) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.slide = slide;
    this.size = size;
	
	this.draw = function() {
		setColor([255,255,255]);
        paintCircle(this.x, this.y, this.size);
        this.y += this.speed;
        this.x += this.slide;
		
        if (this.x > 320) this.x = 0;
        if (this.y > 480) this.y = 0;
    }
}

// Main

function main() {
	clearScreen();
	setGradient(0,0,0,300,[0,0,255],[150,150,150]);
	paintRect(0,0,320,480);
		
	for (i = 0;i < 100; i++) {
		snow = snows[i];
		snow.draw();
	}
}