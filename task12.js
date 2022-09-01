// return the youngest and the oldest in a new array

const people = [
  { firstName: "Susan", age: 14 },
  { firstName: "Daniel", age: 16 },
  { firstName: "Bruno", age: 56 },
  { firstName: "Jacob", age: 15 },
  { firstName: "Sam", age: 64 },
  { firstName: "Dave", age: 56 },
  { firstName: "Neils", age: 65 }
];

const youngest = people.reduce((arr, person) => {
  return arr.age < person.age ? arr : person
});

const oldest = people.reduce((arr, person) => {
  return arr.age > person.age ? arr : person
});

const range = people.reduce(person => {
  return [youngest, oldest]
});

console.log(range);
