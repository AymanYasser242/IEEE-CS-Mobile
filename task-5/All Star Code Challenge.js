function strCount(str, letter) {
  const arr = str.split("");
  let total = 0;
  arr.forEach((l) => {
    if (l == letter) {
      total++;
    }
  });
  return total;
}
