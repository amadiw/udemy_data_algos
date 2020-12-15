//Recursive function

function findClosestValueInBst(tree, target, closest=Infinity) {
  // Write your code here.
	if (tree === null) return closest

	if (Math.abs(target - closest) > Math.abs(target - tree.value)) {
		closest = tree.value //assigns smallest difference to closest variable
	}
	if (target < tree.value) { //if target is smaller than current node,
		return findClosestValueInBst(tree.left, target, closest)
	} else if (target > tree.value) {
		return findClosestValueInBst(tree.right, target, closest)
	} else {
		return closest
	}
}

//iteritive solution
function findClosestValInBst(tree, target) {
  // Write your code here.

	//traverse tree based on whether target is greater or less than current node
	//keep track of absolute value of closest node

	let maxClosest = Infinity
	let current = tree

	while (current !== null) {
		if (Math.abs(target - maxClosest) > Math.abs(target - current.value)) {
			maxClosest = current.value
		}
		if (target < current.value) {
			current = current.left
		} else if (target > current.value) {
			current = current.right
		} else  {
			break
		}
	}
	return maxClosest
}


