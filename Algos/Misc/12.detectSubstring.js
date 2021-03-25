const detectSubstring = (str, subStr) => {
  let j = 0

  for (let i = 0; i < str.length; i++) {
    let currEl = str[i]

    if (currEl === subStr[j]) { // str elem matches substring elem, increment substring index
      j++
      if (j === subStr.length) { //once you've reached the end of the substring then return the index inwhich the substring started at.
        return i - (subStr.length - 1) //curr index of str less characters in substring
      }
    }
  }


 return -1
}

console.log(detectSubstring("ggraph", "graph")); //1
console.log(detectSubstring("geography", "graph"));//3
console.log(detectSubstring("digginn", "inn"));//4
console.log(detectSubstring("digginn", "cat"));//-1
