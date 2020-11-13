function sameFrequency(num1, num2){
/*
turn nums into strings to itirate through
can use hash map and compare both keys and properties

use multiple pointers - would require both to be sorted
   */

   num1 = num1.toString()
   num2 = num2.toString()
   const lookup = {}
   console.log( typeof num1)

  //create lookup object with num1 string
  for (let elem of num1) {
    lookup[elem] ? lookup[elem]++ : lookup[elem] = 1
  }
  //check if lookup object has key
  for (let elem of num2) {
    if (!lookup[elem]) {
      return false
    }
    else {
    //else then decrement prop
    lookup[elem]--
  }
}
return true
}

console.log(sameFrequency(123, 321)) //true
console.log(sameFrequency(34, 14)) //false
