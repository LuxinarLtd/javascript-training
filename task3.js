// create a function with 2 arguments firstName and lastName that returns an object with the keys firstName & lastName

const user = (firstName, lastName) => {
  const fullName = {
    firstName: firstName,
    lastName: lastName
  };
  return fullName;
};

console.log(user('Jane', 'Doe'));

// Improved

const fullName = (firstName, lastName) => ({firstName, lastName});

console.log(fullName('Jane', 'Doe'));