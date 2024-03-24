
/*const questions = [
    {
        question: "What is your favorite color?",
        answers: [
            { text: "Answer1", correct: false},
            { text: "Answer2", correct: true},
            { text: "Answer3", correct: false},
            { text: "Answer4", correct: false},

        ]
    },
    {
        question: "What is your favorite color?",
        answers: [
            { text: "Answer1", correct: false},
            { text: "Answer2", correct: true},
            { text: "Answer3", correct: false},
            { text: "Answer4", correct: false},

        ]

    },
    {
        question: "What is your favorite color?",
        answers: [
            { text: "Answer1", correct: false},
            { text: "Answer2", correct: true},
            { text: "Answer3", correct: false},
            { text: "Answer4", correct: false},

        ]

    },
    {
        question: "What is your favorite color?",
        answers: [
            { text: "Answer1", correct: false},
            { text: "Answer2", correct: true},
            { text: "Answer3", correct: false},
            { text: "Answer4", correct: false},

        ]

    }
];

const questionElement = document.getElementById("question");
const answerButton  = document.getElementById("answer-buttons");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    showQuestion();
}

function showQuestion() {
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn"); 
        answerButton.appendChild(button);
    
    });
}

startQuiz();
*/