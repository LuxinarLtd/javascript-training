// create a button that changes the web pages background colour to a random colour using RGB. This will also display the RGB colour code.

const btn = document.createElement('button');
const message = document.createElement('h1');
const container = document.getElementById('container');

container.appendChild(btn);
container.appendChild(message);

btn.style.width = '100px';
btn.style.height = '50px';
btn.textContent = 'Click here';

btn.addEventListener('click', () => {
  const randomRange = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
  const randomR = randomRange(0, 255);
  const randomG = randomRange(0, 255);
  const randomB = randomRange(0, 255);
  const RGB = `rgb(${randomR}, ${randomG}, ${randomB})`;

  document.body.style.backgroundColor = RGB
  message.textContent = RGB;
});
