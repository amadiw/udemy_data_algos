const preReq = arr => {
  const hash = {}


  for(let i = 0; i < arr.length; i++) {

    // console.log(arr[i][0])
    if (!hash[[arr[i][0]]]) {
      hash[[arr[i][0]]] = arr[i][1]
      // console.log(hash)
    }
  }

// find first class to take and start results array
  let result = []
  let keys = Object.keys(hash)
  // console.log(keys)
  let vals = Object.values(hash)
  // console.log(vals)

  let start = keys.filter(el=>!vals.includes(el))[0]
  result.push(start)

  //update result array with hash
  //only iterate half way through and return last index

  while() {
console.log(result)
    for (let key in hash) {
      if (key === result[result.length-1]) {
        result.push(hash[key])
      }
  }
  return result
  }
}


const courses =[["bio 2","chem 1"], ["chem 1","chem 2"], ["bio 1","bio 2"], ["acct","marketing"], ["chem 2","acct"]]
console.log(preReq(courses))
