function sumCallbackFunction(num1, num2) {
  console.log("The sum is:", num1 + num2);
}

function toPromise(callback) {
  const connectedToDb = true;
  return new Promise((resolve, reject) => {
    if (connectedToDb) {
      resolve(callback);
    } else {
      reject("Error: Couldn't connect to the database");
    }
  });
}

toPromise(sumCallbackFunction)
  .then((callback) => {
    callback(5, 5);
  })
  .catch((error) => {
    console.log(error);
  });
