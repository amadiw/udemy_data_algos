const majorityElement = arr => {

  arr = arr.sort()

  return arr[Math.floor(arr.length/2)] //returns element at array in the middle
}



console.log(majorityElement([1, 1, 1, 4, 2, 4, 4, 3, 1, 1, 1]))
