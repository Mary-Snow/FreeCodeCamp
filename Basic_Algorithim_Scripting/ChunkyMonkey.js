function chunkArrayInGroups(arr, size) {
  newArr = [];
  while(arr.length > 0){
    newArr.push(arr.splice(0, size));
  }
    return newArr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);