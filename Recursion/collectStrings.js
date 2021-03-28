const collectStrings = (obj, arr=[]) => {
  // let arr = []
  //determine if object value is a string and then push into an array
  //use recursive call to traverse obj

  for(let key in obj) {
      if (typeof obj[key] === 'object') {

          //by passing in arr, no need to use concat or helper function to persist arr
          collectStrings(obj[key], arr)
      } else if( typeof obj[key]==='string') {
          arr.push(obj[key])
      }
  }
  return arr
}

/*closure helper function
const collectStrings = obj => {
  let arr = []


  function helper(obj) {
    for(let key in obj) {
      if (typeof obj[key] === 'object') {
          arr = arr.concat(collectStrings(obj[key]))
      } else if( typeof obj[key]==='string') {
          arr.push(obj[key])
      }
  }
  }
  helper(obj)
  return arr
}
*/

// const collectStrings = obj => {
//     let arr = []
//     //determine if object value is a string and then push into an array
//     //use recursive call to traverse obj

//     for(let key in obj) {
//         if (typeof obj[key] === 'object') {
//             arr = arr.concat(collectStrings(obj[key]))
//         } else if( typeof obj[key]==='string') {
//             arr.push(obj[key])
//         }
//     }
//     return arr
// }

const obj = {
  stuff: "foo",
  data: {
      val: {
          thing: {
              info: "bar",
              moreInfo: {
                  evenMoreInfo: {
                      weMadeIt: "baz"
                  }
              }
          }
      }
  }
}

collectStrings(obj) // ["foo", "bar", "baz"])
