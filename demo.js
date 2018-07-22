/**
    Demo - by Lim Thye Chean
**/

graphics(320, 400);
i = 0;

init();
setColor([random(256), random(256), random(256)]);
setInterval(draw, 50);

// Init

function init() {
	num = 0;
	clearScreen();
	setColor(7);
	drawString("GScript", 140, 200);
	setColor(15);
	drawString("By Lim Thye Chean", 100, 220);
}

// Draw lines and stars

function draw() {                
    plot(random(320), random(400));
    line(i * 10, 0, 0, 400 - i * 13);
    line(320 - i * 10, 399, 319, i * 13);
    
    i++;
    if (i > 31) {
        i = 0;
        setColor([random(256), random(256), random(256)]);
        
        num++;
        if (num > 9)
			init();
    }
}