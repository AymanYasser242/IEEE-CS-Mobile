function toCsvText(array) {
    let result = "";
     array.forEach((arr , index) => {
       let newStr = arr.join(","); 
       if(! (index + 1 === array.length)){
           result += (`${newStr}\n`);
          } else {
           result += newStr;
          }
     
     })
    return result
  }