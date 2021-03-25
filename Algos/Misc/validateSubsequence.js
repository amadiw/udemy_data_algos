function isValidSubsequence(array, sequence) {
  // Write your code here.
	//return a boolean if all of the sequence is in the array
		//create a hash map of the sequence
		//iterate through the array, if hash[array[i]] then decrement

	let j = 0
	for (let i = 0; i < array.length; i++) {
		let currEl = array[i]

		//need while loop to iterate only up to sequence.length?
		if (j === sequence.length) break
		if (currEl === sequence[j]) {
			j++
		}
	}
	return j === sequence.length
}

console.log(isValidSubsequence([5,1,22,6,-1,8,10], [1,6,-1,10]))
