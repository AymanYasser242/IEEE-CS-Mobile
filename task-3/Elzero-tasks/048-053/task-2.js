let start = 10;
let end = 0;
let stop = 3;

for (let i = start; i >= end; i--) {
  if (i < 10) {
    if (i >= 3) {
      console.log("0" + i);
    } else {
      break;
    }
  } else {
    console.log(i);
  }
}
