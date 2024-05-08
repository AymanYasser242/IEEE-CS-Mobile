function matrix(arr) {
  let modifiedArr = arr.map((row) => row.slice());

  for (let i = 0; i < arr.length; i++) {
    if (arr[i][i] < 0) {
      modifiedArr[i][i] = 0;
    } else {
      modifiedArr[i][i] = 1;
    }
  }

  return modifiedArr;
}
