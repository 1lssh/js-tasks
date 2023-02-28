const formatDate = (date) => {
	let dateNow = new Date();
	let diff = (dateNow - date) / 1000;
	return diff <= 1
		? "прямо сейчас"
		: diff <= 30
			? "30 сек. назад"
			: diff <= 30000
				? "5 мин. назад"
				: format(new Date(dateNow - diff * 1000));
	function format(basedate) {
		let str =
			formatPlusZero(basedate.getDate().toString(), 0) +
			"." +
			formatPlusZero(basedate.getMonth().toString(), 1) +
			"." +
			basedate.getFullYear().toString().slice(2) +
			" " +
			basedate.getHours().toString() +
			":" +
			basedate.getMinutes().toString();
		return str;

		function formatPlusZero(strData, plus) {
			return strData.length < 2 ? "0" + (Number(strData) + plus) : strData;
		}
	}
};