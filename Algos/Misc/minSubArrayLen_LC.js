const minSubArrayLen = (nums, sum) => {
  let total = 0
  let l = 0
  let r = 0
  let minLen = Infinity

  //iterate through nums array until you reach the end
  while(l < nums.length) {
    //conditional for summing total as long as total is less than sum and r pointer hasn't reached the end
    if(total < sum && r < nums.length) {
      total += nums[r]
      r++
    } else if (total >= sum) {
      //condition shrinks window by moving the l pointer and also reassigns minLen
      minLen = Math.min(minLen, r - l)
      total -= nums[l] //subtracts left pointer element from window
      l++
    } else { //accounts for when elements won't add up to sum
      break
    }
  }
  //returns minimum length. if minLen still equals Infinity, they it was never reassigned and therefore no numbers added up and should return 0
  return minLen === Infinity ? 0 : minLen
}

console.log(minSubArrayLen([2,3,1,2,4,3],7))
console.log(minSubArrayLen([3,1,62],52))
console.log(minSubArrayLen([1,2,3,4],107))
