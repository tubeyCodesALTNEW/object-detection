img = "";
Stats = "";
Objects = [];

function prelod() {
    img = loadImage('dog_cat.jpg');
}

function setup(){
    canvas = creatCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("stats").innerHTML = "Stats : Detecting Objects";
}

function draw() {
    image(img, 0, 0, 640, 420);

       if(Stats != ""){
           for (i = 0; 1 <Objects.length; i++){
               document.getElementById("stats").innerHTML = "status : object Detected";

               fill("#FF0000");
               percent = floor(Objects[1].confidence * 100);
               text(Objects[i].label + " " + percent + "%", Objects[i].x, Objects[i].y);
               noFill();
               stroke("#FF0000");
               rect(Objects[i].x, Objects[i].y, Objects [i].width, Objects[i].height);
           }
               
           
       }

    fill("#FF0000");
    text("Dog", 45, 75);
    noFill();
    rect(30, 60, 450, 350);

    fill("#FF0000");
    text("Cat", 320, 120);
    noFill();

    stroke("#FF0000");
    rect(300, 90, 270, 320);
}

function modelLoaded() {
    console.log("Model Loaded!")
    Stats = true;
    objectDetector.detect(img, gotResult);
}

function gotResult(error, results) {
    if(error) {
        console.log(error);
    }
    console.log(results);
    Objects = results;
}