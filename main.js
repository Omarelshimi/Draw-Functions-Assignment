// Grpahics Library

let cnv = document.getElementById("my-canvas");
let ctx = cnv.getContext("2d");
cnv.width = 600;
cnv.height = 700;

// Draw the land
fill("green");
rect(0, 500, 600, 250, "fill");

// Draw Tree
fill("brown")
rect(470, 300, 35, 200, "fill")

// Draw Roots for the Tree
fill("brown")
triangle(505, 420, 530, 500, 505, 500, "fill")
triangle(470, 420, 530, 500, 445, 500, "fill")

// Leaves
fill("lightgreen")
circle(530, 300, 55, "fill")
circle(450, 300, 55, "fill")
circle(490, 265, 55, "fill")

// Apples and Stems and Leaves
fill("red")
circle(450, 368, 10, "fill")
circle(540, 355, 12, "fill")
fill("brown");
rect(448, 350, 4, 8, "fill")
rect(538, 335, 5, 8, "fill")
fill("green");
ellipse(455, 357, 7, 3.5, 2.6, "fill")
ellipse(536, 343, 8, 4, .5, "fill")

// Clouds

fill("lightgrey")
circle(100, 95, 35, "fill")
circle(140, 80, 35, "fill")
circle(158, 100, 35, "fill")
circle(190, 85, 35, "fill")
circle(215, 100, 35, "fill")

// Birds

//Body
fill("lightblue")
ellipse(100, 250, 15, 10, 0, "fill");
//Head
fill("lightblue")
circle(115, 250, 9, "fill")
//Beak
fill("yellow")
triangle(120, 248, 128, 255, 120, 258, "fill")
// Eyes
fill("black")
circle(118, 246, 2, "fill")
// Wings
fill("lightblue")
triangle(100, 250, 88, 225, 110, 225, "fill")
triangle(100, 250, 88, 275, 110, 275, "fill")
// Legs
fill("brown")
line(68, 250, 85, 250, "fill")
line(75, 255, 87, 255, "fill")
//Top Toes
line(75, 250, 70, 246, "fill")
line(75, 250, 70, 254, "fill")
// Bottom Toes
line(78, 255, 70, 254, "fill")
line(80, 255, 70, 258, "fill")


//Body
fill("indigo")
ellipse(170, 200, 20, 15, 0, "fill");
//Head
fill("indigo")
circle(187, 200, 12, "fill")
//Beak
fill("brown")
triangle(190, 198, 208, 205, 190, 208, "fill")
// Eyes
fill("black")
circle(190, 195, 2, "fill")
// Wings
fill("indigo")
triangle(170, 195, 150, 170, 190, 170, "fill")
triangle(170, 195, 150, 230, 190, 230, "fill")
// Legs
fill("brown")
line(152, 195, 125, 195, "fill")
line(152, 205, 125, 205, "fill")
//Top Toes
line(135, 195, 125, 190, "fill")
line(135, 195, 125, 200, "fill")
// Bottom Toes
line(135, 205, 125, 200, "fill")
line(135, 205, 125, 210, "fill")

//Chatbox
fill("lightgrey")
ellipse(270, 170, 30, 20, 0, "fill")
circle(239, 190, 6, "fill")
circle(228, 197, 4, "fill")
circle(218, 200, 2, "fill")

//Text
font("10px, Comic Sans")
text("I'm Hungry!", 244, 173, "stroke")

//Bench
fill("brown")
rect(70, 430, 120, 7, "fill")
rect(70, 445, 120, 7, "fill")
rect(70, 460, 120, 10, "fill")
rect(70, 460, 120, 10, "stroke")
rect(80, 420, 8, 80, "fill")
rect(172, 420, 8, 80, "fill")

// Lamp Post
fill("grey");
rect(230, 310, 15, 190, "fill")
triangle(237.5, 330, 220, 290, 255, 290, "fill",)
rect(185, 280, 75, 10, "fill")
rect(190 ,290, 10, 20, "fill")
fill("yellow")
circle(195, 320, 10, "fill")
circle(195, 320, 10, "stroke")
