function titleCase(str) {
  var newStr = str.toLowerCase().split(" ");
  return newStr.map(function(word){
    return   word[0].toUpperCase() + word.slice(1);
  }).join(" ");

}