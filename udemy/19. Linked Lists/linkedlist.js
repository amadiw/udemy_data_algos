class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;

    let curr = this.head;
    let prev = curr;

    while (curr.next) {
      prev = curr;
      curr = curr.next;
    }
    this.tail = prev; //makes 2nd to last new tail
    this.tail.next = null; //breaks link to old tail
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return curr
  }

  shift() { //remove from front ie head
    if (!this.head) return undefined

    let curr = this.head
    this.head = curr.next
    this.length--
    if (this.length === 0) {//if nothing left, make tail null
      this.tail = null
    }
    return curr
  }
}

let list = new LinkedList();
console.log(list.push(2));
console.log(list.push(4));
console.log(list.push(6));
console.log(list.pop())
console.log(list)
console.log(list.shift())
console.log(list)
