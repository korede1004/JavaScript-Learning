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