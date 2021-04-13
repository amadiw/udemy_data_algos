const bubble = (arr) => {
  let temp;
  for (let i = arr.length; i > 0; i--) {
    let swapped = false;
    for (let j = 0; j < i - 1; j++) {
      console.count(arr, arr[j], arr[j + 1]);
      if (arr[j] > arr[j + 1]) {
        temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        swapped = true;
      }
    }
    if (swapped) break;
  }
  return arr;
};

console.log(bubble([5, 1, 2, 3, 4])); //[2,4,3,7,8]
