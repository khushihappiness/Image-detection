img="";

function preload()
{
    img=loadImage('kitchen.jpg');
}
function setup()
{
    canvas=createCanvas(640,420);
    canvas.center();

}

function draw()
{
    image(img, 0, 0, 640, 420);
    fill("#FF0000");
    text("Stove", 140, 155);
    noFill();
    stroke("#FF0000");
    rect(130, 140, 150, 150);
}

function logout()
{
    window.location="index.html";
}