class Node {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

class Stack {
  constructor() {
    this.first = null
    this.last = null
    this.size = 0
  }
  push(val) {
    const node = new Node(val)

    if(!this.first) {
      this.first = node
      this.last = node
    } else {
      let temp = this.first
      this.first.next = temp
    }
    return ++this.size
  }
}

const stack = new Stack()
stack.push(1)
stack.push(2)
stack.push(3)
stack.push(4)
console.log(stack)
