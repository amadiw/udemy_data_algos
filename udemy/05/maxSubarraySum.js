function maxSubarraySum(arr, n){
  // add whatever parameters you deem necessary - good luck!
  //must be contiguous
  //use 2 pointers
  //create a loop based on n size
  //declare sum variable
  //use conditional to reassign sum to maxSum var
  if (n > arr.length) return null
  let sum = 0
  for (let i = 0; i < n; i++){
      sum += arr[i]
  }
//   console.log(sum)
    //use sliding window and reassign variable
  let maxSum = sum
  let l = 0
  let r = n
  while(r < arr.length) {
      sum += arr[r] - arr[l]
      l++
      r++
      //conditional to reassign maxSum
      if (sum > maxSum) {
          maxSum = sum
      }
  }
  return maxSum
}
console.log(maxSubarraySum([1,2,3,4],2))
