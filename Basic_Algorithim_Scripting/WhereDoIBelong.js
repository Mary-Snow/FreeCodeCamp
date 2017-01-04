function getIndexToIns(arr, num) {
  var sortedArr = arr.sort(function(a,b){
    return a-b;
  });


  for(var i = 0; i<arr.length; i++){
    if(num <= sortedArr[0]){
     return 0;
    }else if(num >sortedArr[arr.length-1]) {
      return arr.length;
    }
    else if( num === arr[i]){
      return i;
    }

    else if(num > arr[i] && num <arr[i+1]){
      return i+1;
    }
    }

 // return sortedArr;
}

getIndexToIns([2, 5, 10], 15);