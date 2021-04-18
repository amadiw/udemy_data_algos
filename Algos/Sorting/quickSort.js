const pivot = (arr, start = 0, end = arr.length - 1) => {
  let pivot = arr[0];
  let pivotIdx = start;

  for (let i = start + 1; i <= end; i++) {
    if (pivot > arr[i]) {
      pivotIdx++;
      let temp = arr[pivotIdx];
      arr[pivotIdx] = arr[i];
      arr[i] = temp;
    }
  }
  let temp = arr[start];
  arr[start] = arr[pivotIdx];
  arr[pivotIdx] = temp;

  return pivotIdx;
};

/* console.log(pivot([4, 8, 2, 1, 5, 7, 6, 3])); //3 returns index 3

console.log(pivot([5, 6, 4, 3])); //2
 */
const quickSort = (arr, left = 0, right = arr.length-1) => {

  if(left < right){
        let pivotIndex = pivot(arr, left, right) //3
        //left
        quickSort(arr,left,pivotIndex-1);
        //right
        quickSort(arr,pivotIndex+1,right);
      }
     return arr;
}

console.log(quickSort([4, 8, 2, 1, 5, 7, 6, 3]))
