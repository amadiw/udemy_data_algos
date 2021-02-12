function sumOfPrimes(n) {
  // function to check if num is prime

  const isPrime = n => {
    for (let j = 2; j <= Math.sqrt(n); j++) {
      //for (let j = 2; j<= n; j++) less optimized
     if (n % j === 0) {
       return false
       }
     }
      return true
    }

  let sum = 0
  for (let i = 2; i <=n; i++) {
    if (isPrime(i)) {
      sum += i
    }
  }
  return sum;
}

console.log(sumOfPrimes(2));
console.log(sumOfPrimes(10));

