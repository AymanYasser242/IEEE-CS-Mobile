let chars = ["A", "B", "C", "D", "E", 10, 15, 6];
let numbersCount = chars.filter((item) => typeof item === "number").length;
let result = [
  ...chars.filter((item) => typeof item === "string").slice(numbersCount),
  ...chars.filter((item) => typeof item === "string").slice(0, numbersCount),
];
console.log(result);
