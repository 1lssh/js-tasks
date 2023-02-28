function getSecondsToTomorrow() {
	let totalSecondsPerDay = 86400
	let now = Date.now()
	let today = new Date(now)
	let hours = today.getHours()
	let minutes = today.getMinutes()
	let seconds = today.getSeconds()
	return totalSecondsPerDay - ((hours * 3600) + (minutes * 60) + seconds)
}


console.log(getSecondsToTomorrow())