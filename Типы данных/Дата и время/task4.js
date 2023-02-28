let date = new Date(2015, 0, 2);

function getDateAgo(date, days) {
	let ms = +date
	return new Date(ms - (24 * 3600 * 1000) * days).getDate()
}

console.log(getDateAgo(date, 1));
console.log(getDateAgo(date, 2));
console.log(getDateAgo(date, 365));