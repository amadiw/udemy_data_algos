function missingInUnsorted(arr, lowerBound, upperBound) {
  //   for (let i = lowerBound; i <= upperBound; i++) {
  //    //console.log(i)
  //     if (!arr.includes(i)) {
  //       return i
  //     }
  //   }
  let arrSum = 0;

  let totSum = (upperBound * (upperBound + lowerBound)) / 2;
  for (let el of arr) {
    arrSum += el;
  }
  //console.log(totSum - arrSum)
  return totSum - arrSum;
}

console.log(missingInUnsorted([2, 5, 1, 4, 9, 6, 3, 7],1,9));//8
