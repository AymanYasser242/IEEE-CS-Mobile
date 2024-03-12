const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
readline.question("", (str) => {
  let nums = str.split(" ").map(Number);
  let minimum = Math.min(...nums);
  let maxmum = Math.max(...nums);
  console.log(minimum + " " + maxmum);
  readline.close();
});
