const productArray = (arr) => {
//base case when array is empty
  //return 1
//recursive first element
  if (!arr.length) return 1 //accounts for empty array being passed in

  return productArray(arr.slice(1)) * arr[0]
}

console.log(productArray([1,2,3,10]))//60
console.log(productArray([1,2,10,10]))//200
