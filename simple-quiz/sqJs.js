const questions = [
  {
    question: "which is largest animal  in world?",
    answers: [
      { text: "shark", correct: false },
      { text: "blue whale", correct: true },
      { text: "elephent", correct: false },
      { text: "girrafe", correct: false }
    ]
  },
  {
    question: "which is smallet country in world?",
    answers: [
      { text: "vatican city", correct: true },
      { text: "bhutan", correct: false },
      { text: "nepal", correct: false },
      { text: "shri lanka", correct: false }
    ]
  },
  {
    question: "which is largest desert  in world?",
    answers: [
      { text: "kalahari", correct: false },
      { text: "gobi", correct: false },
      { text: "sahara", correct: false },
      { text: "antarctica", correct: true }
    ]
  },
  {
    question: "which is smallest continent in world?",
    answers: [
      { text: "asia", correct: false },
      { text: "australia", correct: true },
      { text: "arcric", correct: false },
      { text: "africa", correct: false }
    ]
  }
];

//starting quiz

let btnStart = document.getElementById('start');
let btnNext = document.getElementById('next');
btnStart.addEventListener('click', (event) => {
  btnNext.classList.remove('hide');
  btnNext.classList.toggle('show');

})

currentIndex = 0;

function handleClick() {
  if(currentIndex>=4){
    alert("its over");
    currentIndex=0;
  }

  let answer = document.getElementById('answers');
  answer.innerText = "";

  let questionBtn = document.getElementById('question');
  let myAnswers = questions[currentIndex].answers;
  questionBtn.textContent = questions[currentIndex].question;
  myAnswers.forEach(element => {
    let newButton = document.createElement('BUTTON')
    newButton.textContent = element.text
    newButton.classList.add('btn')
    answer.appendChild(newButton)
  })
  currentIndex += 1;
  
}


