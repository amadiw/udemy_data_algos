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
    const newNode = new Node(val);

    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(ind) {
    if (ind < 0 || ind >= this.length) return null;

    let count, curr;

    if (ind < this.length / 2) {
      count = 0;
      curr = this.head;
      while (count != ind) {
        curr = curr.next;
        count++;
      }
    } else {
      count = this.length - 1;
      curr = this.tail;
      while (count != ind) {
        curr = curr.prev;
        count--;
      }
    }
    return curr;
  }

  set(val, ind) {
    const foundNode = this.get(ind)
    if (foundNode) {
      foundNode.val = val
      return true
    }
    return false
  }

  insert(val, ind) {
    if(ind < 0 || ind > this.length) return false
    if(ind === 0) return this.unshift(val)
    if(ind === this.length) return this.push(val)

    const newNode = new Node(val)
    const prevNode = this.get(ind - 1)
    const aftNode = prevNode.next

    prevNode.next = newNode
    newNode.prev = prevNode
    newNode.next = aftNode
    aftNode.prev = newNode
  }

  remove(ind) {
    if(ind < 0 || ind >= this.length) return null
    if(ind === 0) return this.shift(ind)
    if(ind === this.length -1) return this.pop(ind)

    const removedNode = this.get(ind)
    const beforeNode = removedNode.prev
    const aftNode = removedNode.next

    beforeNode.next = removedNode.next
    aftNode.prev = removedNode.prev
    removedNode.prev = null
    removedNode.next = null
    this.length--

    return removedNode
  }
}

const list = new DoublyLinked();

list.push(1);
list.push(2);
list.push(3);
list.push(4)
list.push(5)

// list.get(0);
list.remove(3)
// list.remove(1)
console.log(list);
