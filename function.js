// Function
// A function is something that can be used to bring multiple statement together, just like a formula that is needed to repeat a process

// Syntax
// Function functionName (Parameters){
// An action the function is carrying out
// }

// function call
// This is the process using the formula to process the desired result

// Examples
// Write a function to add two numbers

// Solution
function add(num1, num2) {
    console.log(num1 * num2);
    return num1 * num2;
  }
  //  Calling the function
  let result = add(5, 7);
  console.log(result);
  
  let ans = add(2, 5);
  console.log(ans);
  
  // Write a function to calculate the radius of a circle
  function calculateArea(radius) {
    let any = Math.PI * radius ** 2;
    return any;
  }
  //  Calling the function
  let results = calculateArea(3);
  console.log(results);
  
  
  
  // Example
  // Write a function called concatenateStrings that takes two strings as parameters and returns the concatenated string.
  function concatenateStrings(string1, string2) {
    console.log(string1 + string2);
    return string1 + string2;
  }
  result = concatenateStrings("Hello, ", "World!");
  console.log(result);
  
  
  
  //  Example
  //  Write a function called celsiusToFahrenheit that takes a temperature in Celsius as a parameter and returns the equivalent temperature in Fahrenheit. Use the formula:  F= 9/5C + 32
  function celsiusToFahrenheit(temp) {
    let F = (9 / 5) * temp + 32;
    //  console.log(F)
    return F;
  }
  let temperature = 20;
  let Fahrenheit = celsiusToFahrenheit(temperature);
  console.log(
    temperature +
      " degree Celsius is equal to " +
      Fahrenheit +
      " degree Fahrenheit"
  );
  // Alternatively
  function celsiusToFahrenheit(Celsius) {
    let F = (9 / 5) * Celsius + 32;
    console.log(F);
    return F;
  }
  
  let temp = 20;
  console.log(celsiusToFahrenheit(temp));
  //   or
  console.log(celsiusToFahrenheit(20));

  
// Example
 //Write a function called isPositive that takes a number as a parameter and returns true if the number is positive and false if it's zero or negative.

function isPositive(number) {
  return number > 0;
}

let num = 5;
let answer = isPositive(num);
console.log( answer); 


// Example
//Write a function called calculate that takes two numbers and an operator as parameters. The function should perform the specified arithmetic operation (addition, subtraction, multiplication, or division) and return the result.


function calculate(num1, num2, operator) {
  if (operator === "+") {
    return num1 + num2;
  } else if (operator === "-") {
    return num1 - num2;
  } else if (operator === "*") {
    return num1 * num2;
  } else if (operator === "/") {
    if (num2 !== 0) {
      return num1 / num2;
    } else {
      return "Cannot divide by zero!";
    }
  } else {
    return "Invalid operator";
  }
}


// Example
// Write a function called isValidPassword that takes a password as a parameter. The function should return true if the password is at least 8 characters long and contains both uppercase and lowercase letters, and false otherwise.
function isValidPassword(password) {
  // Check if the password length is at least 8 characters
  if (password.length < 8) {
      return false;
  }

  // Check if the password contains at least one uppercase letter
  let hasUppercase = /[A-Z]/.test(password);

  // Check if the password contains at least one lowercase letter
  let hasLowercase = /[a-z]/.test(password);

  // Return true if both conditions are met, otherwise return false
  return hasUppercase && hasLowercase;
}

// Example usage:
let password1 = "StrongP@ss"; // Valid password
let password2 = "weak";      // Invalid password

console.log("Is password1 valid? " + isValidPassword(password1));
console.log("Is password2 valid? " + isValidPassword(password2));


// Example
// Write a function called isNumberBetween that takes three parameters: a number, a lower limit, and an upper limit. The function should return true if the number is between the lower and upper limits (inclusive) and false otherwise

function isNumberBetween(number, lowerLimit, upperLimit) {
  // Check if the number is greater than or equal to the lower limit
  // AND if the number is less than or equal to the upper limit
  if (number >= lowerLimit && number <= upperLimit) {
      // If both conditions are true, return true
      return true;
  } else {
      // If at least one condition is false, return false
      return false;
  }
}

// Example usage:
let numberToCheck = 15;
let lowerLimit = 10;
let upperLimit = 20;

// Check if the number is between the lower and upper limits
let answers = isNumberBetween(numberToCheck, lowerLimit, upperLimit);

// Display the result
console.log(`${numberToCheck} is between ${lowerLimit} and ${upperLimit}: ${answers}`);

