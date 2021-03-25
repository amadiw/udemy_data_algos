var uniqueOccurrences = function(arr) {
  let hash = {}

  for (let elem of arr) {
      hash[elem] ? hash[elem]++ : hash[elem] = hash[elem] = 1
  }

  const vals = Object.values(hash).sort((a,b) => a-b)
  console.log(vals)

 for (let i = 0; i < vals.length; i++) {
     console.log('vals i', vals[i])
     console.log(vals[i +1])
     if (vals[i] === vals[i + 1]) return false
 }
  return true
};

var numJewelsInStones = function(jewels, stones) {
  //jewels = "aA"
  //stones = "aAAbbbb"

  //result = 3

  //create hashmap of stones
  let hash = {}
  for (let elem of stones){
      hash[elem] ? hash[elem]++ : hash[elem] = 1
  }
      console.log(hash)

  //iterate through jewels and sum if jewels elem is found in stones
  let sum = 0
  for (let elem of jewels) {
      if (hash[elem]) {
          sum += hash[elem]
      }
  }
    return sum

};

var isIsomorphic = function(s, t) {
  //create 2 hash maps using 1 for loop
      //hashmap value is set to index it was found at. essentially on storing the value the first time it's seen
  //compare the values
      //if values (indice of first occurance) the same then they are isomorphic

   let sHash = {}
  let tHash = {}
  for (let i = 0; i < s.length; i++) {
      console.log(!sHash[s[i]])
      if (sHash[s[i]] === undefined) sHash[s[i]] = i
      if (tHash[t[i]] === undefined) tHash[t[i]] = i

      if (sHash[s[i]] !== tHash[t[i]]) {
      return false
      }
  }
  return true
};
console.log(isIsomorphic("bbbaaaba",
"aaabbbba"))//false
