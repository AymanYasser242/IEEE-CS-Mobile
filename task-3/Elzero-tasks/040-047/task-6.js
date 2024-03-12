let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];

// Your Code Here
allArrs = [arr2[arr1.length - true], ...arr1.slice(-true), arr2[arr1.length]]
  .join("")
  .toLowerCase();
console.log(allArrs); // fxy
