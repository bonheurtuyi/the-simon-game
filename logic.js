$(document).ready(function () {
    let gamePattern = [];

    let buttonColors = ["red", "blue", "green", "yellow" ];

    function nextSequence(){
        let randomNumber = Math.floor(Math.random()*4);
        let randomChosenColor = buttonColors[randomNumber];
        gamePattern.push(randomChosenColor);

        const button = $("#" + randomChosenColor);
        button.fadeOut(100).fadeIn(100);

        button.click(() =>{
            let audio = new Audio("./sounds/" + randomChosenColor + ".mp3");
            audio.play();
        })
    }

    nextSequence();

})