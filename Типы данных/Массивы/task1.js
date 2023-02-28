let styles = ['Джаз', 'Блюз'];
styles.push('Рок-н-ролл');
styles.splice(Math.floor((styles.length - 1) / 2), 1, 'Классика');
console.log(styles.shift());
styles.unshift('Реп', 'Регги')

console.log(styles)