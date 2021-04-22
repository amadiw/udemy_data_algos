class Node {
  constructor(val) {
    this.value = val;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(val) {
    const newNode = new Node(val);

    if (!this.root) {
      this.root = newNode;
      return this;
    }
    let curr = this.root;
    while (curr) {
      if (val === curr.value) return undefined;
      if (val < curr.value) {
        if (!curr.left) {
          curr.left = newNode;
          return this;
        }
        curr = curr.left;
      } else {
        if (!curr.right) {
          curr.right = newNode;
          return this;
        }
        curr = curr.right;
      }
    }
  }

  insertRecursive(val) {
    let node = new Node(val)

    const search = curr => {
      if(val < curr.value) {
        if(!curr.left) {
          curr.left = node
        } else {
          search((curr.left))
        }
      } else if(val > curr.value) {
        if(!curr.right) {
          curr.right = node
        } else {
          search(curr.right)
        }
      }
    }
    search(this.root)
  }

  min() {
    let curr = this.root

    while(curr.left) {
      curr = curr.left
    }
    return curr.value
  }

  max(){
    let curr = this.root

    while(curr.right) {
      curr = curr.right
    }
    return curr.value
  }

  contains(val) {
    if(!this.root) return false
    let curr = this.root
    let found = false

    while(curr && !found) {
      if(val < curr.value) {
        curr = curr.left
      } else if(val > curr.value) {
        curr = curr.right
      } else {
        found = true
      }
    }
    if(!found) return false
    return curr.value
  }
  bfs() {
    const results = []
    let node = this.root
    const queue = [node]

    while(queue.length) {
      node = queue.shift()
      results.push(node.value)
      //process nodes in queue
      if(node.left) queue.push(node.left)
      if(node.right) queue.push(node.right)
      //push node into queue
    }
    return results
  }
  dfsPre() {
    const results = []
    let node = this.root

    const traverse = node => {
      results.push(node.value)
      if(node.left) traverse(node.left)
      if(node.right) traverse(node.right)
    }
    traverse(node)
    return results
  }

  dfsPost(){
    const results = []
    let node = this.root
    const traverse = node => {
      if(node.left) traverse(node.left)
      if(node.right) traverse(node.right)
      results.push(node.value)
    }
    traverse(node)
    return results
  }

  dfsInOrder(){
    const results = []
    let node = this.root

    const traverse = node => {
      if(node.left) traverse(node.left)
      results.push(node.value)
      if(node.right) traverse(node.right)
    }
    traverse(node)
    return results
  }

}



  /*
   10
  /  \
 6   15
3  8   20
  */
const tree = new BST();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3)
tree.insert(8)
tree.insert(20)
// console.log(tree.bfs()); //[10,6,15,3,8,20]
// console.log(tree.dfsPre()) //[10,6,3,8,15,20]
// console.log(tree.dfsPost()) //[3,8,6,20,15,10]
console.log(tree.dfsInOrder()) //[3,6,8,10,15,20 ]

// tree.insertRecursive(50)
// console.log(tree.min())
// console.log(JSON.stringify(tree))
