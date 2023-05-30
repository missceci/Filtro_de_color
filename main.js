function preload(){

}

function setup(){
    //canvas = createCanvas(650,500);
    canvas = createCanvas(650,500);
    //canvas.position(110, 250);
canvas.position(370,320);

    //video = createCapture(VIDEO);
video = createCapture(VIDEO);

    //video.hide();
    video.hide();

    //tint_color = "";
tint_color="";
}

function draw(){
    //image(video, 0, 0, 650,500);
    image(video,0,0,650,500);

    //tint(tint_color);
tint(tint_color);
    
}

function take_snapshot(){
    //save('foto_cool.png');
    save('foto_cool.png');
}

function filter_tint(){
    //tint_color = document.getElementById("color_name").value;
    tint_color=document.getElementById("color_name").value;
    
    
}