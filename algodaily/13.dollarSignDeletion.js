function isDollarDeleteEqual(arr) {
  // Fill in this method
  const gotFinal = arr.map(str => getFinalStr(str))
  return gotFinal[0] === gotFinal[1];
}

function getFinalStr(str) {
  const stack = [] // stores characters


  //pushes characters into a stack and pops off last element if a $ is encountered
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "$") {
      stack.pop()
    } else {
      stack.push(str[i])
    }
  }
  return stack.join("")
}

const input = ["f$st", "st"];
console.log(isDollarDeleteEqual(input));

