let theNumber = 100020003000;
let result = [...new Set(`${theNumber}`)]
  .filter((char) => char !== "0")
  .join("");
console.log(Number(result));
