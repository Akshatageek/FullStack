/*
Week 1- task 1
JS quiz Arena-a Quiz app
expexted outcomes:
  1.Show one question at a time with clickable options,a progress line("Q3/25"),and a live score.
  2.After a click, turn the chosen option green or red, reveal the correct one , show the explanation.
  3.Include Next and restart buttons. At the end,show the final score and a rating message.
  4.Add a 30-second countdown per question. When it hits 0, auto-lock the question and reveal the answer.
  5.Add a"Review wrong answers screen at the end.
*/
const questions = [
    {
        question: "Which keyword is used to declare a variable in JavaScript?",
        options: ["int", "var", "string", "float"],
        answer: 1,
        explanation: "The var keyword declares a variable. JavaScript also supports let and const."
    },
    {
        question: "Which method displays a message in the browser console?",
        options: ["console.log()", "print()", "display()", "echo()"],
        answer: 0,
        explanation: "console.log() prints information to the browser's developer console."
    },
    {
        question: "Which keyword declares a block-scoped variable that can be reassigned?",
        options: ["const", "let", "static", "final"],
        answer: 1,
        explanation: "let declares a block-scoped variable whose value can be reassigned."
    },
    {
        question: "What is the output of typeof 'Hello'?",
        options: ["text", "char", "string", "object"],
        answer: 2,
        explanation: "The typeof operator returns 'string' for a string value."
    },
    {
        question: "Which symbol is used for strict equality?",
        options: ["=", "==", "===", "!="],
        answer: 2,
        explanation: "The === operator compares values without performing type conversion."
    },
    {
        question: "Which method adds an element to the end of an array?",
        options: ["pop()", "push()", "shift()", "unshift()"],
        answer: 1,
        explanation: "push() adds one or more elements to the end of an array."
    },
    {
        question: "Which function converts a JSON string into a JavaScript object?",
        options: ["JSON.stringify()", "JSON.parse()", "JSON.convert()", "JSON.object()"],
        answer: 1,
        explanation: "JSON.parse() converts a valid JSON string into a JavaScript value."
    },
    {
        question: "Which loop executes while a condition is true?",
        options: ["if", "switch", "while", "break"],
        answer: 2,
        explanation: "A while loop repeatedly executes its body while its condition is true."
    },
    {
        question: "Which keyword defines a function?",
        options: ["function", "method", "define", "func"],
        answer: 0,
        explanation: "The function keyword declares a function in JavaScript."
    },
    {
        question: "What does NaN stand for?",
        options: ["No assigned Number", "Not a Number", "New and Null", "Negative Number"],
        answer: 1,
        explanation: "NaN stands for Not a Number and represents an invalid numeric result."
    },
    {
        question: "Which method removes the last element of an array?",
        options: ["shift()", "pop()", "slice()", "spliceStart()"],
        answer: 1,
        explanation: "pop() removes and returns the last element of an array."
    },
    {
        question: "Which operator checks whether a value is not equal in value or type?",
        options: ["!=", "!==", "==", "==="],
        answer: 1,
        explanation: "The !== operator checks inequality without converting operand types."
    },
    {
        question: "Which value represents the absence of an assigned value?",
        options: ["undefined", "true", "1", "NaN"],
        answer: 0,
        explanation: "A declared variable that has not been assigned a value evaluates to undefined."
    },
    {
        question: "Which method selects an HTML element by its ID?",
        options: [
            "document.queryAll()",
            "document.getElementById()",
            "document.getClass()",
            "window.getElement()"
        ],
        answer: 1,
        explanation: "document.getElementById() finds an element by its unique ID."
    },
    {
        question: "Which array method creates a new array by transforming each element?",
        options: ["forEach()", "map()", "find()", "pop()"],
        answer: 1,
        explanation: "map() returns a new array containing the results of calling a function on each element."
    },
    {
        question: "Which method filters array elements based on a condition?",
        options: ["filter()", "join()", "push()", "reverse()"],
        answer: 0,
        explanation: "filter() returns a new array containing elements that pass the condition."
    },
    {
        question: "What does setTimeout() do?",
        options: [
            "Repeats a function forever",
            "Runs a function after a specified delay",
            "Stops all JavaScript",
            "Creates a loop"
        ],
        answer: 1,
        explanation: "setTimeout() schedules a callback to run after a specified delay."
    },
    {
        question: "What does setInterval() do?",
        options: [
            "Runs a function repeatedly at a specified interval",
            "Runs a function only once immediately",
            "Deletes a variable",
            "Stops a timer"
        ],
        answer: 0,
        explanation: "setInterval() repeatedly schedules a callback until the interval is cleared."
    },
    {
        question: "Which keyword creates a constant binding?",
        options: ["let", "var", "const", "constant"],
        answer: 2,
        explanation: "const creates a binding that cannot be reassigned, though referenced objects can still be modified."
    },
    {
        question: "Which operator returns the remainder after division?",
        options: ["/", "*", "%", "**"],
        answer: 2,
        explanation: "The % operator returns the remainder of a division operation."
    },
    {
        question: "Which value is a Boolean?",
        options: ['"true"', "0", "true", '"false"'],
        answer: 2,
        explanation: "true and false are Boolean values. Quoted versions are strings."
    },
    {
        question: "Which statement skips the current loop iteration?",
        options: ["stop", "exit", "continue", "return"],
        answer: 2,
        explanation: "continue skips the rest of the current iteration and proceeds to the next one."
    },
    {
        question: "Which method combines array elements into a string?",
        options: ["join()", "split()", "map()", "filter()"],
        answer: 0,
        explanation: "join() combines array elements into a string using an optional separator."
    },
    {
        question: "Which syntax creates an arrow function?",
        options: ["function => {}", "() => {}", "-> {}", "func() {}"],
        answer: 1,
        explanation: "An arrow function can be written as () => {}."
    },
    {
        question: "Which keyword handles errors with a catch block?",
        options: ["check", "error", "try", "test"],
        answer: 2,
        explanation: "A try block contains code that may throw an error; catch handles the error."
    }
];

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const progressElement = document.getElementById("progress");
const scoreElement = document.getElementById("score");
const timerElement = document.getElementById("timer");
const progressBar = document.getElementById("progress-bar");
const feedbackElement = document.getElementById("feedback");

