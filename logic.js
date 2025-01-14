$(document).ready(function () {
    let gamePattern = [];

    let buttonColors = ["Red", "Blue", "Green", "Yellow" ];

    function nextSequence(){
        let randomNumber = Math.floor(Math.random()*4);
        let randomChosenColor = buttonColors[randomNumber];
        gamePattern.push(randomChosenColor);

        return console.log(gamePattern);
    }

    nextSequence();
})