// Add Variables Here
let numberOne = 10;
let numberTwo = 20;
let result;
// Ouput
result = numberOne + "" + numberTwo;
console.log(result); // Normal Concatenate => 1020
console.log(typeof result); // Normal Concatenate => String
result = `${numberOne}${numberTwo}`;
console.log(result); // Template Literals Way => 1020
console.log(typeof result); // Template Literals Way => String

console.log(numberTwo + "\n" + numberOne);
/*
  Normal Concatenate
  20
  10
*/

console.log(`${numberTwo}${"\n"}${numberOne}`);
/*
  Template Literals Way
  20
  10
*/