const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");
const reviewScreen = document.getElementById("review-screen");

const nextButton = document.getElementById("next-btn");
const restartButton = document.getElementById("restart-btn");
const reviewButton = document.getElementById("review-btn");
const playAgainButton = document.getElementById("play-again-btn");
const reviewRestartButton = document.getElementById("review-restart-btn");

let currentQuestion = 0;
let score = 0;
let timeLeft = 30;
let countdown;
let questionLocked = false;
let wrongAnswers = [];

function startTimer() {
    clearInterval(countdown);

    timeLeft = 30;
    timerElement.textContent = `⏱ ${timeLeft}s`;
    timerElement.style.color = "#e67e22";

    countdown = setInterval(function () {
        timeLeft--;

        timerElement.textContent = `⏱ ${timeLeft}s`;

        if (timeLeft <= 10) {
            timerElement.style.color = "#dc3545";
        }

        if (timeLeft <= 0) {
            clearInterval(countdown);
            lockQuestion(true);
        }
    }, 1000);
}

function loadQuestion() {
    questionLocked = false;

    nextButton.disabled = true;
    feedbackElement.textContent = "";
    optionsElement.innerHTML = "";

    const q = questions[currentQuestion];

    questionElement.textContent = q.question;
    progressElement.textContent =
        `Q${currentQuestion + 1}/${questions.length}`;

    scoreElement.textContent = `Score: ${score}`;

    progressBar.style.width =
        `${(currentQuestion / questions.length) * 100}%`;

    q.options.forEach(function (option, index) {
        const button = document.createElement("button");

        button.textContent = option;
        button.className = "option";

        button.addEventListener("click", function () {
            selectAnswer(index);
        });

        optionsElement.appendChild(button);
    });

    startTimer();
}

