let arr = [1, 2, 3];

function shuffle(array) {
	let m = array.length, t, i;

	while (m) {
		i = Math.floor(Math.random() * m--);
		t = array[m];
		array[m] = array[i];
		array[i] = t;
	}

	return array;
}

console.log(shuffle(arr))
