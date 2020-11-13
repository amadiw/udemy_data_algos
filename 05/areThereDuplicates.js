const areThereDuplicates = (...args) => {
  //store each argument in an object
  let lookup = {};

  // console.log(...args)
  for (let elem of [...args]) {
    // console.log(elem)
    lookup[elem] ? lookup[elem]++ : (lookup[elem] = 1);
  }
  console.log(lookup);
  //check if any property in lookup is greater than 1
  for (let key in lookup) {
    console.log("lookup[key]", lookup[key]);
    if (lookup[key] > 1) return true;
  }
  return false;
};

console.log(areThereDuplicates(1, 2, 3), "s/b false");
console.log(areThereDuplicates(1, 2, 2), "s/b true");
