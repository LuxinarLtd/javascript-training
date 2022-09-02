// return the object with the firstName "Jacob"

const people = [
  { firstName: "Susan", age: 14 },
  { firstName: "Daniel", age: 16 },
  { firstName: "Bruno", age: 56 },
  { firstName: "Jacob", age: 15 },
  { firstName: "Sam", age: 64 },
  { firstName: "Dave", age: 56 },
  { firstName: "Neils", age: 65 }
];

const person = people.filter(arr => {
  return arr.firstName === "Jacob"
});

console.log(person);

// Improved

const person2 = people.find(arr => arr.firstName === "Jacob");

console.log(person2);
