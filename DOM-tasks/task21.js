// create a button that generates a random number every time it is clicked and displays the number.

const btn = document.createElement('button');
const message = document.createElement('h1');
const container = document.getElementById('container');

container.appendChild(btn);
container.appendChild(message);

btn.style.width = '100px';
btn.style.height = '50px';
btn.textContent = 'Generate number';

btn.addEventListener('click', () => {
  const randomRange = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
  const randomNumber = randomRange(1, 50);

  message.textContent = `${randomNumber}`;
});
