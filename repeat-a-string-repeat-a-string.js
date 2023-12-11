function repeatStringNumTimes(str, num) {
  let stringPlus = ""
  if (num>0){
    for(let i=0;i<num;i++){
      stringPlus += str;
    }
  }else{return ""}
  return stringPlus;
}

console.log(repeatStringNumTimes("abc", 3));