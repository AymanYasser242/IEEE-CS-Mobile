let arr1 = ["Ahmed", "Sameh", "Sayed"];
let arr2 = ["Mohamed", "Gamal", "Amir"];
let arr3 = ["Haytham", "Shady", "Mahmoud"];

// Play With Arrays To Prepare For Destructuring
// Write Your Destructuring Assignment Here

const [[, c, b], [a]] = [arr3, arr1];

console.log(`My Best Friends: ${c}, ${b}, ${a}`);

// My Best Friends: Shady, Mahmoud, Ahmed
