let salaries = {
	"John": 100,
	"Pete": 300,
	"Mary": 250
};

function sumSalaries(salaries) {
	let sum = 0;
	for (value of Object.values(salaries)) {
		sum += value
	}
	return sum
}