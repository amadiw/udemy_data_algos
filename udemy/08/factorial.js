/* funciton accepts a number and returns factorial of number */

const factorial = (num) => {
// 4 * 3 * 2 * 1
// base case wwhen num === 0 return 1
// recursive case decrement num

if (num === 0) return 1
return num * factorial(num - 1)

}

console.log(factorial(4)) //24
