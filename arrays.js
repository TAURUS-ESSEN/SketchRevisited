'use strict';
const array = [10, 5, 120, 20, 8, 50];
//Сумма всех чисел в массиве:
console.log(array.reduce((acc,num) => acc+num,0));
// Поиск максимального числа:
let maxNumber = 0;
array.forEach( num => {
    maxNumber = maxNumber > num ? maxNumber : num;
})
console.log(maxNumber)

//Верни из массива строк только те, длина которых больше 5 символов.
const strArray = ['Верни', 'из', 'массива', 'строк', 'только', 'те', 'длина'];
console.log(strArray.filter(word => word.length > 5));

// Удаление дубликатов:
// Из массива [1, 2, 2, 3, 4, 4, 5] создай новый массив без повторений.
let array2 = [1, 2, 2, 3, 4, 4, 5];
let result2 = array2.filter((value, index, array)=> {
    return array.indexOf(value, index+1) === -1
})
console.log(result2)

// Соединить все строки в одну:
// Дан массив строк. Собери из него одну строку, разделяя слова пробелом
let str = strArray.join(" ");
console.log(str)
let array3 = [ "Дан массив строк.", "Собери из него одну строку,", "разделяя слова пробелом"];
console.log(array3.join(" "))

// Проверка, есть ли число больше 100:
// Верни true, если в массиве есть хотя бы одно число больше 100.
const array4 = [10, 5, 120, 20, 8, 50];
console.log(array4.some(value => value>100));

// Удвоить все значения:
// Создай новый массив, где каждое число умножено на 2.
console.log(array4.map(value => value*2))

// Удалить все отрицательные числа:
// Из массива [3, -1, 7, -5, 0, 4] оставь только положительные.
const array5 = [3, -1, 7, -5, 0, 4]; 
console.log(array5.filter(value => value >=0))

// Найти индекс первого чётного числа:
// Верни индекс первого числа, которое делится на 2 без остатка
const array6 = [3, 15, 8, 1, 9];
console.log(array6.findIndex((value) => value % 2 === 0))

// Отсортировать по убыванию:
// Отсортируй массив чисел от большего к меньшему: [3, 15, 8, 1, 9].
console.log(array6.sort((a,b)=> b -a))