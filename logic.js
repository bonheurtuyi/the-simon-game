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

        checkAnswer(userClickedPattern.length - 1);
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

    //Verifying input patterns from the user
    function checkAnswer(currentLevel){
        if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
            if (userClickedPattern.length === gamePattern.length) {
                setTimeout(function (){
                    nextSequence();
                },1000);
                userClickedPattern = [];
            }
        }
        else{
            let wrongSound = "wrong";
            playSound(wrongSound);
            $("body").addClass('game-over');
            setTimeout(function (){
                $("body").removeClass('game-over');
            }, 250)

            $("#level-title").text("Game Over!, Press any key to restart!");
            startOver();
        }
    }

    //Game restart
    function startOver(){
        level = 0;
        gamePattern = [];
        userClickedPattern = [];
        started = false;
    }
});