/**
    Stars - by Lim Thye Chean
**/

graphics(320, 400);
setPenSize(2);

var stars = new Array();

for (i = 0; i < 30; i++)
    stars[i] = new Star(random(320), random(400), random(5) + 2);

setInterval(draw, 50);

// Define star

function Star(x, y, speed) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.color = [random(256), random(256), random(256)];
	
	// Draw star
	
	this.draw = function(size) {
    	setColor(this.color);
        paintCircle(this.x, this.y, size);
	}
	
	// Move star
	
	this.move = function() {
		this.x = this.x - this.speed;
        
        if (this.x < 0) {
            this.x = 320;
            this.y = random(400);
        }	
	}
}

// Draw stars

function draw() {
    clearScreen();
    
    for (i = 0; i < 30; i++) {
        var star = stars[i];
        star.draw(i % 3 + 1);
		star.move();
    }
}