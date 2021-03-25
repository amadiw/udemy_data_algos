var intersect = function(nums1, nums2) {
  //return nums1.filter(el =>nums2.includes(el))

  const hash = {}
  const result = []



  for (let i = 0; i < nums1.length; i++) {
      hash[nums1[i]] ? hash[nums1[i]]++ : hash[nums1[i]] = 1
  }
  console.log(hash)
  for (let i = 0; i < nums2.length; i++) {
      if (hash[nums2[i]]) {
          console.log(hash[nums2[i]])
          result.push([nums2[i]])
          hash[nums2[i]]--
      }
  }
  return result
};

console.log(intersect([1,2,2,1],[2,2]))//[2,2]
