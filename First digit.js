const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
readline.question("", (str) => {
  let [firstNumber] = str.split("").map(Number);
  if (firstNumber % 2 === 0) {
    console.log("EVEN");
  } else {
    console.log("ODD");
  }
  readline.close();
});
