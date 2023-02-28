function readNumber() {
	let num
	do {
		num = prompt('num?', 0)
	} while (!isFinite(num))

	if (num === null || num === '') return null;

	return +num;
}