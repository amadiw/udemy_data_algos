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
