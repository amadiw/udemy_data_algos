/* We have an unsorted array of integers such as the following:

JAVASCRIPT
1
[0, 3, -1, -2, 1]
In the above example, the minimum number is -2 and the maximum is 3. If it were sorted, it would look like:

JAVASCRIPT
1
[-2, -1, 0, 1, 3]
This means there is an expected range (defined as the collection of values between the minimum and maximum values) of [-2, -1, 0, 1, 2, 3] for the array.

But look at the example again:

JAVASCRIPT
1
[-2, -1, 0, 1, 3]
We're missing a number: 2. The smallest missing positive integer for our input array is 2 */

const leastMissing = (nums) => {
  //swapped function
  const swapped = (arr, firstIdx, secIdx) => {
    const temp = arr[firstIdx];
    arr[firstIdx] = arr[secIdx];
    arr[secIdx] = temp;
  };

  //iterate through nums array and add while conditional that evokes swapped
  for (let i = 0; i < nums.length; i++) {
    while (
      nums[i] > 0 && //greater than 0
      nums[i] <= nums.length && //exits loop if elem is equal to array length ie then result should be nums.length + 1

      nums[i] !== nums[nums[i] - 1]) { // if index isn't 1 less than element, then swap

      swapped(nums, i, nums[i] - 1);
    } //once while loop conditions met, invoke swap function passing in current index as firstIdx and the element less 1 as secIdx
  }

  //iterate through swapped array and return answer
  for (let j = 0; j < nums.length; j++) {
    if (nums[j] !== j + 1) {
      //checks if mutated array elements are 1 less than their index
      return j + 1;
    }
  }
  return nums.length + 1; //corner case where next least number is next in array
};

console.log(leastMissing([-2, -1, 0, 1, 3])); //2
console.log(leastMissing([1, 2, 3])); //4
