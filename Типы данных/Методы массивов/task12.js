function unique(arr) {
	let uniqueElements = []
	for (let i = 0; i < arr.length; i++) {
		if (!uniqueElements.includes(arr[i])) uniqueElements.push(arr[i])
	}
	return uniqueElements
}

let strings = ["кришна", "кришна", "харе", "харе",
	"харе", "харе", "кришна", "кришна", ":-O"
];

console.log(unique(strings));