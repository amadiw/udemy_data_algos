/*
write a function that accepts a sorted array and value and returns index of value
returns -1 if not found
*/

function binarySearch(arr, target) {
  // add whatever parameters you deem necessary - good luck!
  //declare vars middle left and right
  //if target === middle, return middle index
  //else if target < middle
  //make right === to middle and recalc middle
  //else if target > middle
  //make left === middle and recalc middle
  let left = 0;
  let right = arr.length - 1;
  let middle = Math.floor(left + right / 2);
  console.log(left, middle, right);

  while (left < right) {
    if (arr[middle] === target) return middle;

    if (target < arr[middle]) {
      right = middle;
      middle = Math.floor((left + right) / 2); //average of right - left
    } else {
      left = middle;
      middle = Math.floor((left + right) / 2);
    }
  }
  return -1;
}

console.log(binarySearch([2, 5, 6, 9, 13, 15, 28, 30], 15)); //5
console.log(binarySearch([1, 2, 3, 4, 5], 0)); //-1

function binarySearch(arr, val) {
  // add whatever parameters you deem necessary - good luck!
  let l = 0;
  let r = arr.length - 1;
  let mid = Math.floor((l + r) / 2);

  while (arr[mid] !== val && l <= r) {
    if (arr[mid] < val) {
      l = mid + 1;
    } else {
      r = mid - 1;
    }
    mid = Math.floor((l + r) / 2);
  }
  if (arr[mid] === val) {
    return mid;
  } else {
    return -1;
  }
}
