class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinked {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;
    //store current tail in variable to return later
    const poppedNode = this.tail;
    //if length is 1, set head & tail to be null
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      //update tail to be previous node
      this.tail.prev = poppedNode;
      //set new tail's next to null
      this.tail.next = null;
      poppedNode.prev = null;
      //decrement length
      this.length--;
      //return value removed
      return poppedNode;
    }
  }

  shift() {
    if (this.length === 0) return undefined;
    const oldHead = this.head;

    if (this.length === 1) {
      //if length is 1 set head/tail null
      this.head = null;
      this.tail = null;
    } else {
      //update head to be next of old head
      this.head = oldHead.next;
      this.head.prev = null;
      oldHead.next = null;
      this.length--;
      return oldHead;
    }
  }

  unshift(val) {
    const newNode = new Node (val)

    if(this.length === 0) {
      this.head = newNode
      this.tail = newNode
    } else {
      this.head.prev = newNode
      newNode.next = this.head
      this.head = newNode
    }
    this.length++
    return this
  }


}

const list = new DoublyLinked();

list.push(1);
list.push(2);
list.push(3);

list.unshift(0);
console.log(list);
