// calculate and return the average age of employees

const employees = [
  { name: "Susan", age: 14, salary: 100 },
  { name: "Daniel", age: 16, salary: 120 },
  { name: "Bruno", age: 56, salary: 400 },
  { name: "Jacob", age: 15, salary: 110 },
  { name: "Sam", age: 64, salary: 500 },
  { name: "Dave", age: 56, salary: 380 },
  { name: "Neils", age: 65, salary: 540 }
];

const age = employees.map(number => number.age);

const average = age.reduce((a, b) => a + b, 0) / employees.length;

console.log(average);
