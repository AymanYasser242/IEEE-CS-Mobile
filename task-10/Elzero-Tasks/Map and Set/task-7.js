let chars1 = ["A", "B", "C", "D", "E", 10, 15, 6];
let numbersCount1 = chars1.filter((item) => typeof item === "number").length;
let result1 = [
  ...chars1.filter((item) => typeof item === "string").slice(numbersCount1),
  ...chars1.filter((item) => typeof item === "string").slice(0, numbersCount1),
];
console.log(result1); // ['A', 'B', 'C', 'A', 'B', 'C', 'D', 'E']

let chars2 = ["A", "B", "C", 20, "D", "E", 10, 15, 6];
let numbersCount2 = chars2.filter((item) => typeof item === "number").length;
let result2 = [
  ...chars2.filter((item) => typeof item === "string").slice(numbersCount2),
  ...chars2.filter((item) => typeof item === "string").slice(0, numbersCount2),
];
console.log(result2); // ['A', 'B', 'C', 'D', 'A', 'B', 'C', 'D', 'E']

let chars3 = ["Z", "Y", "A", "D", "E", 10, 1];
let numbersCount3 = chars3.filter((item) => typeof item === "number").length;
let result3 = [
  ...chars3.filter((item) => typeof item === "string").slice(numbersCount3),
  ...chars3.filter((item) => typeof item === "string").slice(0, numbersCount3),
];
console.log(result3); // ["Z", "Y", "Z", "Y", "A", "D", "E"]
