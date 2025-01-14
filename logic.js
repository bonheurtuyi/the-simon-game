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
        playSound(randomChosenColor);

        $(".btn").click(function () {
            let userChosenColor = $(this).attr("id");
            userClickedPattern.push(userChosenColor);
            console.log(userClickedPattern);
            playSound(userChosenColor);
            animatePress(userChosenColor);
        })
    }

    //Function to play sound
    function playSound(colorChoice){
        let btnPlaySound = new Audio("./sounds/" + colorChoice + ".mp3");
        btnPlaySound.play();
    }

    //Animate button press
    function animatePress(currentColor){
        let buttonSelector = $("#" + currentColor);
        buttonSelector.addClass("pressed");

        setTimeout(function() {
            buttonSelector.removeClass("pressed");
        }, 100);
    }

    nextSequence();
})