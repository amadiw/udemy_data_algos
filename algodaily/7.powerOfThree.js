function powerOfThree(num) {
  // Fill in this method
  //3, 9, 27, 81

  if (num === 1) {
    return true;
  }

  if (num % 3 === 0) {
    return powerOfThree(num / 3);
  } else {
    return false;
  }
}

console.log(powerOfThree(9));
console.log(powerOfThree(7));
console.log(powerOfThree(6));
