// Increase each number in the array by 2

const numbers = [22, 42, 17, 2, 7, 88];

const higherNumbers = numbers.map(number => number + 2);

console.log(higherNumbers);

// alternative

for (let i = 0; i < numbers.length; i++) {
  numbers[i] += 2;
}

console.log(numbers);