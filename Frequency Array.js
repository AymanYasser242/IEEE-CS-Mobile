const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("", (str) => {
  const [N, M] = str.split(" ").map(Number);
  readline.question("", (arrStr) => {
    let arr = arrStr.split(" ").map(Number);
    let result = new Array(M + 1).fill(0);
    arr.forEach((num) => result[num]++);
    result.shift();
    result.forEach((num) => console.log(num));
    readline.close();
  });
});
