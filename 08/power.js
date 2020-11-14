/* function accepts base and exponent */

const power = (base, exponent) => {
// 2 * 2 * 2 * 2
// exponent should decrease

if (exponent ===0) return 1
return base * power(base, exponent - 1)

}

console.log(power(2,5)) //16
