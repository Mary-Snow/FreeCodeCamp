function largestOfFour(arr){
  return arr.map(function(subArr){
    return subArr.reduce(function(acc, initVal){
      return initVal > acc ? initVal : acc;
    }, true)
  })

}