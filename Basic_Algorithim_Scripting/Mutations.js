function mutation(arr) {
  var arr1 = arr[1].toLowerCase().split("");
  return arr1.every(function(letter){
    return arr[0].toLowerCase().indexOf(letter) !== -1;
  });
}

mutation(["hello", "Hello"]);