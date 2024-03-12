let num = "10";

// Solution One
console.log(num * 1 + num * 1) // 20

// Solution Two
console.log(num * true + num * true); // 20

// Solution Three
console.log(Number(num) + Number(num)); // 20

// Solution Four
console.log(parseInt(num) + parseInt(num)); // 20