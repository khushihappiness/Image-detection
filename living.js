img="";

function preload()
{
    img=loadImage('living_room.jpg');
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
    text("Couch", 95, 155);
    noFill();
    stroke("#FF0000");
    rect(90, 140, 450, 150);
}

function logout()
{
    window.location="index.html";
}