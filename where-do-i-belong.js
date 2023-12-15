function getIndexToIns(arr, num) {
  let sortedArray=arr.sort(function(a,b){return (a-b)} )
  console.log(sortedArray)
  for (let i = 0; i < sortedArray.length; i++) {
    if (sortedArray[i] >= num) {
      return i;
    }  
  }
  return sortedArray.length;
}


console.log(getIndexToIns([10, 20, 30, 40, 50], 35));