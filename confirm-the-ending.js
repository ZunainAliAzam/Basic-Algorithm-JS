function confirmEnding(str, target) {
  return str.slice(-target.length) === target
}

console.log(confirmEnding("connor", "n"));