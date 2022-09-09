/* create a quiz with 5 questions and 4 options for each question. 
The user clicks on the option they think is the correct answer and then moves the user onto the next question. 
At the end they will get a final score. */

// get main div container from HTML
const mainContainer = document.querySelector('.main-container');

// set score to 0
let score = 0;

const answers = [
  'Almonds',
  '50',
  '1945',
  '12',
  'Daffodil'
];

mainContainer.addEventListener('click', (e) => {
  if (e.target.tagName === 'BUTTON') {
    const currentQuestion = e.target.parentNode;
    const nextQuestion = currentQuestion.nextElementSibling;

    if (e.target.textContent === answers[0]) {
      score++;
    }

    answers.shift();

    currentQuestion.style.display = 'none';
    
    if (nextQuestion) {
      nextQuestion.style.display = 'block';
    } else {
      const results = document.createElement('p');
    
      results.textContent = `You scored ${score} out of 5`;
      mainContainer.appendChild(results);
    }
  }
});