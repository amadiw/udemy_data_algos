const insertion = arr => {

  for (let i = 1; i < arr.length; i++) {
    let currVal  = arr[i]
    let j
    for (j = i - 1; j >= 0 && arr[j] > currVal; j--) {
        arr[j + 1] = arr[j]
    }
    arr[j+1] = currVal
  }
  return arr
}

console.log(insertion([3,1,5,6,0]))
