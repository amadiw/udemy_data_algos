function twoNumberSum(array, targetSum) {

	//create hashmap
	let hashmap = {}

	//iterate through array and store in hashmap
	for (let elem of array) {
		let addend = targetSum - elem
		//create addend variable

		//if addend number is in hashmap, just return the addend and current element
		if (hashmap[addend]) {
			return [addend, elem]
		} else {
			hashmap[elem] = true  //add current element as key to hashmap
			console.log(hashmap)
		}
	}
	return [] //accounts for edge case where input is one array or there are no two numbers that sume to targe
}
