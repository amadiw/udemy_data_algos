const areThereDuplicates = (...args) => {
  //pointer solution - must be sorted
  // declare left & right pointers
  // return true if left & right are same
  // return false

  //edge case for characters and number sorting
  Number.isInteger(args[0])
    ? args.sort((a, b) => a - b)
    : args.sort();

    let i = 0;
  let j = 1;

  while (j < args.length) {
    if (args[i] === args[j]) {
      return true;
    } else {
      i++;
    }
    j++;
  }
  return false;
};



console.log(areThereDuplicates(1, 2, 3), "s/b false");
console.log(areThereDuplicates(1, 2, 2), "s/b true");
console.log(areThereDuplicates("a", "b", "c", "a"), "s/b true");
