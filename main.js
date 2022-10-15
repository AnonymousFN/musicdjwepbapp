 function preload(){
sound1=loadSound("music.mp3")
sound2=loadSound("music2.mp3")
 }
    
function setup(){
canvas=createCanvas(800,400)
canvas.position(500,100)
video=createCapture(VIDEO)
video.hide()
}

function draw(){
image(video,0,0,800,400)
}
