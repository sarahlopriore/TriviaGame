// start page with trivia game title and a start button
// game title is constant

$(document).ready(function() {

$("#options").hide();
$("#solution").hide();
$("#question").hide();
$("#endResults").hide();


// set variables
//var firstAnswer = [];
//var answerNum = "";
var timerOn = false;
var unanswered = 0;
var incorrect = 0;
var correct = 0;
var time = 0;
var $options = $("#options");
var questions = ["Which state is the only one in the United States without a national park?", 
            "Which is the largest of all the National Parks?", 
            "Which waterfall is the tallest in Yosemite National Park?", 
            "Which mountain has the most glaciated peak in the contiguous United States?",
            "Which two states are tied for having the most national parks?", 
            "Which national park is home to the nation's deepest cave, at 1,593 ft deep?", 
            "Which is the deepest lake in the United States?", 
            "Which super volcano is responsible for three of the world's biggest volcano eruptions?",
            "Which national park has the lowest elevation in the United States, at 282 feet below sea level?", 
            "Which was the world's first national park?"];
var correctAnswers = ["Delaware", 
            "Wrangell-St. Elias National Park and Preserve", 
            "Yosemite Falls", 
            "Mount Rainier", 
            "California and Alaska", 
            "Carlsbad Caverns National Park", 
            "Crater Lake", 
            "The Yellowstone Caldera", 
            "Death Valley National Park", 
            "Yellowstone National Park"];
var answerChoices = {
    answers0: ["Missouri", "Ohio", "Delaware", "Kansas"],
    answers1: ["Denali National Park and Preserve", "Wrangell-St. Elias National Park and Preserve", "Everglades National Park", "Grand Canyon National Park"],
    answers2: ["Sentinal Falls", "Bridalveil Fall", "Ribbon Fall", "Yosemite Falls"],
    answers3: ["Mount Elbert", "Mount Rainier", "Mount Shasta", "Grand Teton"],
    answers4: ["California and Alaska", "Utah and Arizona", "Washington and Florida", "Colorado and Alaska"],
    answers5: ["Wind Cave National Park", "Mammoth Cave National Park", "Oregon Caves National Monument", "Carlsbad Caverns National Park"],
    answers6: ["Lake Tahoe", "Crater Lake", "Lake Superior", "Lake Chelan"],
    answers7: ["The Long Valley Caldera", "Mount Aniakchak", "Valles Caldera", "The Yellowstone Caldera"],
    answers8: ["Everglades National Park", "Death Valley National Park", "Kenai Fjords National Park", "Glacier Bay National Park and Preserve"],
    answers9: ["Yellowstone National Park", "Mesa Verde", "Sequoia National Park", "Yosemite National Park"]
};

var resultImages = ["assets/images/delaware.jpg", 
                "assets/images/wrangell.jpg", 
                "assets/images/yosemite-falls.jpg", 
                "assets/images/mount-rainier.jpg", 
                "assets/images/number-8.jpg", 
                "assets/images/carlsbad-cavern.jpg", 
                "assets/images/crater-lake.jpg", 
                "assets/images/yellowstone-caldera.jpeg", 
                "assets/images/death-valley.jpg",
                "assets/images/yellowstone-national-park.jpg"];

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

//var mapChoices = $.map(answerChoices, function(n, i) {
  //  return i + "," + n;
//});

var descriptors = Object.getOwnPropertyDescriptors(answerChoices);

//console.log(descriptors.answers1.value);
//console.log(descriptors);



var getNextQuestion = function() {
        console.log("question count: " + questionCount);
        console.log("correct: " + correct);
        console.log("incorrect: " + incorrect);
        console.log("unanswered: " + unanswered);
        $("#correct-answer-display").empty();
        $("#result-image").empty();
        $("#solution").hide();
        startTime();
        $options.show();
        $("#question").show();
        $("#question").text(questions[questionCount]);
        if (questionCount === 0) {
            for (i = 0; i < answerChoices.answers0.length; i++) {
                var arrayChoice = answerChoices.answers0[i];
                var $newAnswer = $("<p class='answer-choice'></p>").append(arrayChoice);
                if (correctAnswers.includes(arrayChoice)) {
                    $newAnswer.addClass("right-answer");
                    $options.append($newAnswer);
                } else {
                    $newAnswer.addClass("wrong-answer");
                    $options.append($newAnswer);
                };
            };
        } else if (questionCount === 1) {
            for (j = 0; j < answerChoices.answers1.length; j++) {
                var arrayChoice = answerChoices.answers1[j];
                var $newAnswer = $("<p class='answer-choice'></p>").append(arrayChoice);
                if (correctAnswers.includes(arrayChoice)) {
                    $newAnswer.addClass("right-answer");
                    $options.append($newAnswer);
                } else {
                    $newAnswer.addClass("wrong-answer");
                    $options.append($newAnswer);
                };
            };
        } else if (questionCount === 2) {
            for (k = 0; k < answerChoices.answers2.length; k++) {
                var arrayChoice = answerChoices.answers2[k];
                var $newAnswer = $("<p class='answer-choice'></p>").append(arrayChoice);
                if (correctAnswers.includes(arrayChoice)) {
                    $newAnswer.addClass("right-answer");
                    $options.append($newAnswer);
                } else {
                    $newAnswer.addClass("wrong-answer");
                    $options.append($newAnswer);
                };
            };
        } else if (questionCount === 3) {
            for (l = 0; l < answerChoices.answers3.length; l++) {
                var arrayChoice = answerChoices.answers3[l];
                var $newAnswer = $("<p class='answer-choice'></p>").append(arrayChoice);
                if (correctAnswers.includes(arrayChoice)) {
                    $newAnswer.addClass("right-answer");
                    $options.append($newAnswer);
                } else {
                    $newAnswer.addClass("wrong-answer");
                    $options.append($newAnswer);
                };
            };
        } else if (questionCount === 4) {
            for (m = 0; m < answerChoices.answers4.length; m++) {
                var arrayChoice = answerChoices.answers4[m];
                var $newAnswer = $("<p class='answer-choice'></p>").append(arrayChoice);
                if (correctAnswers.includes(arrayChoice)) {
                    $newAnswer.addClass("right-answer");
                    $options.append($newAnswer);
                } else {
                    $newAnswer.addClass("wrong-answer");
                    $options.append($newAnswer);
                };
            };
        } else if (questionCount === 5) {
            for (n = 0; n < answerChoices.answers5.length; n++) {
                var arrayChoice = answerChoices.answers5[n];
                var $newAnswer = $("<p class='answer-choice'></p>").append(arrayChoice);
                if (correctAnswers.includes(arrayChoice)) {
                    $newAnswer.addClass("right-answer");
                    $options.append($newAnswer);
                } else {
                    $newAnswer.addClass("wrong-answer");
                    $options.append($newAnswer);
                };
            };
        } else if (questionCount === 6) {
            for (p = 0; p < answerChoices.answers6.length; p++) {
                var arrayChoice = answerChoices.answers6[p];
                var $newAnswer = $("<p class='answer-choice'></p>").append(arrayChoice);
                if (correctAnswers.includes(arrayChoice)) {
                    $newAnswer.addClass("right-answer");
                    $options.append($newAnswer);
                } else {
                    $newAnswer.addClass("wrong-answer");
                    $options.append($newAnswer);
                };
            };
        } else if (questionCount === 7) {
            for (q = 0; q < answerChoices.answers7.length; q++) {
                var arrayChoice = answerChoices.answers7[q];
                var $newAnswer = $("<p class='answer-choice'></p>").append(arrayChoice);
                if (correctAnswers.includes(arrayChoice)) {
                    $newAnswer.addClass("right-answer");
                    $options.append($newAnswer);
                } else {
                    $newAnswer.addClass("wrong-answer");
                    $options.append($newAnswer);
                };
            };
        } else if (questionCount === 8) {
            for (r = 0; r < answerChoices.answers8.length; r++) {
                var arrayChoice = answerChoices.answers8[r];
                var $newAnswer = $("<p class='answer-choice'></p>").append(arrayChoice);
                if (correctAnswers.includes(arrayChoice)) {
                    $newAnswer.addClass("right-answer");
                    $options.append($newAnswer);
                } else {
                    $newAnswer.addClass("wrong-answer");
                    $options.append($newAnswer);
                };
            };
        } else if (questionCount === 9) {
            for (s = 0; s < answerChoices.answers9.length; s++) {
                var arrayChoice = answerChoices.answers9[s];
                var $newAnswer = $("<p class='answer-choice'></p>").append(arrayChoice);
                if (correctAnswers.includes(arrayChoice)) {
                    $newAnswer.addClass("right-answer");
                    $options.append($newAnswer);
                } else {
                    $newAnswer.addClass("wrong-answer");
                    $options.append($newAnswer);
                }
            }
        } else {
            // this will be the end of the game
            // display players results
            stopTime();
            $("#solution").hide();
            $("#question").hide();
            $("#options").hide();
            $("#endResults").show();
            $("#correctDisplay").append(correct);
            $("#incorrectDisplay").append(incorrect);
            $("#unansweredDisplay").append(unanswered);

        }
        
        
};


// user presses start to begin the game
// time remaining displays with a timer that counts down (only applies to the one question)
// first question appears with 4 options
$(document).on("click", "#start", function() {
    $("#start").hide();
    getNextQuestion();
    //startTime();
    //$options.show(1000);
    //$("#question").show(1000);
    //$("#question").text(questions[0]);
    //for (i = 0; i < answerChoices.answers0.length; i++) {
        //var arrayChoice = answerChoices.answers0[i]
        //var $newAnswer = $("<p class='answer-choice'></p>").append(arrayChoice);
        //if (correctAnswers.includes(arrayChoice)) {
            //$newAnswer.addClass("right-answer");
            //$options.append($newAnswer);
        //} else {
            //$newAnswer.addClass("wrong-answer");
            //$options.append($newAnswer);
        //}
    //}
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
        //var answerNum = questionCount;
        $("#solution").show();
        $("#result").text("Out of time!");
        $("#correct-answer-display").text("The correct answer was: " + correctAnswers[questionCount]);
        // display image relating to answer
        $("#result-image").attr("src", resultImages[questionCount]);
        questionCount++;
        // after a set amount of time (5-10 seconds) display the next question with new timer with no user input
        setTimeout(getNextQuestion, 5000);
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
        $("#result-image").attr("src", resultImages[questionCount]);
        questionCount++;
        // after a set amount of time (5-10 seconds) display the next question with new timer with no user input
        setTimeout(getNextQuestion, 5000);
    } else if ($(this).hasClass("wrong-answer")){
        $options.empty();
        $("#question").empty();
        stopTime();
        incorrect++;
        //var answerNum = questionCount;
        $("#solution").show();
        $("#result").text("Nope!")
        $("#correct-answer-display").text("The correct answer was: " + correctAnswers[questionCount]);
        // display image relating to question
        $("#result-image").attr("src", resultImages[questionCount]);
        questionCount++;
        // after a set amount of time (5-10 seconds) display the next question with new timer with no user input
        setTimeout(getNextQuestion, 5000);
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





    
