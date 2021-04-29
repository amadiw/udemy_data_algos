//naive solution

const countNodes = (root) => {
  if(!root) return 0


  return countNodes(root.left) + countNodes(root.right) + 1
  // console.log(node)

};
