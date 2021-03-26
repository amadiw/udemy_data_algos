const rev = (str) => {
  if (str.length <= 1) return str

  return rev(str.slice(1)) + str[0]
  //str is muttated by slice and passed in until we hit the base case. then all chars at [0] are essentially concated in reverse order

}

console.log(rev("awesome")); // 'emosewa'
console.log(rev("rithmschool")); // 'loohcsmhtir'


/* function reverse(str) {
  //declare new str
  //declare end pointer
  //recursive call returns string 0,end

  let newStr = "";
  let end = str.length - 1;
  if (str.length <= 0) return newStr;

  newStr += str[end];
  return newStr.concat(reverse(str.slice(0, end))); //need to use concat or else newStr var will be continuosly reset to initial val of ""
} */

// console.log(reverse("awesome")); // 'emosewa'
// console.log(reverse("rithmschool")); // 'loohcsmhtir'

function reverseClosure(str) {
  //declare new str
  //declare end pointer
  //recursive call returns string 0,end

  let newStr = "";
// console.log(str)
  function innerFunc (str) {
    // console.log('hello')
    let end = str.length - 1;
    if (str.length <= 0) return newStr;

    newStr += str[end];
    innerFunc(str.slice(0, end)); //need to use concat or else newStr var will be continuosly reset to initial val of ""
  }

  innerFunc(str)
  return newStr
}

// console.log(reverseClosure("awesome")); // 'emosewa'
// console.log(reverseClosure("rithmschool")); // 'loohcsmhtir'
