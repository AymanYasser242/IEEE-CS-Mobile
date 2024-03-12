let start = 10;
let end = 100;
let exclude = 40;

for (start; start <= end; start += 10) {
  if (start == exclude) {
    continue;
  }
  console.log(start);
}

