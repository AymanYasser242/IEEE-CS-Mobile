function well(x){
    const goodCount = x.filter(item => item === "good").length;
  return goodCount > 2 ? 'I smell a series!' : goodCount > 0 ? 'Publish!' : 'Fail!'
  }