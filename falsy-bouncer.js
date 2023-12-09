function bouncer(arr) {
  let result = [];

  for(let i=0;i<arr.length;i++){
    let value=arr[i]
    if (value){
      result.push(arr[i])
    }
  }
  return result;
}

console.log(bouncer([7, "ate", "", false, 9]));