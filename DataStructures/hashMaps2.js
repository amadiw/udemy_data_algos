//basic hash function

const hash = (key, arrayLen) => {
  let total = 0
  let prime = 31

  for(let i = 0; i < Math.min(key.length, 100); i++) {
    let char = key[i]
    let value = char.charCodeAt(0) - 96
    total = (total + value + prime) % arrayLen
  }
  return total
}

// console.log(hash("pink", 10))
// console.log(hash("orange", 10))
// console.log(hash("amadi", 10))

class Hash {
  constructor(size = 4){
    this.keyMap = new Array(size)
  }

  hash(key) {
    let total = 0
    let prime = 31

    for (let i = 0; i < Math.min(key.length, 100); i++){
      let char = key[i]
      let value = Math.abs(char.charCodeAt(0) - 96)
      total = (total * prime + value) % this.keyMap.length
    }
    return total
  }

  set(key, val) {
    let index = this.hash(key)
    // console.log(index)
    if(!this.keyMap[index]) {
      this.keyMap[index] = []
    }
    this.keyMap[index].push([key, val])
    return this.keyMap[index]
  }

  get(key) {
    let index = this.hash(key)

    if(this.keyMap[index]) {
      for(let i = 0; i < this.keyMap[index].length; i++) {
        if(this.keyMap[index][i][0] === key){
          return this.keyMap[index][i][1]
        }
      }
    }
    return 'not found'
  }

  values(){
    let results = []

    for(let i = 0; i < this.keyMap.length; i++) {
      if(this.keyMap[i]){
        for(let j=0; j < this.keyMap[i].length; j++) {
          if(!results.includes(this.keyMap[i][j][1])) //removes duplicate values
          results.push(this.keyMap[i][j][1])
        }
      }
    }
    return results
  }
  keys(){
    let results = []

    for(let i = 0; i < this.keyMap.length; i++) {
      if(this.keyMap[i]){
        for(let j=0; j < this.keyMap[i].length; j++) {
          if(!results.includes(this.keyMap[i][j][0])) //removes duplicate values
          results.push(this.keyMap[i][j][0])
        }
      }
    }
    return results
  }

}

const hashMap = new Hash()
hashMap.set("101", "amadi")
hashMap.set("101", "dog")
hashMap.set("201", "asha")
hashMap.set("01", "asha")

// console.log(hashMap.get("101"))
// console.log(JSON.stringify(hashMap))
console.log(hashMap.keys())
