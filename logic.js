$(document).ready(function () {
    let gamePattern = [];
    let level = 0;
    let userClickedPattern = [];
    let started = false;
    let buttonColors = ["red", "blue", "green", "yellow" ];

    //Detect keyboard press and checking if the game has already started
    $(document).keydown(function (event) {
        if (!started){
            $("#level-title").text("Level " + level);
            nextSequence();
            started = true;
        }
    })

    $(".btn").click(function () {
        let userChosenColor = $(this).attr("id");
        userClickedPattern.push(userChosenColor);

        playSound(userChosenColor);
        animatePress(userChosenColor);
    })

    function nextSequence(){
        level++;

        $("#level-title").text("Level " + level);

        let randomNumber = Math.floor(Math.random()*4);
        let randomChosenColor = buttonColors[randomNumber];
        gamePattern.push(randomChosenColor);

        $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);

        //This code no longer works as the browser requires user interaction to play any sound
        playSound(randomChosenColor);

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

})