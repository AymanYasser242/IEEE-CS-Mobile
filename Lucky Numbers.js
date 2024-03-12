const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
readline.question("", (str) => {
  const [A, B] = str
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);
  let result = "";
  for (let i = A; i <= B; i++) {
    let numStr = i.toString();
    if (/^[47]*$/.test(numStr)) {
      result += numStr + " ";
    }
  }
  if (result) {
    console.log(result.trim());
  } else {
    console.log(-1);
  }
  readline.close();
});
