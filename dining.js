img1="";
status="";
objects=[];

function preload()
{
    img1=loadImage('dining.jpg');
}
function setup()
{
    canvas=createCanvas(640,420);
    canvas.center();

    objectDetector= ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML= "Status: detecting object";


}

function modelLoaded()
{
console.log("Model is Loaded");
status=true;
objectDetector.detect(img1, gotResult);
}


function gotResult(error, results)
{
    if(error)
    {
console.error(error);
    }
    else
    {
        console.log(results);
        objects =results;
    }
}



function draw()
{
image(img1, 0, 0, 640, 420);
// fill("#FF0000");
//text("Vase", 160, 170);
//noFill();
//stroke("#FF0000");
//rect(150, 150, 150, 150);

if(status != "")
{
    for(i= 0; i< objects.length; i++)
    {
        document.getElementById("status").innerHTML= "Status : Object Detected";
     fill("#FF0000");
     percent= floor(objects[i].confidence*100);
     text(objects[i].label + " " + percent + "%", objects[i].x, objects[i].y)
     noFill();
     stroke("#FF0000");
     rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
    }
}


}

function logout()
{
    window.location="index.html";
}