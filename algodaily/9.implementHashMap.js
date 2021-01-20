class Hashmap {
  constructor() {
    // implement this
    this.storage = []
  }

  set(key, val) {
    // implement this
    // hash key and assign to index in this.storage
    const idx = this.hashStr(key)

    // determine if hash index exists and if not, add it to this.strage pushing in key & val into array
    if (!this.storage[idx]) {
      this.storage[idx] = []
      this.storage[idx].push([key, val])
    }
  }

  get(key) {
    // implement this
    // set idx variable equal to hash output
    const idx = this.hashStr(key)

    // if idx doesn't exist, retun undefined
    if (!this.storage[idx]) {
      return undefined
    }
    //iterate through that idx's array and if elem of this.storage[idx] === key passed in, then return value -> elem[1]
    for (let elem of this.storage[idx]){
     if (elem[0] === key) {
       return elem[1]
     }
    }
  }

  hashStr(str) {
    let finalHash = 0;
    for (let i = 0; i < str.length; i++) {
      const charCode = str.charCodeAt(i);
      finalHash += charCode;
    }
    return finalHash;

  }
}


