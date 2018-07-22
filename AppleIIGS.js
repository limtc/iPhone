// Apple IIGS - by Lim Ding Wen

graphics(320,480);

var keyX = 150-130;
var i = 0;

setGradient(0,130,0,480,[0,0,0],[0,0,255]);
paintRect(0,0,320,480);

// Draw moniter device

setColor(15);
paintRect(159-150,73,202,152);

setColor(14);
paintRect(160-150,74,200,150);

setColor([0,0,255]);
paintRect(180-150,100,160,100);

setColor(15);
paintRect(179-150,223,162,28);

setColor(14);
paintRect(180-150,224,160,26);

// Draw the machine with logo

setColor(15);
paintRect(159-150,249,202,52);

setColor(14);
paintRect(160-150,250,200,50);

setColor(7);
paintCircle(185-150,271,1);
paintCircle(185-150,278,5);

// Draw disk drive device

setColor(15);
paintRect(359-150,249,102,52);

setColor(14);
paintRect(360-150,250,100,50);

setColor(0);
paintRect(365-150,260,75,1);

// Draw keyboard

setColor(15);
paintRect(139-130,329,242,46);

setColor(14);
paintRect(140-130,330,240,44);

setColor(0);
for (i = 0; i < 12; i++) {
    paintCircle(keyX,354,10);
    keyX += 20;
}

// Draw mouse

setColor(15);
paintRect(399-130,339,42,22);

setColor(14);
paintRect(400-130,340,40,20);