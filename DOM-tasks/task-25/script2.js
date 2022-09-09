/* create a quiz with 5 questions and 4 options for each question. 
The user clicks on the option they think is the correct answer and then moves the user onto the next question. 
At the end they will get a final score. */

// get main div container from HTML
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

const createAddEventListeners = (questionButtons, answer, currentQuestion, nextQuestion, options = {}) => {
  for (let i = 0; i < questionButtons.length; i++) {
    questionButtons[i].addEventListener('click', (e) => {
      if (questionButtons[i] === answer) {
        score++;
      }

      currentQuestion.style.display = 'none';

      if (options.lastQuestion) {
        const results = document.createElement('p');
    
        results.textContent = `You scored ${score} out of 5`;
        mainContainer.appendChild(results);
      } else {
        nextQuestion.style.display = 'block';
      }
    });
  }
}

// submitted answer to question 1 when button clicked
createAddEventListeners(q1Btns, answerQ1, question1, question2);

// submitted answer to question 2 when button clicked
createAddEventListeners(q2Btns, answerQ2, question2, question3);

// submitted answer to question 3 when button clicked
createAddEventListeners(q3Btns, answerQ3, question3, question4);

// submitted answer to question 4 when button clicked
createAddEventListeners(q4Btns, answerQ4, question4, question5);

// submitted answer to question 5 when button clicked
createAddEventListeners(q5Btns, answerQ5, question5, null, { lastQuestion: true });

