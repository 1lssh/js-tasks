function Calculator() {

	this.methods = {
		"+": (a, b) => a + b,
		"-": (a, b) => a - b
	};

	this.calculate = function (str) {

		let ops = str.split(' '),
			a = +ops[0],
			op = ops[1],
			b = +ops[2]

		if (!this.methods[op] || isNaN(a) || isNaN(b)) {
			return NaN;
		}

		return this.methods[op](a, b);
	}

	this.addMethod = function (name, func) {
		this.methods[name] = func;
	};
}
