const selection = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    // let temp
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    if (i !== min) {
      let temp = arr[i];
      arr[i] = arr[min];
      arr[min] = temp;
    }
  }
  return arr;
};

console.log(selection([5, 1, 2, 3, 4]));
