function mutation(arr) {
    let firstElement = arr[0].toLowerCase();
  let secondElement = arr[1].toLowerCase();
  for (let i = 0; i < secondElement.length; i += 1) {
    let letter = secondElement[i].toLowerCase();
    if (firstElement.indexOf(letter) === -1) {
      return false;
    }
  }
  return true;
}

console.log(mutation(["hello", "hey"]));