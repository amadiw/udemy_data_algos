const decodeString = (str) => {
  let stack = [];
  let currStr = "";
  let currNum = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "[") {
      stack.push(currStr);
      stack.push(currNum);
      currStr = "";
      currNum = 0;
    } else if (str[i] === "]") {
      //once at the end of an enclosed [] string, then the stack should hold ["", 100]
      let prevNum = stack.pop(); //100
      let prevStr = stack.pop(); //""

      //builds currStr by repeating the string the number of times preceding the []
      currStr = prevStr + currStr.repeat(prevNum);
    } else if (str[i] >= "0" && str[i] <= "9") {
      currNum = currNum * 10 + Number(str[i]);
    } else {
      currStr += str[i];
    }
  }
  return currStr
};

console.log(decodeString("10[leet]"));
