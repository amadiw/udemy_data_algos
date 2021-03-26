// someRecursive([1,2,3,4], isOdd) // true
// someRecursive([4,6,8,9], isOdd) // true
// someRecursive([4,6,8], isOdd) // false
// someRecursive([4,6,8], val => val > 10); // false

function someRecursive(arr, cb){

  //returns true if cb(arr[i]) is true else false
  //base case is when there's nothing left in array

//   let cbVal = cb(arr[0])
if (!arr.length) return false
  if (cb([arr[0]])) {
      return true
  }


  return someRecursive(arr.slice(1), cb)

}
