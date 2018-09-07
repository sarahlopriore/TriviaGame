// start page with trivia game title and a start button
// game title is constant

$(document).ready(function() {

$("ul").hide();

// set variables
var unanswered = 0;
var incorrect = 0;
var correct = 0;
var time = 31;
var $options = $("#options");
var questions = ["Which state is the only one in the United States without a National Park?", "another question", "question number three"];
var answers0 = ["Delaware", "Ohio", "Missouri", "Kansas"]

var startTime = function() {
    intervalId = setInterval(countdown, 1000);
}

// create a stop timer function
//

// user presses start to begin the game
// time remaining displays with a timer that counts down (only applies to the one question)
// first question appears with 4 options
$(document).on("click", "#start", function() {
    $("#start").hide();
    startTime();
    $options.show();
    $("#question").text(questions[0]);
    $options.append("<li class='right-answer'>Delaware</li>");
    $options.append("<li class='wrong-answer'>Ohio</li>");
    $options.append("<li class='wrong-answer'>Missouri</li>");
    $options.append("<li class='wrong-answer'>Kansas</li>");
})

var countdown = function() {
    time--;
    $("#time-count").text("Time Remaining: " + time)
    if (time === 0) {
        clearInterval(intervalId)
    }
}


// when timer runs out before player answers
// displays time raminas as 0 seconds
// tells the player they are out of time
// displays the correct answer was: with right answer
// displays an image or gif relating correct answer
// add 1 to the total number of unanswered



// when player chooses an incorrect answer
// the timer stops
// tells player the answer was incorrect
// displays the correct answer was: with right answer
// displays an image or gif relating correct answer
// add 1 to the total number of incorrect
$(document).on("click", ".wrong-answer", function() {
    $options.empty();

})


// when player chooses a correct answer
// the timer stops
// tells player the answer was correct
// displays an image or gif relating correct answer
// add 1 to the total number of correct


// after a set amount of time (5-10 seconds) display the next question with new timer with no user input


// once all questions have been answered display results
// something about the game being over and here is how the player did
// display number of correct answers
// display number of incorrect answers
// display number of unanswered questions
// display a start over button


// when user presses the start over button
// this resets the game

})





    
