function findLongestWord(str) {
  var length = 0;
  str.split(" ").map(function(word){
    word.length > length ? length = word.length : length = length;
  });
 return length;
}