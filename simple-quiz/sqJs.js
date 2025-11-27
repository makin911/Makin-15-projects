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
let score = 0;

let btnStart = document.getElementById('start');
let btnNext = document.getElementById('next');
btnStart.addEventListener('click', (event) => {
  btnNext.classList.remove('hide');
  btnNext.classList.toggle('show');

})

currentIndex = 0;

function handleClick() {
  if (currentIndex >= 4) {
    alert(`its over you got ${score}points of 4 points`);
    currentIndex = 0;
    score = 0;
  }

  let answers = document.getElementById('answers');
  answers.innerText = "";

  let questionBtn = document.getElementById('question');
  let myAnswers = questions[currentIndex].answers;
  questionBtn.textContent = questions[currentIndex].question;
  myAnswers.forEach(element => {
    let newButton = document.createElement('BUTTON')
    newButton.textContent = element.text
    newButton.title = element.correct;
    newButton.classList.add('btn')
    answers.appendChild(newButton)
    // console.log(newButton.title);

  })
  currentIndex += 1;

}

let answers = document.getElementById('answers');
answers.addEventListener('click', (element) => {
  // console.log(element.target.disabled);
  let text = element.target.title;
  if (text === "true") {
    element.target.style.backgroundColor = "green";
    score += 1;
  } else {
    element.target.style.backgroundColor = "yellow";
  }
  handleEnable();
})
function handleEnable() {
  let answers = document.querySelectorAll('.btn');
  answers.forEach(element => {
    element.disabled=true;
    
  });
  
}


