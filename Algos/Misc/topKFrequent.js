/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
 var topKFrequent = function(nums, k) {
  //create hash map
    const hash = {}

    for(let elem of nums) {
        hash[elem] ? hash[elem]++ : hash[elem] = 1
    }
    console.log('hash: ',hash)
    //use object.entries to create key,val pairs
    //sort array by val
    const sorted = Object.entries(hash).sort(([keyA,valA], [keyB, valB])=> valB - valA)
    console.log('sorted', sorted)

    //use loop to run through  array k times and return keys as a new array
    let i = 0
    let res = []
    while (i < k) {
        res.push(sorted[i][0])
        i++
    }
    return res
};

console.log(topKFrequent([1,1,1,2,2,3,3,3,3],
  2))
