function flatten(arr){
  //declare new array
  //use closure to preserve lexical scope
  let newArr = []

  function helper (arr) {

      for (let i = 0; i < arr.length; i++) {
          if (!arr.length) return newArr

          if(Array.isArray(arr[i])) {
          helper(arr[i])
      } else {
          newArr.push(arr[i])
      }
     }
  }

  helper(arr)
  return newArr
}

console.log(flatten([1, 2, 3, [4, 5] ])) // [1, 2, 3, 4, 5]
// flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
// flatten([[1],[2],[3]]) // [1,2,3]
// flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3
