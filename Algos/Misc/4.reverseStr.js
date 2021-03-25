const reverseStr = (str) => {
  let newStr = "";

  for (let i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
  }

  return newStr;
};

// console.log(reverseStr("amadi"));

const reversePointer = (str) => {
  const strArray = str.split("");
  // console.log(strArray)

  let start = 0;
  let end = strArray.length - 1;

  while (start <= end) {
    const temp = strArray[start];
    strArray[start] = strArray[end];
    strArray[end] = temp;
    start++
    end--
  }
  return strArray.join("");
};

console.log(reversePointer("amadi"));

const reverseString = (str) => {
  // const strArray = str.split("");
  // console.log(strArray)

  let start = 0;
  let end = str.length - 1;

  while (start <= end) {
    const temp = str[start];
    console.log(temp)
    str[start] = str[end];
    str[end] = temp;
    start++
    end--
    console.log("str: ", str)
  }
  return str;
};

console.log("reverseString: ", reverseString("amadi"));
