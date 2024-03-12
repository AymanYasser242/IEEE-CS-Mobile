const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("", (str) => {
  const [N, M] = str.split(" ").map(Number);
  readline.question("", (arrStr) => {
    let arr = arrStr.split(" ").map(Number);

    let minimum = Math.min(...arr);
    let maximum = Math.max(...arr);
    let minimumIndex = arr.indexOf(Math.min(...arr));
    let maximumIndex = arr.indexOf(Math.max(...arr));

    arr.splice(minimumIndex, 1, maximum);
    arr.splice(maximumIndex, 1, minimum);
    console.log(arr.join(" "));
    readline.close();
  });
});
