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
    const visited =[]
    let curr = this.root

    function traverse(node) {
      visited.push(node.value)
      if(node.left) traverse(node.left)
      if(node.right) traverse(node.right)
    }
    traverse(curr)
    return visited
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
console.log('bfs: ',tree.bfs()) //[10,6,15,3,8,20] insertion order
console.log('dfsPre: ', tree.dfsPre()) //[10,6,3,8,15,20] export tree structure to easily be copied
console.log('dfsPost: ',tree.dfsPost()) //[3,8,6,20,15,10]
console.log('dfsInOrder: ',tree.dfsInOrder()) //[3,6,8,10,15,20] numerical order
