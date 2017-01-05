function sumAll(arr) {
  var max = Math.max.apply(Math, arr);
  var min = Math.min.apply(Math, arr);
  var newArr = [min, max];

  for(var i = min+1; i<= max-1; i++){
    newArr.push(i);
  }

  return newArr.reduce(function(a,b){

    return a+b;
  });

}

sumAll([1, 4]);