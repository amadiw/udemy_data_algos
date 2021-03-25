function maxOfMinPairs(nums) {
  // fill in
  let arr = []
  nums.sort((a,b)=> a - b)
  for (let i = 0; i < nums.length; i+=2) {
    arr.push([nums[i], nums[i + 1]])
  }
  //return arr;

  let sum = 0
  for (let j = 0; j < arr.length; j++) {
    console.log(arr[j])
    sum += arr[j][0]
  }
  return sum
}

console.log(maxOfMinPairs([1, 3, 2, 6, 5, 4]));
