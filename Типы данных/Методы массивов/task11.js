let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };

let arr = [vasya, petya, masha];

let avrageAge = 0

function getAverageAge(users) {
	for (let i = 0; i < users.length; i++) {
		avrageAge += users[i].age
	}
	return avrageAge / users.length
}

console.log(getAverageAge(arr))