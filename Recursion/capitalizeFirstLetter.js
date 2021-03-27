function capitalizeFirst (arr) {


  //base case : !arr.length
  if(!arr.length) return arr

  //for recursive case declare vars to mutate first character and then concat first char with rest of string
  let char = arr[0][0].toUpperCase()
  let word = char + arr[0].substring(1)

  //recursive case concat new word with result of func(arr.slice(1)
  return [word].concat(capitalizeFirst(arr.slice(1)))
}

capitalizeFirst(['car','taco','banana']); // ['Car','Taco','Banana']
