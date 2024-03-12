const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
readline.question("", (str) => {
  let arr = str.split(" ").map((part) => {
    if (isNaN(part)) {
      return part.trim();
    } else {
      return Number(part);
    }
  });

  let result;
  let [A, S, B, Q, C] = arr;

  if (S == "+") {
    result = A + B;
  } else if (S == "-") {
    result = A - B;
  } else if (S == "*") {
    result = A * B;
  }

  if (result == C) {
    console.log("Yes");
  } else {
    console.log(result);
  }
  readline.close();
});
