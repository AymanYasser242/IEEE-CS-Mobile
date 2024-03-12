const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
readline.question("", (str) => {
  let num = parseInt(str);
  if (num < 2) {
    console.log(-1);
  } else {
    for (let i = 2; i <= num; i += 2) {
      console.log(i);
    }
  }

  readline.close();
});
