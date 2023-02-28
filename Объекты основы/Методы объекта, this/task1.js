let calculator = {
	x: 0,
	n: 0,
	read() {
		this.x = +prompt("Первое значение")
		this.n = +prompt("Второе значение")
	},
	sum() {
		return this.x + this.n;
	},
	mul() {
		return this.x * this.n;
	}
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());