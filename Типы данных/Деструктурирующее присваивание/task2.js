let salaries = {
	"John": 100,
	"Pete": 300,
	"Mary": 250
};

function topSalary(salaries) {
	let topSal = { key: null, value: 0 }
	for (let [key, value] of Object.entries(salaries)) {
		if (topSal.value < value) topSal = { key, value }
	}
	return topSal.key
}

console.log(topSalary(salaries))