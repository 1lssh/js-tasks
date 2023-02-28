function sumInput() {
	let arr = [];

	while (true) {
		let value = prompt("num?", 0);
		if (!isFinite(value) || value === null || value === "") break;
		arr.push(+value);
	}

	let sum = 0;
	for (let number of arr) {
		sum += number;
	}
	return sum;
}

alert(sumInput());