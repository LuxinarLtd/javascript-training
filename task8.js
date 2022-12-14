// console each name saying i.e. 'Lewis well done!'

const itTeam = ['Chris', 'Lewis', 'Ian', 'Aimee'];
let count = 0;

for (let i = 0; i < itTeam.length; i++) {
  console.log(`${itTeam[count]} well done!`);
  count++;
}

// Improved

for (let i = 0; i < itTeam.length; i++) {
  console.log(`${itTeam[i]} well done!`);
}

itTeam.map(name => console.log(`${name} well done!`));