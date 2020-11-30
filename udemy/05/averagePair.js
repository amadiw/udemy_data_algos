/*
given a sorted array of intergers and a target average, determine if there is a pair of values in the array where pair equals target average
 */

const averagePair = (arr, tarAvg) => {
  if (!arr[0]) return false

  // set up 2 pointers
  // left pointer should be at elem that is <= to tarA
  // right pointer should be at first number >= tarA
    let left = 0
    let right = arr.length - 1

    //iterate while right < arr.length
    while (left < right) {
      let avg = (arr[left] + arr[right])/2
      if (avg === tarAvg) {
        return true
      } else if (avg < tarAvg) {
        left++
      } else {
        right--
      }
    }
    //otherwise
  return false
}

console.log(averagePair([1,2,3],2.5)) //true
console.log(averagePair([1,3,3,5,6,7,10,12,19],8)) //true
console.log(averagePair([],2.5)) //false
