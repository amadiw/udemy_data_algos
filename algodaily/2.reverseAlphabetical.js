function reverseOnlyAlphabetical(str) {
  const strArray = str.split("")
  let start = 0
  let end = str.length-1



  while (start <= end) {
    if (!(/[a-zA-Z]/).test(strArray[start])) {
      start++
    } else if (!(/[a-zA-Z]/).test(strArray[end])) {
      end--
    } else {

      let temp = strArray[start]
      strArray[start] = strArray[end]
       strArray[end] = temp
    start++
    end--
    }
  }

  return strArray.join("");
}

console.log(reverseOnlyAlphabetical('sea!$hells3')) //'sll!$ehaes3'
