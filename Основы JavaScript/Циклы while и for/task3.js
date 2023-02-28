let value;
while (true) {
	value = prompt('Введите число больше 100', 0);
	if (value > 100 || value == null) {
		break;
	}
}