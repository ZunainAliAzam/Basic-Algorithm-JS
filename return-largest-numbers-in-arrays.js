function largestOfFour(arr) {
  let result=[]
  for (let i=0;i<arr.length;i++){
    let largestnumber= arr[i][0];
    for (let j=1; j<arr[i].length;j++){
      if(arr[i][j]>largestnumber){
        largestnumber=arr[i][j];
      }
    }
    result[i] = largestnumber;
  }
  return result;
}

console.log(largestOfFour(
  [
    [4, 5, 1, 3], 
    [13, 27, 18, 26], 
    [32, 35, 37, 39], 
    [1000, 1001, 857, 1]
  ]
));