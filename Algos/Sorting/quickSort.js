const pivot = (arr, startIdx = 0, endIdx = arr.length - 1) => {
  let pivot = arr[0];
  let swapIdx = startIdx;

  for (let i = startIdx + 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      let temp = arr[swapIdx];
      arr[swapIdx] = arr[i];
      arr[i] = temp;
    }
  }
  let temp = arr[startIdx];
  arr[startIdx] = arr[pivot];
  arr[pivot] = temp;

  return swapIdx;
};

console.log(pivot([4, 8, 2, 1, 5, 7, 6, 3])); //3 returns index 3

console.log(pivot([5, 6, 4, 3])); //2

