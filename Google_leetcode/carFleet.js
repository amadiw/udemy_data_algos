const carFleet = (target, position, speed) => {
  const cars = []
  let max = 0
  let count = 0

  for (let i = 0; i < position.length; i++) {

      cars.push([position[i], speed[i]])

  }
  cars.sort((a,b)=>b[0]-a[0]) //sorts descending by position, ie closest car to target

  //loop thorugh cars array and calc time
  //check if time is greater than max and if so reassign

  for (i = 0; i < cars.length; i++) {
    let time = (target - cars[i][0])/cars[i][1]
    if ( time > max) {
      count++
      max = time
    }
  }

  return count
};

let target = 12, position = [10,8,0,5,3], speed = [2,4,1,1,3]
console.log(carFleet(target, position, speed))//3
