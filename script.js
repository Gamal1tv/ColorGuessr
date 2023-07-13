var red, green, blue;

function changeColor(){
    red = Math.round((Math.random()* 255) + 0);
    green = Math.round((Math.random()* 255) + 0);
    blue = Math.round((Math.random()* 255) + 0);
    var color = 'rgb(' + red + ',' + green + ',' + blue + ')';
    var element = document.getElementById("game-container");
    element.style.backgroundColor = color;
    
}

function Check(){
    var redElement, greenElement, blueElement, redOffset, greenOffset, blueOffset, score;

    redElement = document.getElementById("redElement").value;
    greenElement = document.getElementById("greenElement").value;
    blueElement = document.getElementById("blueElement").value;

    if (redElement == "" || greenElement == "" | blueElement == ""){
        return;
    }

    redOffset = red - redElement;
    greenOffset = green - greenElement;
    blueOffset = blue - blueElement;

    if (redOffset < 0){
        redOffset *= -1;
    }
    if (greenOffset < 0){
        greenOffset *= -1;
    }
    if (blueOffset < 0){
        blueOffset *= -1;
    }

    score = redOffset+greenOffset+blueOffset;

    document.getElementById("redElement").value = "";
    document.getElementById("greenElement").value = "";
    document.getElementById("blueElement").value = "";

    document.getElementById("score-num").textContent = "Score: " + score;

    // console.log(red + " " + green + " " + blue);
    // console.log(redElement + " " + greenElement + " " + blueElement);
    // console.log(redOffset + " " + greenOffset + " " + blueOffset);
    // console.log(score);
    changeColor();
}


changeColor();


