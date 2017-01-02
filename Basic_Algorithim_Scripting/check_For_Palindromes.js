function palindrome(str) {
  var newStr = str.toLowerCase().match(/[a-z0-9]/gi);
  var answer;
  newStr.join("") === newStr.reverse().join("") ? answer= true : answer =false;
  return answer;
}
