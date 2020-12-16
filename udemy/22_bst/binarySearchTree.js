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
      console.log(queue)
      node = queue.shift()
      visited.push(node.value)
      if(node.left) queue.push(node.left)
      if(node.right) queue.push(node.right)
    }
    return visited
  }
}

let tree = new BinarySearchTree();
tree.insert(10);
tree.insert(5);
tree.insert(13);
tree.insert(11);
tree.insert(2);
tree.insert(16);
tree.insert(7);
/*
        10
     5     13
   2   7  11  16
*/
console.log("-----");
// console.log(tree);
// console.log(tree.find(7));
console.log(tree.bfs())