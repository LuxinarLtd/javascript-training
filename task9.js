// loop through the array and add a new field called 'score' and set its value to zero

const users = [
  {
    name: 'Lewis',
    gender: 'male',
    active: true
  },
  {
    name: 'Dennis',
    gender: 'male',
    active: false
  },
  {
    name: 'Aimee',
    gender: 'female',
    active: true
  }
]

let score = 0;

for (let i = 0; i < users.length; i++) {
  console.log(users[i])
};