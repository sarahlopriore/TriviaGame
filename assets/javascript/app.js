// start page with trivia game title and a start button
// game title is constant

$(document).ready(function() {

$("#options").hide();
$("#solution").hide();
$("#question").hide();


// set variables
var timerOn = false;
var unanswered = 0;
var incorrect = 0;
var correct = 0;
var time = 0;
var $options = $("#options");
var questions = ["Which state is the only one in the United States without a National Park?", "another question", "question number three"];
var answers = ["Delaware", "answer1", "answer2", "answer3"];
var answers0 = ["Delaware", "Ohio", "Missouri", "Kansas"];
var questionCount = 0;

var startTime = function() {
    if (!timerOn) {
        time = 31;
        intervalId = setInterval(countdown, 1000);
    }
    timerOn = true;
}

// create a stop timer function
var stopTime = function() {
    clearInterval(intervalId);
    timerOn = false;
}

// after a set amount of time (5-10 seconds) display the next question with new timer with no user input
var resultTimeout = function() {
    setTimeout(getNextQuestion(), 10000);
}

var getNextQuestion = function() {
    for (i = 0; i < questions.length; i++) {
        startTime();
        $options.show(1000);
        $("#question").show(1000);
        $("#question").text(questions[i]);
    }
};

// user presses start to begin the game
// time remaining displays with a timer that counts down (only applies to the one question)
// first question appears with 4 options
$(document).on("click", "#start", function() {
    $("#start").hide();
    startTime();
    $options.show(1000);
    $("#question").show(1000);
    $("#question").text(questions[0]);
    $options.append("<p class='answer-choice right-answer'>Delaware</p>");
    $options.append("<p class='answer-choice wrong-answer'>Ohio</p>");
    $options.append("<p class='answer-choice wrong-answer'>Missouri</p>");
    $options.append("<p class='answer-choice wrong-answer'>Kansas</p>");
})

// when timer runs out before player answers
// displays time remains as 0 seconds
// tells the player they are out of time
// displays the correct answer was: with right answer
// displays an image or gif relating correct answer
// add 1 to the total number of unanswered

var countdown = function() {
    time--;
    $("#time-count").text("Time Remaining: " + time)
    if (time === 0) {
        stopTime();
        unanswered++;
        $options.empty();
        $("#question").empty();
        var answerNum = questionCount;
        $("#solution").show();
        $("#result").text("Out of time!");
        $("#correct-answer-display").text("The correct answer was: " + answers[answerNum]);
        // display image relating to answer
        //resultTimeout();
    }
}

// when player chooses a correct answer
// the timer stops
// tells player the answer was correct
// displays an image or gif relating correct answer
// add 1 to the total number of correct
$(document).on("click", ".answer-choice", function() {
    if ($(this).hasClass("right-answer")) {
        $options.empty();
        $("#question").empty();
        stopTime();
        correct++;
        $("#solution").show();
        $("#result").text("Correct!");
        // display image relating to question
        //resultTimeout();
    } else if ($(this).hasClass("wrong-answer")){
        $options.empty();
        $("#question").empty();
        stopTime();
        incorrect++;
        var answerNum = questionCount;
        $("#solution").show();
        $("#result").text("Nope!")
        $("#correct-answer-display").text("The correct answer was: " + answers[answerNum]);
        // display image relating to question
        //resultTimeout();
    }
})
// when player chooses an incorrect answer
// the timer stops
// tells player the answer was incorrect
// displays the correct answer was: with right answer
// displays an image or gif relating correct answer
// add 1 to the total number of incorrect



// once all questions have been answered display results
// something about the game being over and here is how the player did
// display number of correct answers
// display number of incorrect answers
// display number of unanswered questions
// display a start over button


// when user presses the start over button
// this resets the game

})





    
