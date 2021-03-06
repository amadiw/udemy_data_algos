function countUniqueValues(arr) {
  //use 2 pointers i & j
  if (arr.length === 0) return 0

  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    //if i !== j, increment i & reassign value at arr[i] to arr[j]
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
}

console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])); //7
console.log(countUniqueValues([])); //7

// function countUniqueValues(arr){
//   //have left and right pointer
//   //if L != R then increment i and swap values
//   if (!arr.length) return 0
//   let left = 0
//   for (let right = 1; arr.length; right++) {
//       if ( arr[left] != arr[right]) {
//           left++
//           arr[left] = arr[right]
//       }
//   }
//   return left + 1
// }
