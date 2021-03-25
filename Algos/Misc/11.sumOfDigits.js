function sumDigits(num) {
  if (num < 10) {
    return num
  } else {
  return sumDigits(num % 10 + Math.floor(num/10))
  }
}


console.log(sumDigits(49))
