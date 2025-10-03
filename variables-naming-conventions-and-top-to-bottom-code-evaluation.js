/*

Objective:
In this activity, you will reinforce the skill of creating and using variables
while practicing best practices in variable naming conventions through a hands-on,
interactive coding challenge.

The code snippet below may include:
  - Ambiguous or incorrect variable names.
  - Missing variables that need to be created.
  - Scenarios that require the use of clear and descriptive variable names.

You will:
  - Identify Issues: Review the provided code and identify any variable names that:
  - Are unclear or too vague (e.g., a, b, c).
  - Do not follow best practices (e.g., camelCase, descriptive naming).
  - Refactor the Code: Rename the variables and rewrite the program using descriptive names that clearly convey the variable's purpose.
  - Enhance the Program: Add at least two additional variables to improve the program’s functionality or clarity.

Things to reflect on:
  - Why is it important to use meaningful variable names?
  - What are the common pitfalls to avoid when naming variables?
  - How do clear variable names benefit team collaboration?
  
*/

let customerName = "Alice";
let items = 5;
let price = 20;
let recieptStatement = customerName + " bought " + items + " items for $" + price + ".";

console.log(recieptStatement);


//Implicit conversion//

let userName = "Amy";
let ageOne = 2;
let ageTwo = "6";
let totalAge = ageOne + ageTwo;
console.log("This is an example of Implicit Conversion:")
currentStats = console.log( `${userName} is  ${totalAge} years old.`);


//Explicit conversion//

let userName1 = null;
/*let ageOne1 = 2;
let ageTwo1 = "6";
let totalAge1 = ageOne + Number(ageTwo);*/
console.log("This is an example of Edge Conversion:")
statusNow = console.log(`${userName} is the new  ${String(userName1)} as a string`);