// Grpahics Library

let cnv = document.getElementById("my-canvas");
let ctx = cnv.getContext("2d");
cnv.width = 600;
cnv.height = 700;

// Birds

function drawBird(x, y, beakcolor, eyelegcolor, bodycolor) {

    // Bird #1
    //Body
    fill(bodycolor);
    ellipse(x + 45, y + 30, 20, 15, 0, "fill");
    //Head
    circle(x + 62, y + 30, 12, "fill")
    //Beak
    fill(beakcolor)
    triangle(x + 65, y + 28, x + 83, y + 35, x + 65, y + 38, "fill")
    // Eyes
    fill(eyelegcolor)
    circle(x + 65, y + 25, 2, "fill")
    // Wings
    fill(bodycolor)
    triangle(x + 45, y + 25, x + 25, y, x + 65, y, "fill")
    triangle(x + 45, y + 25, x + 25, y + 60, x + 65, y + 60, "fill")
    // Legs
    fill(eyelegcolor)
    line(x + 27, y + 25, x, y + 25)
    line(x + 27, y + 35, x, y + 35)
    //Top Toes
    line(x + 10, y + 25, x, y + 20)
    line(x + 10, y + 25, x, y + 30)
    // Bottom Toes
    line(x + 10, y + 35, x, y + 30)
    line(x + 10, y + 35, x, y + 40)
}

drawBird(125, 170, "brown", "black", "indigo");
drawBird(70, 225, "yellow", "black", "lightblue");
drawBird(250, 210, "lime", "green", "tan")

// Draw Tree
fill("brown")
rect(470, 300, 35, 200, "fill")

// Leaves
fill("lightgreen")
circle(530, 300, 55, "fill")
circle(450, 300, 55, "fill")
circle(490, 265, 55, "fill")

// Apples and Stems and Leaves

function apples(x, y, apcolor, stcolor, lecolor, rotation) {
    fill(apcolor)
    circle(x + 10, y, 10, "fill")
    fill(stcolor);
    rect(x + 8, y - 18, 4, 8, "fill")
    fill(lecolor);
    ellipse(x + 14, y - 10, 7, 3.5, rotation, "fill")
}

apples(440, 368, "red", "brown", "green", 10)
apples(530, 368, "lime", "brown", "green", .4)
apples(410, 358, "yellow", "brown", "green", 9)
apples(562, 350, "orange", "brown", "green", 6)


// Draw the land
fill("green");
rect(0, 500, 600, 250, "fill");


// Draw Roots for the Tree
fill("brown")
triangle(505, 420, 530, 500, 505, 500, "fill")
triangle(470, 420, 530, 500, 445, 500, "fill")


// Clouds

fill("lightgrey")
circle(100, 95, 35, "fill")
circle(140, 80, 35, "fill")
circle(158, 100, 35, "fill")
circle(190, 85, 35, "fill")
circle(215, 100, 35, "fill")


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
triangle(237.5, 330, 220, 290, 255, 290, "fill", )
rect(185, 280, 75, 10, "fill")
rect(190, 290, 10, 20, "fill")
fill("yellow")
circle(195, 320, 10, "fill")
circle(195, 320, 10, "stroke")