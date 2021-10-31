img1="";

function preload()
{
    img1=loadImage('dining.jpg');
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
    text("Vase", 160, 170);
    noFill();
    stroke("#FF0000");
    rect(150, 150, 150, 150);
}

function logout()
{
    window.location="index.html";
}