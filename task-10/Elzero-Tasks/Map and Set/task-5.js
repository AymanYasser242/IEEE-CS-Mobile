let theName = "Elzero";

// Method 1: Using spread syntax with split()
let result1 = [...theName];

// Method 2: Using Array.from()
let result2 = Array.from(theName);

// Method 3: Using Array.prototype.map()
let result3 = Array.prototype.map.call(theName, (letter) => letter);

// Method 4: Using Array.prototype.forEach()
let result4 = [];
Array.prototype.forEach.call(theName, (letter) => result4.push(letter));

// Method 5: Using Array.prototype.reduce()
let result5 = Array.prototype.reduce.call(
  theName,
  (acc, letter) => {
    acc.push(letter);
    return acc;
  },
  []
);

// Print all results
console.log("Method 1:", result1); // ['E', 'l', 'z', 'e', 'r', 'o']
console.log("Method 2:", result2); // ['E', 'l', 'z', 'e', 'r', 'o']
console.log("Method 3:", result3); // ['E', 'l', 'z', 'e', 'r', 'o']
console.log("Method 4:", result4); // ['E', 'l', 'z', 'e', 'r', 'o']
console.log("Method 5:", result5); // ['E', 'l', 'z', 'e', 'r', 'o']
