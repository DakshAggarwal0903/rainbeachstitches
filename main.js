function setup(){
    canvas=createCanvas(1280,480);
    canvas.center();
    background("white");
    ea= window.speechSynthesis;
    canvas.mouseReleased(mousee);
}
function preload(){
    ae=ml5.imageClassifier('DoodleNet');
}
function canvasclear(){
    background("white");
}
function draw(){
    strokeWeight(5);
    stroke(0);
    if(mouseIsPressed){
        line(pmouseX,pmouseY,mouseX,mouseY);
    }
}
function mousee(){
    ae.classify(canvas,sfn);
}
function sfn(error,results){
if(error){
    console.log(error);
}
else{
    console.log(results);
    document.getElementById("label").innerHTML="Your drawing looks like "+results[0].label;
    document.getElementById("confidence").innerHTML="Confidence: "+Math.round(results[0].confidence * 100) + '%';
    utterThis = new SpeechSynthesisUtterance("Your drawing looks like "+ results[0].label);
    ea.speak(utterThis);
}
}