/* function accepts base and exponent */

const power = (base, exponent) => {
// 2 * 2 * 2 * 2
// exponent should decrease

if (exponent ===0) return 1
return base * power(base, exponent - 1)

}

console.log(power(2,5)) //32


const power2 = (base, exponent) => {
  //base case when exp equals 1


  // let product = 1
  if(exponent === 0) return 1

  return base *= power2(base, exponent - 1)
  //2*= power2(2, 2) 4 * 2 = 8
    //2*= power2(2,1) 2 * 2 = 4
      //2 *= power2(2,0) 2* 1 =2
      //-> 1

}

console.log(power2(2, 3)) //8
