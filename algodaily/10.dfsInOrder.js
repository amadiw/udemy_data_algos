function inorderTraversal(root) {
  const visited = [];
  traverse(root, visited);
  return visited;
}

//declare helper function to traverse
//uses recursion traverse nodes
//need to declare queue data structure to store visited?
//in order is left child, root, right child
//this.left, push, this.right

function traverse(root, visited) {
  if (root.left) traverse(root.left, visited);
  visited.push(root.val);
  if (root.right) traverse(root.right, visited);
}
