  const mergeTwoLists = (l1, l2) => {
    // let dummyHead = {val: 0, next: null}; //create new dummyHead node
    // let curr = dummyHead; //dummyHead node pointerK

    // console.log(l1)
    // console.log(l2)
    // while (l1 && l2) {
    //   if (l1.val <= l2.val) {
    //     curr.next = l1; //sets node to l1 list
    //     l1 = l1.next; //advances to next node in l1 list
    //   } else {
    //     curr.next = l2;
    //     l2 = l2.next;
    //   }
    //   curr = curr.next; //updates curr to next node
    // }

    // //edge case where lists aren't same length
    // if (l1) {
    //   curr.next = l1;
    // } else if (l2) {
    //   curr.next = l2;
    // }
    // return dummyHead.next;

    /* recursive solution */

    if (!l1) return l2
    if (!l2) return l1

    if (l1.val < l2.val) {
      l1.next = mergeTwoLists(l1.next, l2)
      return l1
    } else {
      l2.next = mergeTwoLists(l2.next, l1)
      return l2
    }

  };

  const intersection = (l1, l2) => {
    let p1 = l1;
    let p2 = l2;
    console.log("test: ", !l1);
    //check if heads are null
    if (!l1 && !l2) return null;

    //traverse both lists with pointers
    while (p1 != p2) {
      p1 = p1.next;
      p2 = p2.next;
      console.log("p2", p2);

      if (p1 === p2) {
        return p1;
      }

      if (!p1) {
        p1 = l2;
      } else if (!p2) {
        p2 = l1;
      }
    }
  };

  const deleteDuplicates = (l1) => {
    let curr = l1;

    while (curr && curr.next) {
      if (curr.val === curr.next.val) {
        curr.next = curr.next.next;
      } else {
        curr = curr.next;
      }
    }
    return l1;
  };

  const palindrome = (l1) => {
    let fast = l1;
    let slow = l1;

    while (fast && fast.next) {
      //fast.next is for even lists which will hit null
      slow = slow.next;
      fast = fast.next.next; //moves to end of list twice as fast
    }
    fast = l1;
    slow = reverse(slow); //slow pointer is at middle of list. reverse function is used to reverse 2nd half in place

    while (slow) {
      if (slow.val !== fast.val) {
        return false;
      }
      return true;
    }
    function reverse(head) {
      let prev;
      let next;

      while (head) {
        //[1, 2, 3, 4]
        next = head.next; //2, 3, 4, null
        head.next = prev; //null, 1, 2, 3
        prev = head; // 1, 2, 3, 4
        head = next; //2, 3, 4, null
      }
      return prev;
    }
  };

  const nextGreatestNode = (l1) => {
    //creates array of linked list values
    let nodeVals = [];
    while (l1) {
      nodeVals.push(l1.val);
      l1 = l1.next;
    }

    let result = new Array(nodeVals.length).fill(0); //creates result array of 0s
    let stack = []; //to process node values

    for (let i = 0; i < nodeVals.length; i++) {
      while (stack.length && nodeVals[stack[stack.length - 1]] < nodeVals[i])
        result[stack.pop()] = nodeVals[i];
      stack.push(i);
    }
    return result;
  };

  const oddEven = (head) => {
    if (!head || !head.next) return head

    let oddHead = head
    let evenHead = head.next
    let evenStart = evenHead

    while (evenHead && evenHead.next) { //as long as we haven't traversed to end of even list
      oddHead.next = evenHead.next //sets next odd node
      oddHead = oddHead.next //advances node

      evenHead.next = oddHead.next //sets next even node
      evenHead = evenHead.next
    }
    oddHead.next = evenStart
    return head
  }

  const l1 = {
  "val":1,
  "next":{"val":3,
  "next":{"val":5,
  "next":{"val":7,
  "next":{"val":9,
  "next":null}}}}}

  const l2 = {
    "val":2,
    "next":{"val":4,
    "next":{"val":6,
    "next":{"val":8,
    "next":{"val":10,
    "next":null}}}}}

  console.log(JSON.stringify(mergeTwoLists(l1, l2))) // 1,2,3,4,5 -> 1,3,5,2,4
