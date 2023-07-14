//used to store game boxes rgb values
var red, green, blue;

//generate a color to guess
function changeColor(){
    //get 3 random numbers 0-255
    red = Math.round((Math.random()* 255) + 0);
    green = Math.round((Math.random()* 255) + 0);
    blue = Math.round((Math.random()* 255) + 0);

    //set game container color 
    var color = 'rgb(' + red + ',' + green + ',' + blue + ')';
    document.getElementById("game-container").style.backgroundColor = color;
}

//check users answer and compare with color needed to guess, then give score
function Check(){
    var redElement, greenElement, blueElement, redOffset, greenOffset, blueOffset, score;

    //get each user's 3 input values
    redElement = document.getElementById("redElement").value;
    greenElement = document.getElementById("greenElement").value;
    blueElement = document.getElementById("blueElement").value;

    //exit method and reset input boxes if user did not enter a valid number for any of the 3 colors
    if (!parseInt(redElement) || !parseInt(greenElement) || !parseInt(blueElement))
    {
        document.getElementById("redElement").value = "";
        document.getElementById("greenElement").value = "";
        document.getElementById("blueElement").value = "";
        return;
    }
    if (redElement < 0 || redElement > 255)
    {
        document.getElementById("redElement").value = "";
        document.getElementById("greenElement").value = "";
        document.getElementById("blueElement").value = "";
        return;
    }
    if (greenElement < 0 || greenElement > 255)
    {
        document.getElementById("redElement").value = "";
        document.getElementById("greenElement").value = "";
        document.getElementById("blueElement").value = "";
        return;
    }
    if (blueElement < 0 || blueElement > 255)
    {
        document.getElementById("redElement").value = "";
        document.getElementById("greenElement").value = "";
        document.getElementById("blueElement").value = "";
        return;
    }

    //get the difference of the users inputs values and the generated values
    redOffset = red - redElement;
    greenOffset = green - greenElement;
    blueOffset = blue - blueElement;

    //if differences are negative then multiply by -1 to turn it possitive
    if (redOffset < 0){
        redOffset *= -1;
    }
    if (greenOffset < 0){
        greenOffset *= -1;
    }
    if (blueOffset < 0){
        blueOffset *= -1;
    }

    //add up differences to get score
    score = redOffset + greenOffset + blueOffset;

    //display score
    document.getElementById("score-num").textContent = "Score: " + score;
    //reset input fields
    document.getElementById("redElement").value = "";
    document.getElementById("greenElement").value = "";
    document.getElementById("blueElement").value = "";
    
    //get new color
    changeColor();
}

//generate color when site is opened
changeColor();