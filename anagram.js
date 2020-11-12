function validAnagram(str1, str2) {
  // add whatever parameters you deem necessary - good luck!

  const lookup = {};

  if (str1.length !== str2.length) return false;

  for (let val of str1) {
    lookup[val] ? lookup[val]++ : (lookup[val] = 1);
    console.log(lookup)
  }

  for (let val of str2) {
    //check if val of str2 exists in str1Obj as a key
    //if (!str1Obj[val])
    //return false
    //check if val equals property of str1Ojb
    if (!lookup[val]) {
      return false;
    }
    //determine if frequency in lookup mathches frequency in str2 by decrementing if found
    else {
      lookup[val] -= 1;
    }
  }
  return true
}

console.log(validAnagram("anagram", "nagaram"));
