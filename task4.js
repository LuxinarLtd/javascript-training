// create a function that says if the number is greater than, less than or equal to the number 10

const number = (inputNo => {
  if (inputNo > 10) {
    console.log("The number is more than 10")
  };
  if (inputNo < 10) {
    console.log("The number is less than 10")
  };
  if (inputNo === 10) {
    console.log("The number is equal to 10")
  };
  return inputNo
});

// console.log(number(5));

// Improved

const number2 = (inputNo => {
  if (inputNo > 10) {
    console.log("The number is more than 10")
  } else if (inputNo < 10) {
    console.log("The number is less than 10")
  } else if (inputNo === 10) {
    console.log("The number is equal to 10")
  }
});

number2(5);

const number3 = (inputNo => {
  if (inputNo > 10) return "The number is more than 10";
  if (inputNo < 10) return "The number is less than 10";
  if (inputNo === 10) return "The number is equal to 10";
});

console.log(number3(5));