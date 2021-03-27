const stringifyNumbers = (obj) => {

  //delcare new object to recreate obj with strings
  let tempObj = {}
  for (let key in obj) {
    // check if val is a number and then convert to a string
    if(typeof obj[key] === 'number') {
      tempObj[key] = obj[key].toString()
      //else if value is an object and not an Array, set temp object value to recursive call placing in obj[key] as an arg
    } else if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
      tempObj[key] = stringifyNumbers(obj[key])
      //else set temp obj val equal to obj[key]. this applies to all other data types ie array, boolean
      } else {
          tempObj[key] = obj[key]
      }
  }
  return tempObj
}

let obj = {
  num: 1,
  test: [],
  data: {
      val: 4,
      info: {
          isRight: true,
          random: 66
      }
  }
}


stringifyNumbers(obj)
