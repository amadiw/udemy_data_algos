const insertion = (arr) => {
  let temp
  for(let i = 0; i < arr.length; i++)
    min = i
    for(let j = 1; j < arr.length - 1; j++){
      if(arr[j] < arr[min]) {
        min = j
      }
    }
    temp = arr[i]
    arr[i] = arr[min]
    arr[min] = temp
  return arr
}

console.log(insertion, [5,1,2,3,4])
