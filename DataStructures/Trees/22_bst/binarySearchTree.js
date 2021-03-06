//class to create node object
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

//class to create tree object w/methods
class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    let newNode = new Node(value);

    if (this.root === null) {
      //edge case if tree is empty; sets value as root
      this.root = newNode;
      return this;
    } else {
      let current = this.root; //current variable is set at root and is starting point for
      while (true) {
        //check if value is < or > than current.value
        if (value === current.value) return undefined; //edge case where duplicate value is added
        if (value < current.value) {
          if (current.left === null) {
            //inserts only if left is emplty
            current.left = newNode;
            return this;
          } else {
            current = current.left; //if something is already in left, we update current
          }
        } else if (value > current.value) {
          //conditional for when value is greater
          if (current.right === null) {
            //only inserts if nothing in right side
            current.right = newNode;
            return this;
          } else {
            current = current.right;
          }
        }
      }
    }
  }

  find(value) {
    if (this.root === null) return false;
    let current = this.root;
    let found = false;

    while (current && !found) {
      //loops as long as there are values in tree and we haven't found value
      if (value < current.value) { //if value is less, traverse left
        current = current.left;
      } else if (value > current.value) { //traverse right
        current = current.right
      } else {
        found = true //if neighter than must be equal. change boolean
      }
    }
    if (!found) return undefined //returns undefined if not found or node (current) if found
    return current
  }
  bfs() {
    const visited = []
    let node = this.root
    const queue = [node]

    while(queue.length) {
      // console.log(queue)
      node = queue.shift()
      visited.push(node.value)
      if(node.left) queue.push(node.left)
      if(node.right) queue.push(node.right)
    }
    return visited
  }

  dfsPre() { //tree processed node, left, right
    const visited =[] // function uses closure via helper traverse function to persist data in visisted array
    let curr = this.root

    function traverse(node) {
      visited.push(node.value)
      if(node.left) traverse(node.left)
      if(node.right) traverse(node.right)
    }
    traverse(curr)
    return visited
  }

  dfsPreNoHelper(root = this.root) { //tree processed node, left, right
    if(!root) return []

      //use of concat eliminates need for array variable and helper function w/closure
      return[root.value].concat(this.dfsPreNoHelper(root.left)).concat(this.dfsPreNoHelper(root.right))
  }

  dfsPost() { // tree processed l, r, node
    const visited =[]
    let curr = this.root

    function traverse(node) {
      if(node.left) traverse(node.left)
      if(node.right) traverse(node.right)
      visited.push(node.value)
    }
    traverse(curr)
    return visited
  }

  dfsInOrder(){ // tree processed left, node, right
    const visited =[]
    let curr = this.root

    function traverse(node) {
      if(node.left) traverse(node.left)
      visited.push(node.value)
      if(node.right) traverse(node.right)
    }
    traverse(curr)
    return visited
  }

  branchSums(root = this.root, arr=[]) {
    // invocation of helper function that will return the result array on completion

    helper(root, 0, arr)
    return arr
    //if root.left !== null sum+=root.value; return brancSums(root.left, sum+=root.value)
    //if no left or right node, push sum into arr
    function helper(node, total, arr) {

      //if node empty, exit function
      if (node === null) return

      //accumulates node value in variable
      const newTotal = total + node.value
      //conditional pushes newTotal into arr if at leaft node and exits function
      if(!node.left && !node.right) {
        arr.push(newTotal)
        return
      }
      //else recursively call the helper function for left and right nodes
      helper(node.left, newTotal, arr)
      helper(node.right, newTotal, arr)
    }

  }

  //helper function that takes in a node and accumulates node's value for each branch

}

let tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);
/*
        10
     6     15
   3   8      20
*/
console.log("-----");
// console.log(tree);
// console.log(tree.find(7));
// console.log('bfs: ',tree.bfs()) //[10,6,15,3,8,20] insertion order
console.log('dfsPre: ', tree.dfsPre()) //[10,6,3,8,15,20] export tree structure to easily be copied
// console.log('dfsPost: ',tree.dfsPost()) //[3,8,6,20,15,10]
// console.log('dfsInOrder: ',tree.dfsInOrder()) //[3,6,8,10,15,20] numerical order
// console.log('branchSums: ',tree.branchSums()) //[19,24,45]
console.log('dfsPreNoHelper: ', tree.dfsPreNoHelper())//[10,6,3,8,15,20] export tree structure to easily be copied
