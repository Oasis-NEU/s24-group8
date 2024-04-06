const questions = [
    {
        question: "How many shoes do you own?",
        answers: [
            { text: "1-2 Pairs", correct: false},
            { text: "3-4 Pairs", correct: true},
            { text: "4+ Pairs", correct: true},
        ]
    },
    {
        question: "Are you a tidy person?",
        answers: [
            { text: "Yes!", correct: true},
            { text: "No!", correct: false},
        ]

    },
    {
        question: "Do you prefer thrifting or going to the mall?",
        answers: [
            { text: "Thrift", correct: false},
            { text: "Mall", correct: true},
            { text: "Both", correct: true},
        ]

    },
    {
        question: "What is your favorite color?",
        answers: [
            { text: "Black", correct: false},
            { text: "Sage Green", correct: true},
            { text: "Deep Red", correct: false},
            { text: "Beige", correct: true},

        ]

    },
    {
        question: "How would you decorate your room?",
        answers: [
            { text: "Room 1", correct: true},
            { text: "Room 2", correct: false},
            { text: "Room 3", correct: false},
            { text: "Room 4", correct: true},
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons  = document.getElementById("answer-buttons");
const nextButton  = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn"); 
        answerButton.appendChild(button);

        if(answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListerner("click", selectAnswer);
    
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataseet.correct === "true";
    if(isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }

    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = 'You scored ${score} out of $questions.length}!';
    nextButton.innerHTML = "play again";
    nextButton.style.display = "block";

}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListerner("click", ()=>{
    if(currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
});

startQuiz();




