const questions =[
    {
        question: " What is my favorite food?",
        answers:[
            {text: "Rice", correct: false},
            {text: "Meat", correct: true},
            {text: "Potato", correct: false},
            {text: "Nothing", correct: false},
        ]
    },
{
    question: " What is my favorite color",
    answers:[
        {text: "Black", correct: false},
        {text: "white", correct: false},
        {text: "purple", correct: false},
        {text: "ALL", correct: true},
    ]
},
{
    question: " What do i do in my free time",
    answers:[
        {text: "playing football", correct: false},
        {text: "programming", correct: true},
        {text: "watching movie", correct: false},
        {text: "going out", correct: false},
    ]
},
{
    question: " How much do I have in my account?",
    answers: [
        {text: "0 euro", correct: false},
        {text: "1000 euro", correct: false},
        {text: "500 euro", correct: true},
        {text: "7000 euro", correct: false},
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
        score++;
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
function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!  prentage: ${(score * 100)/questions.length}%` ;

    nextButton.innerHTML =" play Again";
    nextButton.style.display = "block";

}
function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}
nextButton.addEventListener('click', ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})
startQuiz();