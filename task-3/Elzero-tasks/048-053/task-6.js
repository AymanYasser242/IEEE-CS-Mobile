let start = 0;
let swappedName = "elZerO";

let newArr = swappedName.split("").map((char) => {
  return char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase();
});

console.log(newArr.join(""));