function selectAnswer(selectedIndex) {
    if (questionLocked) return;

    questionLocked = true;
    clearInterval(countdown);

    const q = questions[currentQuestion];
    const buttons = optionsElement.querySelectorAll(".option");

    buttons.forEach(function (button, index) {
        button.disabled = true;

        if (index === q.answer) {
            button.classList.add("correct");
        }
    });

    if (selectedIndex === q.answer) {
        score++;

        feedbackElement.innerHTML =
            `<strong style="color:green">Correct! ✓</strong><br>
             ${q.explanation}`;
    } else {
        buttons[selectedIndex].classList.add("wrong");

        wrongAnswers.push({
            question: q.question,
            selected: q.options[selectedIndex],
            correct: q.options[q.answer],
            explanation: q.explanation,
            timedOut: false
        });

        feedbackElement.innerHTML =
            `<strong style="color:red">Incorrect! ✗</strong><br>
             Correct answer: ${q.options[q.answer]}<br>
             ${q.explanation}`;
    }

    scoreElement.textContent = `Score: ${score}`;
    nextButton.disabled = false;
}

function lockQuestion(timedOut) {
    if (questionLocked) return;

    questionLocked = true;

    const q = questions[currentQuestion];
    const buttons = optionsElement.querySelectorAll(".option");

    buttons.forEach(function (button, index) {
        button.disabled = true;

        if (index === q.answer) {
            button.classList.add("correct");
        }
    });

    wrongAnswers.push({
        question: q.question,
        selected: "No answer (time expired)",
        correct: q.options[q.answer],
        explanation: q.explanation,
        timedOut: timedOut
    });

    feedbackElement.innerHTML =
        `<strong style="color:red">Time's up! ⏰</strong><br>
         Correct answer: ${q.options[q.answer]}<br>
         ${q.explanation}`;

    nextButton.disabled = false;
}

function nextQuestion() {
    if (!questionLocked) return;

    clearInterval(countdown);

    currentQuestion++;

    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    clearInterval(countdown);

    quizScreen.classList.add("hidden");
    resultScreen.classList.remove("hidden");
    reviewScreen.classList.add("hidden");

    progressBar.style.width = "100%";

    document.getElementById("final-score").textContent =
        `${score} / ${questions.length}`;

    const percentage = (score / questions.length) * 100;
    let rating;

    if (percentage >= 90) {
        rating = "Excellent! 🏆 You are a JavaScript champion!";
    } else if (percentage >= 70) {
        rating = "Great job! 🌟 You know JavaScript well!";
    } else if (percentage >= 50) {
        rating = "Good effort! 👍 Keep practising!";
    } else {
        rating = "Keep learning! 💪 You will improve with practice!";
    }

    document.getElementById("rating").textContent = rating;
}

function showReview() {
    resultScreen.classList.add("hidden");
    reviewScreen.classList.remove("hidden");

    const reviewList = document.getElementById("review-list");
    reviewList.innerHTML = "";

    if (wrongAnswers.length === 0) {
        reviewList.innerHTML =
            "<p>Perfect score! You didn't get any questions wrong. 🎉</p>";
        return;
    }

    wrongAnswers.forEach(function (item, index) {
        const div = document.createElement("div");
        div.className = "review-item";

        const title = document.createElement("h3");
        title.textContent = `${index + 1}. ${item.question}`;

        const selected = document.createElement("p");
        selected.textContent = `Your answer: ${item.selected}`;

        const correct = document.createElement("p");
        correct.textContent = `Correct answer: ${item.correct}`;

        const explanation = document.createElement("p");
        explanation.textContent = `Explanation: ${item.explanation}`;

        div.append(title, selected, correct, explanation);
        reviewList.appendChild(div);
    });
}

function restartQuiz() {
    clearInterval(countdown);

    currentQuestion = 0;
    score = 0;
    timeLeft = 30;
    wrongAnswers = [];

    quizScreen.classList.remove("hidden");
    resultScreen.classList.add("hidden");
    reviewScreen.classList.add("hidden");

    loadQuestion();
}

nextButton.addEventListener("click", nextQuestion);
restartButton.addEventListener("click", restartQuiz);
reviewButton.addEventListener("click", showReview);
playAgainButton.addEventListener("click", restartQuiz);
reviewRestartButton.addEventListener("click", restartQuiz);

loadQuestion();
