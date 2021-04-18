//grabs digit of number based on rigt based index
const getDigit = (num, i) => {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
};

//returns count of digits in number
const digitCount = (num) => {
  if (num === 0) return 1;
  // console.log(Math.log10(num))
  return Math.ceil(Math.log10(Math.abs(num)));
};

//finds nums with most digits. used to determine k in loop; ie buckets
const mostDigits = (nums) => {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
};

//places numbers in buckets using above functions
const radixSort = (nums) => {
  //determines amount of buckets needed
  let maxDigitCount = mostDigits(nums);
  //create number of buckets based on size of nums array

  for (let k = 0; k < maxDigitCount; k++) {
    const digitBuckets = Array.from({length: 10},()=>[]);
    // const digitBuckets = Array(10).fill([])
    // console.log(digitBuckets)
    for (let i = 0; i < nums.length; i++) {
      let digit = getDigit(nums[i], k);
      // console.log(digitBuckets)
      digitBuckets[digit].push(nums[i]);
    }
    //flatten array of arrays for next iteration
    nums = digitBuckets.flat();
    // console.log(nums)
  }
  return nums;
};

// console.log(digitCount(1234))
// console.log(getDigit(23,1))
console.log(radixSort([23, 345, 5467, 12, 2345, 9852])); //[12,23,345,2345,5467,9852]
