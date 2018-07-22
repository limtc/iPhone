/**
    Balls - by Lim Thye Chean
**/

graphics(320, 400);

var balls = new Array();

for (i = 0; i < 16; i++)
	balls[i] = new Ball(random(256) + 32, random(336) + 32, random(10) - 5, random(10) - 5);

setInterval(draw, 50);

// Define ball

function Ball(x, y, dx, dy) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.color = [random(256), random(256), random(256)];
	
	// Draw ball
	
	this.draw = function(size) {
        setColor(this.color);
        paintCircle(this.x, this.y, size);
	}

	// Move ball
	
	this.move = function() {
        this.x = this.x + this.dx;
        this.y = this.y + this.dy;
	}
	
	// Reverse ball direction
	
	this.reverseX = function() {
		this.dx = -this.dx;
		this.x = this.x + this.dx;
	}
	
	this.reverseY = function() {
		this.dy = -this.dy;
		this.y = this.y + this.dy;
	}
}

// Draw balls

function draw() {
    clearScreen();
    
    for (i = 0; i < 16; i++) {
        ball = balls[i]; 
        size = (i + 1) * 2;
        
		ball.draw(size);
		ball.move();
    
        if (ball.x < size || ball.x > 320 - size)
			ball.reverseX();
            
        if (ball.y < size || ball.y > 400 - size) 
			ball.reverseY();
    }
}