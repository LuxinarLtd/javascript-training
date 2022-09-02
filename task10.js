// filter the array with people who have a higher score than 3 and console their names saying they have passed i.e. 'Lewis has Passed'

const users = [
  {
    name: 'Lewis',
    gender: 'male',
    score: 10
  },
  {
    name: 'Chris',
    gender: 'male',
    score: 7
  },
  {
    name: 'Aimee',
    gender: 'female',
    score: 4
  },
  {
    name: 'Ian',
    gender: 'female',
    score: 2
  }
]

const result = users.filter(user => {
  if (user.score > 3) {
    console.log(`${user.name} has Passed`);
  }
});

console.log(result);

// Improved

users.filter(user => user.score > 3).
      map(user => console.log(`${user.name} has Passed`));