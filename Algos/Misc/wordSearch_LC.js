const wordPattern = (pattern, string) => {

  const words = string.split(' ')
  const hash = {}
  const mapped = new Set()

  //create hash map mapping pattern to words and add words to mapped Set
    //hash = {pattern: words}
  //if word or pattern is already in data structures & not match then false
  //evaluate to true if loop is completed

  for (let i = 0; i < pattern.length; i++) {
    const curPattern = pattern[i]
    const curWord = words[i]
    if (!hash[curPattern] && !mapped.has(curWord)) {
      hash[curPattern] = curWord
      mapped.add(curWord)
    } else if (hash[curPattern] !== curWord) {
      return false
    }
  }
  return true
}




console.log(wordPattern('abba', 'cat dog dog cat')) //true
console.log(wordPattern('adca', 'cat dog dog cat')) //false
