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
    return curr;
  }

  shift() {
    //remove from front ie head
    if (!this.head) return undefined;

    let curr = this.head;
    this.head = curr.next;
    this.length--;
    if (this.length === 0) {
      //if nothing left, make tail null
      this.tail = null;
    }
    return curr;
  }

  unshift(val) {
    //adds to front of list, head
    let newNode = new Node(val);
    let curr = this.head;

    if (!this.head) {
      //if list empty, add newNode as head
      this.head = newNode;
    } else {
      newNode.next = curr; //makes old head preceed new head
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(idx) {
    if (idx < 0 || idx >= this.length) return undefined;

    let count = 0;
    let curr = this.head;

    while (count < idx) {
      curr = curr.next;
      count++;
    }
    return curr;
  }

  set(val, idx) {
    let found = this.get(idx);
    if (!found) return false;
    // console.log(val);
    // console.log("found: ", found);
    found.val = val;
    return found;
  }
}

let list = new LinkedList();
console.log(list.push(2));
console.log(list.push(4));
console.log(list.push(6));
console.log(list.pop());
// console.log(list);
console.log(list.shift());
// console.log(list);
console.log(list.push(5));
console.log(list.push(6));
// console.log(list);
console.log(list.unshift(7));
// console.log(list);
// console.log(list.get(0));
// console.log(list.get(1));
// console.log(list.get(2));
// console.log(list.get(3));
// console.log(list.get(4));
console.log(list.set(69, 3));
console.log(list)
