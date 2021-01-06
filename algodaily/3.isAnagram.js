function isAnagram(str1, str2) {
  str1 = str1.split("").sort().join("")
  //convert string into array and sort and then back into string
  str2 = str2.split("").sort().join("")

  return str1 === str2
  //determines if strings match
}

console.log(isAnagram("cinema", "iceman"))
