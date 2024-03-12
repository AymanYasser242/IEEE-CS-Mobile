const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
readline.question("", (str) => {
  let allDays = Number(str);
  let years = Math.floor(allDays / 365);
  let remaining = allDays % 365;
  let months = Math.floor(remaining / 30);
  let days = Math.floor(remaining % 30);
  console.log(
    years + " years" + "\n" + months + " months" + "\n" + days + " days"
  );
  readline.close();
});
