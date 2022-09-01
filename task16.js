// print the numbers that are divisible by 5 from the list below

const numbers = [10, 20, 33, 46, 55, 72];

const factor5 = numbers.filter(number => {
  return number % 5 === 0;
});

console.log(factor5);