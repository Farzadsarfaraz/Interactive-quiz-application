const questions =[
    {
        question: " which is larger in the world",
        answers:[
            {text: "shark", correct: false},
            {text: "fish", correct: true},
            {text: "donkey", correct: false},
            {text: "horse", correct: false},
        ]
    },
{
    question: " which is larger in the world",
    answers:[
        {text: "shark", correct: false},
        {text: "fish", correct: false},
        {text: "donkey", correct: false},
        {text: "horse", correct: true},
    ]
},
{
    question: " which is larger in the world",
    answers:[
        {text: "shark", correct: false},
        {text: "fish", correct: true},
        {text: "donkey", correct: false},
        {text: "horse", correct: false},
    ]
},
{
    question: " which is larger in the world",
    answers: [
        {text: "shark", correct: false},
        {text: "fish", correct: false},
        {text: "donkey", correct: true},
        {text: "horse", correct: false},
    ]
}
]
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "NEXT";
    showQuestion();
}

function showQuestion(){
    resetState()
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + "." + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectanswer);
    });

}


function resetState(){
    nextButton.style.display ="none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
};

function selectanswer(e){
    const selectBtn = e.target;
    const isCorrect = selectBtn.dataset.correct == "true";
    if(isCorrect){
        selectBtn.classList.add("correct");
    }else{
        selectBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button =>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}
startQuiz();