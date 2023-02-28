function aclean(arr) {
	let obj = {};
	let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

	for (let i = 0; i < arr.length; i++) {
		let sorted = arr[i].toLowerCase().split("").sort().join("");
		obj[sorted] = arr[i];
	}

	return Object.values(obj);
}



console.log(aclean(arr))