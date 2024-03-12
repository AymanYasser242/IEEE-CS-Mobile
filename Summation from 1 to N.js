const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
readline.question("", (str) => {
  let num = BigInt(str);
  let result = (num * (num + BigInt(1))) / BigInt(2);
  console.log(result.toString());
  readline.close();
});
