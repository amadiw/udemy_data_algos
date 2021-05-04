//leet code version w/object

const getImportant = (employees, id) => {
  let count = 0

  //iterate through array of objects
  for(let employee of employees) {
    if(employee.id === id) {
      count += employee.importance
      //if employee has subordiantes, iterate through sub array and recursively call getImportant on subs
      if(employee.sub) {
        for(let sub of employee.sub){
          count += getImportant(employees, sub)
        }
      }
    }
  }
  return count
}

const employees = [ { id: 1, importance: 5, sub: [ 2, 3 ] },
  { id: 2, importance: 3, sub: [] },
  { id: 3, importance: 3, sub: [] } ]
  console.log(getImportant(employees, 1))

  //creating object from passed in array
