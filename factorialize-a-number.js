function factorialize(num) {
  if (num==0){
    return 1;
  }
  else if(num>0){
  return num*factorialize(num-1);
  }
  else{
    console.log("Invalid number");
  }
}

console.log(factorialize(5));