// Create a function that prints out a full name by entering the arguments first name and last name

const fullName = (firstName, lastName) => {
  return firstName + lastName;
};

console.log(fullName('Emily ', 'Doe'));

// Imporoved

const name = (firstName, lastName) => `${firstName} ${lastName}`;

console.log(name('Jane', 'Doe'));
