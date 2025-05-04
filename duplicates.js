// Удали дубликаты из массива: [1, 2, 2, 3, 4, 4, 5]
// Ожидаемый результат: [1, 2, 3, 4, 5]
const array = [1, 2, 2, 3, 4, 4, 5];
console.log(array.filter((value, index, array) => array.indexOf(value)===index))
const array2 = [...new Set(array)];
console.log(array2)
const array3 = []; 
array.forEach(value => {
    if (!array3.includes(value)) {
        array3.push(value)
    }
})
console.log(array3)

// Строки без повторений:
// Из массива ['кот', 'пёс', 'кот', 'слон'] удали повторяющиеся строки.

const stringArray = ['кот', 'пёс', 'кот', 'слон'];
const newStringArray = [...new Set(stringArray)];
console.log(newStringArray)
console.log(newStringArray.filter((v,i,a) => a.indexOf(v)===i))
const newStringArray2 = [];
newStringArray.forEach(value => {
    if (!newStringArray2.includes(value)) {
        newStringArray2.push(value)
    }
})
console.log(newStringArray2)

// Смешанный массив:
// Удали дубликаты из массива: [1, '1', 2, '2', 2, 1]
// Объясни, почему остаются '1' и 1.
const mixedArray = [1, '1', 2, '2', 2, 1];
const mixedArrayNew = [...new Set(mixedArray)]
console.log(mixedArrayNew)
//ну строки и числа, потому 1 не равно '1'
console.log(mixedArrayNew.filter((value, index, array) => array.indexOf(Number(value)) == index))

//Без учёта регистра:
// Из массива ['Привет', 'привет', 'ПРИВЕТ'] оставь только одну версию слова.

const privet = ['Привет', 'привет', 'ПРИВЕТ'];
console.log(privet.map(word => word.toLowerCase()).filter((v,i,a) => a.indexOf(v) === i))

// Удалить дубликаты объектов по id:
// Из массива:
const input = [
    { id: 1, name: 'Анна' },
    { id: 2, name: 'Олег' },
    { id: 1, name: 'Анна' }
  ];
  
  const seenIds = new Set();

  console.log(seenIds)


  let names = ['Анна', 'Олег', 'анна', 'АННА', 'Олег'];
console.log ( names.map(name => name.toLowerCase()).filter((v,i,a) => a.indexOf(v) === i))

let nummers = [3, 1, 4, 3, 1, 2, 4];
let newnummers = [...new Set(nummers)]
console.log(newnummers)