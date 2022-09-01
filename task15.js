// return the object below and include a property that lists all of their addresses they have lived at

const person = {
  firstName: "Joe",
  lastName: "Bloggs",
  age: 30,
  addresses: []
};

const homeAddresses = [
  '10 High Street, Manchester, M1 AVH',
  '96 West Terrace, Leeds, LS9 4PK',
  '50 Meadow Road, Hull, HU13 0DG'
];

person.addresses.push(homeAddresses);

console.log(person);