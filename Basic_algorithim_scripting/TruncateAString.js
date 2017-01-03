function truncateString(str, num) {
  if(str.length > num && num <=3){
    return str.slice(0, num) +"...";
  }else if (str.length === num || str.length < num){
    return str;
  }else{
    return str.slice(0, num -3) +"...";
  }
}