// start page with trivia game title and a start button
// game title is constant
$(document).ready(function() {

    $("#options").hide();
    $("#solution").hide();
    $("#question").hide();
    $("#endResults").hide();


// set of questions and answers
var questions = [{
    question: "Which state is the only one in the United States without a national park?",
    answers: ["Missouri", "Ohio", "Delaware", "Kansas"],
    correctAnswer: "Delaware",
    image: "assets/images/delaware.jpg"
}, {
    question: "Which is the largest of all the National Parks?", 
    answers: ["Denali National Park and Preserve", "Wrangell-St. Elias National Park and Preserve", "Everglades National Park", "Grand Canyon National Park"],
    correctAnswer: "Wrangell-St. Elias National Park and Preserve",
    image: "assets/images/wrangell.jpg"
}, {
    question: "Which waterfall is the tallest in Yosemite National Park?", 
    answers: ["Sentinal Falls", "Bridalveil Fall", "Ribbon Fall", "Yosemite Falls"],
    correctAnswer: "Yosemite Falls",
    image: "assets/images/yosemite-falls.jpg"
}, {
    question: "Which mountain has the most glaciated peak in the contiguous United States?",
    answers: ["Mount Elbert", "Mount Rainier", "Mount Shasta", "Grand Teton"],
    correctAnswer: "Mount Rainier",
    image: "assets/images/mount-rainier.jpg"
}, {
    question: "Which two states are tied for having the most national parks?", 
    answers: ["California and Alaska", "Utah and Arizona", "Washington and Florida", "Colorado and Alaska"],
    correctAnswer: "California and Alaska",
    image: "assets/images/sequoia.jpg"
}, {
    question: "Which national park is home to the nation's deepest cave, at 1,593 ft deep?",
    answers: ["Wind Cave National Park", "Mammoth Cave National Park", "Oregon Caves National Monument", "Carlsbad Caverns National Park"],
    correctAnswer: "Carlsbad Caverns National Park", 
    image: "assets/images/carlsbad-cavern.jpg"
}, {
    question: "Which is the deepest lake in the United States?", 
    answers: ["Lake Tahoe", "Crater Lake", "Lake Superior", "Lake Chelan"],
    correctAnswer: "Crater Lake",
    image: "assets/images/crater-lake.jpg"
}, {
    question: "Which super volcano is responsible for three of the world's biggest volcano eruptions?",
    answers: ["The Long Valley Caldera", "Mount Aniakchak", "Valles Caldera", "The Yellowstone Caldera"],
    correctAnswer: "The Yellowstone Caldera", 
    image: "assets/images/yellowstone-caldera.jpeg"
}, {
    question: "Which national park has the lowest elevation in the United States, at 282 feet below sea level?", 
    answers: ["Everglades National Park", "Death Valley National Park", "Kenai Fjords National Park", "Glacier Bay National Park and Preserve"],
    correctAnswer: "Death Valley National Park",
    image: "assets/images/death-valley.jpg"
}, {
    question: "Which was the world's first national park?",
    answers: ["Yellowstone National Park", "Mesa Verde", "Sequoia National Park", "Yosemite National Park"],
    correctAnswer: "Yellowstone National Park",
    image: "assets/images/yellowstone-national-park.jpg"
}]

var timer;

var triviaGame = {
    questions: questions,
    questionCount: 0,
    counter: 30,
    correct: 0,
    incorrect: 0,
    unanswered: 0,

    countdown: function() {
        triviaGame.counter--;
        $("#time-count").text("Time Remaining: " + triviaGame.counter);
        if (triviaGame.counter === 0) {
            triviaGame.timesUp();
        }
    },

    getQuestion: function() {
        timer = setInterval(triviaGame.countdown, 1000);
        console.log(triviaGame.questionCount);
        $(".start-section").hide();
        $("#question").show();
        $("#question").text(questions[this.questionCount].question);
        $("#options").show();
        for (i = 0; i < questions[this.questionCount].answers.length; i++) {
            $("#options").append("<button class='answer-choice btn text-center' id='button' data-name='" + questions[this.questionCount].answers[i]
            + "'>" + questions[this.questionCount].answers[i] + "</button>");
        }
    },

    nextQuestion: function() {
        $("#correct-answer-display").empty();
        $("#result-image").empty();
        $("#solution").hide();
        $("#options").empty();
        triviaGame.counter = 30;
        $("#time-count").text("Time Remaining: " + triviaGame.counter);
        triviaGame.questionCount++;
        triviaGame.getQuestion();
    },

    timesUp: function() {
        clearInterval(timer);
        triviaGame.unanswered++
        $("#time-count").text("Time Remaining: " + triviaGame.counter);
        $("#question").hide();
        $("#options").hide();
        $("#solution").show();
        $("#result").text("Out of time!");
        $("#correct-answer-display").text("The correct answer was " + questions[this.questionCount].correctAnswer);
        // display image relating to answer
        $("#result-image").attr("src", questions[this.questionCount].image);

        if (triviaGame.questionCount === questions.length - 1) {
            setTimeout(triviaGame.results, 3 * 1000)
        }
        else {
            setTimeout(triviaGame.nextQuestion, 3 * 1000)
        }
    },

    results: function() {
        clearInterval(timer);
        $("#options").hide();
        $("#solution").hide();
        $("#question").hide();
        $("#time-count").hide();
        $("#endResults").show();
        $("#correctDisplay").text("Correct Answers: " + triviaGame.correct);
        $("#incorrectDisplay").text("Incorrect Answers: " + triviaGame.incorrect);
        $("#unansweredDisplay").text("Unanswered: " + triviaGame.unanswered);
        $("#endResults").append("<br><button id='restart'>Restart?</button>");
    },

    clicked: function(event) {
        clearInterval(timer);
        if ($(event.target).attr("data-name") === questions[this.questionCount].correctAnswer) {
            this.answeredCorrect();
        }
        else {
            this.answeredIncorrect();
        }
    },

    answeredIncorrect: function() {
        triviaGame.incorrect++
        clearInterval(timer);
        $("#question").hide();
        $("#options").hide();
        $("#solution").show();
        $("#result").text("Wrong answer!");
        $("#correct-answer-display").text("The correct answer was " + questions[triviaGame.questionCount].correctAnswer);
        $("#result-image").attr("src", questions[triviaGame.questionCount].image);

        if (triviaGame.questionCount === questions.length - 1) {
            setTimeout(triviaGame.results, 3 * 1000)
        }
        else {
            setTimeout(triviaGame.nextQuestion, 3 * 1000)
        }
    },

    answeredCorrect: function() {
        triviaGame.correct++
        clearInterval(timer);
        $("#question").hide();
        $("#options").hide();
        $("#solution").show();
        $("#result").text("Correct!");
        $("#result-image").attr("src", questions[triviaGame.questionCount].image);

        if (triviaGame.questionCount === questions.length - 1) {
            setTimeout(triviaGame.results, 3 * 1000)
        }
        else {
            setTimeout(triviaGame.nextQuestion, 3 * 1000)
        }
    },

    reset: function() {
        this.questionCount = 0;
        this.counter = 30;
        this.correct = 0;
        this.incorrect = 0;
        this.unanswered = 0;
        $("#options").hide();
        $("#options").empty();
        $("#solution").hide();
        $("#question").hide();
        $("#endResults").hide();
        this.getQuestion();
    }
}

$(document).on("click", "#start", function() {
    triviaGame.getQuestion();
})

$(document).on("click", ".answer-choice", function(event) {
    triviaGame.clicked(event)
})

$(document).on("click", "#restart", function() {
    triviaGame.reset();
})

})