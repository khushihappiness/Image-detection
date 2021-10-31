img1="";

function preload()
{
    img1=loadImage('bed_room.jpg');
}
function setup()
{
    canvas=createCanvas(640,420);
    canvas.center();

}

function draw()
{
    image(img1, 0, 0, 640, 420);
    fill("#FF0000");
    text("Pictures", 240, 75);
    noFill();
    stroke("#FF0000");
    rect(230, 60, 150, 150);
}

function logout()
{
    window.location="index.html";
}