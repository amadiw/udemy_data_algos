const intersection = (arr1, arr2) => {
  //use Set data structure to filter elems of arr1 out of arr2 and remove duplicates
  return [...new Set(arr1.filter(el => arr2.includes(el)))] //use spread operator to turn Set into an array

}

// console.log(intersection([1,5,2,12,6],[13,10,9,5,8])); //[5]
// console.log(intersection([6,0,12,10,16],[3,15,18,20,15])); //should return []

const intHash = (arr1, arr2) => {
//use hashmap to keep track of elements in arr1 that are found in arr2
  const hash = {}
  for (let i = 0; i < arr1.length; i++) {
    //conditional that checks if arr1[i] is in arr2 and sets it as a key in hash
    if (arr2.includes(arr1[i])) {
      hash[arr1[i]] = 1
    }
  }
  console.log("hash: ", hash)
  return Object.keys(hash).map(el=>parseInt(el)) //use map to convert key from string back to a number
}
console.log(intHash([4,17,4,4,15,16,17,6,7],[15,2,6,20,17,17,8,4,5])) //[4,6,15,17]
console.log(intHash([6,0,12,10,16],[3,15,18,20,15])); //should return []



