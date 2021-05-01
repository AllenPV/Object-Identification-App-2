img = "";
status = "";
function setup(){
    Canvas = createCanvas(640,420);
    Canvas.center();
    objectDetector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML = "Status :Detecting Object";
}
function preload(){
    img = loadImage("Bed.jpg");
}
function modelLoaded(){
    console.log("Model Loaded");
    status = true;
    objectDetector.detect(img, gotResult);
}