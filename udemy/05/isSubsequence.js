function isSubsequence(sub, str) {
  // good luck. Add any arguments you deem necessary.

  //use two pointers 1 for each string
  //use while loop to iterate through both strings checking if index of both strings are equal
  //if equal then increment both pointers
  //if not equal only increment second string j

  let i = 0;
  let j = 0;

  while (j < str.length) {
    if (sub[i] === str[j]) {
      i++;
    }

    if (i === sub.length) { //if i has reached end of substring then it must be a substring of str
      return true;
    } else {
      j++;
    }
  }
  return false;
}

// console.log(isSubsequence("abc", "abracadabra")); //true
// console.log(isSubsequence("abc", "acb")); //false

const recursiveSubsequence = (sub, str) => {
  //base case for when we've traversed the entire substring -> ie all the char where found
  if (!sub) return true

  //base case for when we've traversed the str -> ie searched entire string and didn't find a match
  if (!str) return false

  //if chars of each match, then pass in remaining strings to be compared again
  //else then traverse str by slicing off 1st character
  if(sub[0] === str[0]) {
    return recursiveSubsequence(sub.slice(1), str.slice())
  } else {
    return recursiveSubsequence(sub, str.slice(1))
  }
}

console.log(recursiveSubsequence("abc", "abracadabra"))//true
console.log(recursiveSubsequence('abc', 'acb'))//false

