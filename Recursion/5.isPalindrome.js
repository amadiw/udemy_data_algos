const isPalindrome = str => {

  //1. clean string
  str = str.toLowerCase().replace(/[-,]/g,"").split(" ").join("")
  // console.log(str)
  //2. base case return true if 1 or fewer chars are left
  if (str.length <= 1) return true
  //3. recursive case. if L === R, slice. else return false
  const start = str[0]
  const end = str[str.length-1]
  if (start !== end) {
    // console.log(start, end)
    return false
  } else {
    return isPalindrome(str.slice(1,end))
  }
}

console.log(isPalindrome("racecar")) //true
console.log(isPalindrome("notapalindrome")) //false
console.log(isPalindrome("Anne, I vote more cars race Rome-to-Vienna")); //-> true
console.log(isPalindrome("llama mall")); //-> true

function isPalindrome2(str){
  // add whatever parameters you deem necessary - good luck!
  //check first if l & r are equal and return false if not
  //base case is when <=1 char is left
  //recursive case is slicing inward
  let l = 0
  let r = str.length - 1
  if(str[l] !== str[r]) return false

  if(str.length <= 1) return true

  if(str[l]===str[r])
  return isPalindrome2(str.slice(1,r))
}
