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

  insert(val, idx) {
    if (idx < 0 || idx > this.length) return false;
    if (idx === 0) return !!this.unshift(val);
    if (idx === this.length) return !!this.push(val);

    let newNode = new Node(val);
    let prev = this.get(idx - 1);
    let temp = prev.next;

    prev.next = newNode; //left node is now pointing to newNode
    newNode.next = temp.next; //new node is now pointing to node previously next to prev
    this.length++;
    return true;
  }
}

const mergeTwoLists = (l1, l2) => {
  let dummyHead = new Node(); //create new dummyHead node
  let curr = dummyHead; //dummyHead node pointerK

  while (l1 && l2) {
    if (l1.val <= l2.val) {
      curr.next = l1; //sets node to l1 list
      l1 = l1.next; //advances to next node in l1 list
    } else {
      curr.next = l2;
      l2 = l2.next;
    }
    curr = curr.next; //updates curr to next node
  }

  //edge case where lists aren't same length
  if (l1) {
    curr.next = l1;
  } else if (l2) {
    curr.next = l2;
  }
  return dummyHead.next;
};

let l1 = new LinkedList();
let l2 = new LinkedList();
l1.push(2);
l1.push(4);
l1.push(6);
l2.push(1);
l2.push(3);
l2.push(5);

console.log("mergedList: ", mergeTwoLists(l1, l2));
