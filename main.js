function preload() {
}
function setup() {
    canvas = createCanvas(640, 480);
    canvas.position(100, 200)


    video = createCapture(VIDEO);
    video.hide()
    

}

function draw() {
    image(video, 150,100 , 350, 280)
    fill('red')
    rect(118,45,366,40)
    rect(118,386,385,40)
    rect(75,45,40,366)
    rect(530,45,40,366)
    fill('green')
    circle(118,60,100)
    circle(530,60,100)
    circle(545,400,100)
    circle(105,400,100)
    fill('red')
}

function take_snapshot() {
    save("student's picture yay")

}