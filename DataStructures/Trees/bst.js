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
  find(val) {
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


}

const tree = new BST();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3)
tree.insert(8)
tree.insert(20)
console.log(tree.bfs()); //[10,6,15,3,8,20]
// console.log(JSON.stringify(tree));
