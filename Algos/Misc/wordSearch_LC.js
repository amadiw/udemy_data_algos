/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
 var wordPattern = function(pattern, s) {
  //both inputs are strings
  //use hash to map pattern to words
  //use for loop to construct and test hashmap
  //if hash[pattern] exists then check whether that value mathches the current word.
      //if not return false
  //else hash[pattern] = s[i]
  //return true

  //create hashes
  const hash = {}
  const words = s.split(' ')
  // const mapped = new Set()


  if(pattern.length !== words.length) return false
  if(new Set(words).size !== new Set(pattern).size) return false

  for (let i = 0; i < pattern.length; i++) {
      const curPattern = pattern[i]
      const curWord = words[i]

      if (hash[curPattern]) {
        if (hash[curPattern] !== curWord) return false
  } else {
    hash[curPattern] = curWord
  }

}
return true
}

console.log(wordPattern('abc', 'b c a'))//true
console.log(wordPattern('abba', 'dog cat cat dog'))//true
console.log(wordPattern('abda', 'dog cat cat dog'))//false
