img="";
status="";
objects=[];

function preload()
{
    img=loadImage('living_room.jpg');
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
objectDetector.detect(img, gotResult);
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
objects=results;
    }
}
function draw()
{
    image(img, 0, 0, 640, 420);
    //fill("#FF0000");
    //text("Couch", 95, 155);
    //noFill();
    //stroke("#FF0000");
    //rect(90, 140, 450, 150);

    if(status != "")
    {
        for(i=0; i < objects.length; i++)
        {
            document.getElementById("status").innerHTML="Status :Object detected";
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