// Graphics Library

function stroke(style) {
    ctx.strokeStyle = style;
}

function fill(style) {
    ctx.fillStyle = style;
}

function lineWidth(width) {
    ctx.lineWidth = width;
}


// Draw a stroke or fill rectangle with a top-left corner of (x, y), a width of w and a hight of h
function rect(x, y, w, h, mode) {
    if (mode === "fill") {
        ctx.fillRect(x, y, w, h);
    } else if (mode === "stroke") {
        ctx.strokeRect(x, y, w, h);
    }
}


// Draw a line segment from (x1, y1) to (x2, y2)
function line(x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.moveTo(x1, y1); // Endpoint 1
    ctx.lineTo(x2, y2);
    ctx.stroke();
}

// Draw a stroke or fill circle with a center (x, y) and radius of r
function circle(x, y, r, mode) {
    ctx.beginPath();
    ctx.arc(x, y, r, 0, 2 * Math.PI);
    if (mode === "fill") {
        ctx.fill();
    } else if (mode === "stroke") {
        ctx.stroke();
    }

}

// Draw a triangle with a x1, y1, x2, y2, x3, y3, and a mode
function triangle(x1, y1, x2, y2, x3, y3, mode) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.lineTo(x3, y3);
    ctx.closePath();
    if (mode === "stroke") {
        ctx.stroke();
    } else if (mode === "fill") {
        ctx.fill();
    }
}

function font(fontSetting) {
    ctx.font = fontSetting;
}

// Draw a message 
function text(message, x, y, mode) {
    if (mode === "fill") {
        ctx.fillText(message, x, y)
    } else if (mode === "stroke") {
        ctx.strokeText(message, x, y)
    }
}

function ellipse(x, y, xRadius, yRadius, rotation, mode) {
    ctx.beginPath();
    ctx.ellipse(x, y, xRadius, yRadius, rotation, 0, 2 * Math. PI);
    if (mode === "fill") {
        ctx.fill();
    } else if (mode === "stroke") {
        ctx.stroke();
    }
}

