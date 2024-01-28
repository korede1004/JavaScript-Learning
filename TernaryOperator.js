let age = 10;
console.log(age)

// Using .toString to convert data type to String type
let ageS = age.toString(10)
console.log(ageS)

// Example 1
// The sentence below is a condition to determine the output
let ageD = 123
const Age =
// The sentence below is the expression that determines the value
    ageD <= 18  
// Below is the 2 values that would be displayed if the condition is met
// Only one wold be displayed if the condition match the expression the first value would display esle the second value would display
    ? "You are a child" 
    : "You are an adult";
console.log(Age)

// Example 2
let login = "Employee";
if (login == "Employee") {
  console.log("You are a staff");
} else if (login == "Director") {
  console.log("You are the C.E.O");
} else if (login == "Visitor") {
  console.log("You are welcome to our Company");
} else if (login == "") {
  console.log("Enter your position");
} else if (login == "Human-Resource-Manager") {
  console.log("You are the Boss");
}


// Ternary Example of Example 2

// Example 1
let signIn = "Director";
  role =
    signIn == "Employee"
    ? "You are a staff"
    : signIn == "Director"
    ? "You are the C.E.O"
    : signIn == "Visitor"
    ? "You are welcome to our company"
    : signIn == "Okay"
    ? "Don't burst my head"
    : "Burst my brain";
  console.log(role);





