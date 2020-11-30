// function fib(n){
//   // fib(n-1) + fib(n-2)
//   //1 1 2 3 5 8 13 21 34 55
// if (n <=2) return 1

// return fib(n - 1) + fib(n - 2)
// }

//with memoization
function fib(n) {
  // fib(n-1) + fib(n-2)
  //1 1 2 3 5 8 13 21 34 55
  const obj = {};
  // let result

  if (n <= 2) return 1; // returns 1 for the 1st and 2nd number in fib sequence

  //conditional that checks if result of recursive call is already stored in object
  if (obj[n]) { //if a value for nth fib exists, return it
  console.log(obj)
    return obj[n];
  } else {
     obj[n] = fib(n - 1) + fib(n - 2); //otherwise, assign n the value of the evaluted result of fib calls
    console.log(obj)
     return obj[n]
  }
}

// console.log(fib(4)); //3
console.log(fib(6)); //8 8 is the 6th number in the fibonacci sequence
