class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function branchSums(root, arr=[]) {
  // invocation of helper function that will return the result array on completion
	helper(root, 0, arr)
	return arr
	//if root.left !== null sum+=root.value; return brancSums(root.left, sum+=root.value)
	//if no left or right node, push sum into arr
}

//helper function that takes in a node and accumulates node's value for each branch
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
