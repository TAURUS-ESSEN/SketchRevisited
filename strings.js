`use strict`;
let  string = 'Привет';
console.log(string.split("").reverse().join(""));
console.log(string.match(/[аоуие]/gi).length);

string = 'А роза упала на лапу Азора';
let newString = string.replace(/\s/gi,'').split("").reverse("").join("").toLowerCase();
console.log(newString);
console.log(newString === string.replace(/\s/gi,'').toLowerCase());

string = "стРОкА";
console.log(string.slice(0,1).toUpperCase()+string.slice(1).toLowerCase())
string = "стРОкА должНА бЫть с пЕрВОЙ бОльШой буКВы";
let result = string.split(" ").map(word => word.slice(0,1).toUpperCase()+word.slice(1).toLowerCase())
console.log(result);
let result2 = [];
string.split(" ").forEach(word => { 
    result2.push(word.slice(0,1).toUpperCase()+word.slice(1).toLowerCase()) })
console.log(result2)

string = 'м н о г о п р о б е л о в';
console.log(string.split(" ").join(""))

string = 'Салют'
console.log(repeatSalut(3))
function repeatSalut(n) {
    return string.repeat(n);
}

//Замени все вхождения слова "кот" на "пёс".
string = "кот торт слоон дерево кот стул ноутбук кот"
console.log(string.replaceAll('кот', 'пес'))



// Все строчные буквы сделать заглавными, и наоборот. Пример: 'ПрИвЕт' → 'пРиВеТ'
let letter = "ПрИвЕт"
console.log(letter.charCodeAt(0))
console.log(letter.charCodeAt(1))
console.log(letter.charCodeAt(2))
console.log(letter.charCodeAt(3))

result = letter.split("")
        .map(sign => {
            return sign = ((sign.charCodeAt(0) >=1040) && (sign.charCodeAt(0) <=1071))? sign.toLowerCase() : sign.toUpperCase()
        })
        .join("")
console.log(result);

// 10 Самое длинное слово: Найди самое длинное слово в строке. Верни ег
let langestWord = '';
string.split(" ").forEach(word => {
    langestWord = langestWord.length > word.length ? langestWord : word; 
})
console.log(langestWord)
