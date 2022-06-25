song = "";
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
righttWristY = 0;

function preload()
{
    song = loadsound("music.mp3");
}

function setup() {
    canvas = createcanvas(600, 500);
    canvas.center();

    video = createcapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelloaded);
    poseNet.on('pose', gotposes);
}

function modelloaded() {
    console.log('PoseNet Is Initialized')
}

function draw() {
    image(video, 0, 0, 600, 500);
}

function play()
{
    song.play();
    song.setvolume(1);
    song.rate(1);
}


function gotposes(results)
{
    if(results.length > 0)
    {
        console.log(results);
        leftWristX = result[0].pose.leftWrist.X;
        leftWristy = result[0].pose.leftWrist.y;
        console.log("leftWristX = " + leftWristX + "leftWristY = " + leftWristY);

        rightWristX = result[0].pose.rightWrist.X;
        rightWristy = result[0].pose.rightWrist.y;
        console.log("rightWristX = " + rightWristX + "rightWristY = " + rightWristY);

    }
}