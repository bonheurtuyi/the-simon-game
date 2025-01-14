$(document).ready(function () {
    let gamePattern = [];

    let userClickedPattern = [];

    let buttonColors = ["red", "blue", "green", "yellow" ];

    function nextSequence(){
        let randomNumber = Math.floor(Math.random()*4);
        let randomChosenColor = buttonColors[randomNumber];
        gamePattern.push(randomChosenColor);

        const button = $("#" + randomChosenColor);
        button.fadeIn(100).fadeOut(100).fadeIn(100);

        //This code no longer works as the browser requires user interaction to play any sound
        let audio = new Audio("./sounds/" + randomChosenColor + ".mp3");
        audio.play();

        $(".btn").click(function () {
            let userChosenColor = $(this).attr("id");
            userClickedPattern.push(userChosenColor);
            console.log(userClickedPattern);
        })
    }

    nextSequence();

})