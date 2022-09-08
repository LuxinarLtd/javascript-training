/* create a quiz with 5 questions and 4 options for each question. 
The user clicks on the option they think is the correct answer and then moves the user onto the next question. 
At the end they will get a final score. */

const mainContainer = document.querySelector('.main-container');

// get questions from HTML
const question1 = document.querySelector('.question1');
const question2 = document.querySelector('.question2');
const question3 = document.querySelector('.question3');
const question4 = document.querySelector('.question4');
const question5 = document.querySelector('.question5');

// get buttons from HTML
const answerQ1 = document.getElementById('q1a2');
const answerQ2 = document.getElementById('q2a3');
const answerQ3 = document.getElementById('q3a3');
const answerQ4 = document.getElementById('q4a1');
const answerQ5 = document.getElementById('q5a4');

const option1a = document.getElementById('q1a1');
const option1b = document.getElementById('q1a3');
const option1c = document.getElementById('q1a4');

const option2a = document.getElementById('q2a1');
const option2b = document.getElementById('q2a2');
const option2c = document.getElementById('q2a4');

const option3a = document.getElementById('q3a1');
const option3b = document.getElementById('q3a2');
const option3c = document.getElementById('q3a4');

const option4a = document.getElementById('q4a2');
const option4b = document.getElementById('q4a3');
const option4c = document.getElementById('q4a4');

const option5a = document.getElementById('q5a1');
const option5b = document.getElementById('q5a2');
const option5c = document.getElementById('q5a3');

// buttons grouped
const allBtns = [
  answerQ1,
  answerQ2,
  answerQ3,
  answerQ4,
  answerQ5,
  option1a,
  option1b,
  option1c,
  option2a,
  option2b,
  option2c,
  option3a,
  option3b,
  option3c,
  option4a,
  option4b,
  option4c,
  option5a,
  option5b,
  option5c
];

const q1Btns = [
  answerQ1,
  option1a,
  option1b,
  option1c
];

const q2Btns = [
  answerQ2,
  option2a,
  option2b,
  option2c
];

const q3Btns = [
  answerQ3,
  option3a,
  option3b,
  option3c
];

const q4Btns = [
  answerQ4,
  option4a,
  option4b,
  option4c
];

const q5Btns = [
  answerQ5,
  option5a,
  option5b,
  option5c
];

// set score to 0
let score = 0;

// submitted answer to each question
for (let i = 0; i < q1Btns.length; i++) {
  q1Btns[i].addEventListener('click', (e) => {
    if (q1Btns[i] === answerQ1) {
      score++;
    }
    question1.style.display = 'none';
    question2.style.display = 'block';
  });
}

for (let i = 0; i < q2Btns.length; i++) {
  q2Btns[i].addEventListener('click', (e) => {
    if (q2Btns[i] === answerQ2) {
      score++;
    }
    question2.style.display = 'none';
    question3.style.display = 'block';
  });
}

for (let i = 0; i < q3Btns.length; i++) {
  q3Btns[i].addEventListener('click', (e) => {
    if (q3Btns[i] === answerQ3) {
      score++;
    }
    question3.style.display = 'none';
    question4.style.display = 'block';
  });
}

for (let i = 0; i < q4Btns.length; i++) {
  q4Btns[i].addEventListener('click', (e) => {
    if (q4Btns[i] === answerQ4) {
      score++;
    }
    question4.style.display = 'none';
    question5.style.display = 'block';
  });
}

for (let i = 0; i < q5Btns.length; i++) {
  q5Btns[i].addEventListener('click', (e) => {
    if (q5Btns[i] === answerQ5) {
      score++;
    }
    question5.style.display = 'none';
    const results = document.createElement('p');
    mainContainer.appendChild(results);
    results.textContent = `You scored ${score} out of 5`;
  });
}
