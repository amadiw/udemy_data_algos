function firstNonRepeat(str) {
  // fill this in
  const hash = {}

  for (let i = 0; i < str.length; i++) {
    hash[str[i]] ? hash[str[i]]++ : hash[str[i]] = 1
  }
  //return hash;
  for (let key in hash) {
    if (hash[key] === 1) {
      return key
    }
  }
  return 'no repeats'
}

console.log(firstNonRepeat('oh my god dude where is my car'))
