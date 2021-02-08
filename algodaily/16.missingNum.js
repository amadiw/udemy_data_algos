function missingNumbers(numArr) {
  let missing = [];
  for (let i = 0; i < numArr.length-1; i++) {
    //console.log(numArr[i-1], numArr[i])
    if (numArr[i] !== numArr[i+1]-1) {
      missing.push(numArr[i]+1)
    }
  }
  return missing;
}

console.log(missingNumbers([1,2,4,5,7]))//[3,6]
console.log(missingNumbers([0,1,3]))//2
console.log(missingNumbers([10,11,14,17]))//[12,13,15,16]
