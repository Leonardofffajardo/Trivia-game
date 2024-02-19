var questions = [
    {
        question: "Which big cat is known for its distinctive black mane?",
        options: ["Lion", "Tiger", "Leopard", "Jaguar"],
        answer: "Lion"
    },
    {
        question: "Which animal is the largest primate in the world?",
        options: ["Gorilla", "Orangutan", "Chimpanzee", "Human"],
        answer: "Gorilla"
    },
    {
        question: "What is the fastest land animal?",
        options: ["Cheetah", "Lion", "Gazelle", "Leopard"],
        answer: "Cheetah"
    },
    {
        question: "What is the only continent where giraffes live in the wild?",
        options: ["Africa", "Asia", "South America", "Australia"],
        answer: "Africa"
    },
    {
        question: "Which animal is known as the 'King of the Jungle'?",
        options: ["Lion", "Tiger", "Gorilla", "Elephant"],
        answer: "Lion"
    }
];

var currentQuestionIndex = 0;
var score = 0;
var answerElement = document.getElementById("answer");

function displayQuestion() {
    var questionElement = document.getElementById("question");
    var optionsElement = document.getElementById("options");

    questionElement.textContent = questions[currentQuestionIndex].question;
    optionsElement.innerHTML = "";

    questions[currentQuestionIndex].options.forEach(function (option) {
        var button = document.createElement("button");
        button.textContent = option;
        button.onclick = function () {
            checkAnswer(option);
        };
        optionsElement.appendChild(button);
    });
}

function checkAnswer(selectedOption) {
    var options = document.querySelectorAll("#options button");
    options.forEach(function(option) {
        option.disabled = true;
    });

    if (selectedOption === questions[currentQuestionIndex].answer) {
        score++;
        answerElement.textContent = "Correct!";
    } else {
        answerElement.textContent = "Incorrect!";
    }

    options.forEach(function(option) {
        if (option.textContent === questions[currentQuestionIndex].answer) {
            option.classList.add("selected");
        }
    });
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        displayQuestion();
        answerElement.textContent = "";
    } else {
        showResult();
    }
}

function showResult() {
    var container = document.querySelector(".container");
    container.innerHTML = "";
    
    var resultMessage = document.createElement("p");
    resultMessage.textContent = "You scored " + score + " out of " + questions.length + "!";
    container.appendChild(resultMessage);

    var restartButton = document.getElementById("restartButton");
    restartButton.style.display = "block";
}

function restartGame() {
    currentQuestionIndex = 0;
    score = 0;
    displayQuestion();
    var restartButton = document.getElementById("restartButton");
    restartButton.style.display = "none";
}
