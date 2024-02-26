const questions = [
    {
        question: "What is the capital of France?",
        options: ["Paris", "London", "Berlin", "Madrid"],
        answer: "Paris"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Venus", "Jupiter"],
        answer: "Mars"
    },
    {
        question: "What is the chemical symbol for water?",
        options: ["O", "W", "H2O", "WA"],
        answer: "H2O"
    }
];

let currentQuestion = 0;
let score = 0;

function displayQuestion() {
    const questionElement = document.getElementById('question');
    const optionsElement = document.getElementById('options');
    
    const question = questions[currentQuestion];
    questionElement.textContent = question.question;
    
    optionsElement.innerHTML = '';
    question.options.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option;
        button.onclick = () => checkAnswer(option);
        optionsElement.appendChild(button);
    });
}

function checkAnswer(selectedOption) {
    const question = questions[currentQuestion];
    if (selectedOption === question.answer) {
        score++;
        document.getElementById('result').textContent = "Correct!";
    } else {
        document.getElementById('result').textContent = "Incorrect!";
    }
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        displayQuestion();
        document.getElementById('result').textContent = '';
    } else {
        endQuiz();
    }
}

function endQuiz() {
    const container = document.querySelector('.container');
    container.innerHTML = `
        <h2>Quiz Completed!</h2>
        <p>Your Score: ${score}/${questions.length}</p>
        <button onclick="restartQuiz()">Restart Quiz</button>
    `;
}

function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    displayQuestion();
}

// Display the first question when the page loads
window.onload = displayQuestion;
