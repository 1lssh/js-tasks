let date = new Date(2012, 0, 0);

function getLocalDay(date) {

	let day = date.getDay();
	day == 0 ? day = 7 : day;

	return day;
}
console.log(getLocalDay(date))