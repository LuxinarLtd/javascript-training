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

// Improved

const person2 = {
  firstName: "Joe",
  lastName: "Bloggs",
  age: 30,
  addresses: [
    { houseNumber: 10, street: 'High Street', city: 'Manchester', postCode: 'M1 AVH' },
    { houseNumber: 96, street: 'West Terrace', city: 'Leeds', postCode: 'LS9 4PK' },
    { houseNumber: 50, street: 'Meadow Road', city: 'Hull', postCode: 'HU13 0DG' }
  ]
};
