// create a function that returns an array of it's digits, e.g 2342 should return [2,3,4,2]

// create a function that returns an array of it's digits, e.g 2342 should return [2,3,4,2]

const numbers = 2342;

const seperated = String(numbers)
  .split('')
  .map(str => Number(str));

console.log(seperated);
