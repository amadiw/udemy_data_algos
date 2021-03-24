const areThereDuplicates = (...args) => {
  //store each argument in an object
  let hash = {}
  for (let el of args) {
      hash[el] ? hash[el]++ : hash[el] = 1
  }

  console.log(hash)
  for (let key in hash) {
      if (hash[key] > 1) return true
  }
  return false
}


console.log(areThereDuplicates(1, 2, 3), "s/b false");
console.log(areThereDuplicates(1, 2, 2), "s/b true");
