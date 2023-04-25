rightWristX = 0
leftWristX = 0
difference = 0
noseX = 0
noseY = 0

function setup(){
    canvas = createCanvas(550, 550);
    canvas.position(560,150);
    video = createCapture(VIDEO);
    video.size(550, 550);
    posenet = ml5.poseNet(video,modelLoaded);
    posenet.on('pose', gotPoses);
}
function modelLoaded(){
    console.log('Model Loaded!')
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX)
    }
}
function draw(){
    background('pink');
    document.getElementById("font_size").innerHTML = "sides of the square are"+difference;
    fill('orange')
    stroke('light blue')
    //square(noseX, noseY, difference)
    //rect(noseX,noseY,difference+50,difference)
    textSize(difference);
    text('SMITTY', noseX, noseY);
}