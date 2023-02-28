function extractCurrencyValue(str) {
	return isNaN(parseInt(str)) ? parseInt(str.slice(1)) : parseInt(str);
}
