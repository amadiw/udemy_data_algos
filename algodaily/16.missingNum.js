function missingNumbers(numArr) {
  let missing = [];
  for (let i = 1; i < numArr.length; i++) {
    if (numArr[i] !== numArr[i-1]+1) {
      let difference = numArr[i] - numArr[i -1] //calculates gap
      let accDif = 1 //used to track gap. increases with each iteration
      while (accDif < difference) {

        missing.push(numArr[i -1]+accDif)
        accDif++
      }
    }
  }
  return missing;
}

console.log(missingNumbers([1,2,4,5,7]))//[3,6]
console.log(missingNumbers([0,1,3]))//2
console.log(missingNumbers([10,11,14,17]))//[12,13,15,16]
