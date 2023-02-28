let x = +prompt('Введите x', 0);
let n = +prompt('Введите n', 0);
function pow(x, n) {
return x ** n
}
if (!Number.isInteger(n)) {
alert('Допустимы только натуральные числа');
} else {
alert(pow(x, n))
}