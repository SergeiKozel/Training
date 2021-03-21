const str = 'Good';
const str1 = 'Morning';

console.log(`${str} ${str1} Jeff!`);
console.log(str.length)/2;//деление кол-ва символов
console.log(str[2]);//возврат символа

//---переменный---
// number
Infinity;
let a = "10" + 3
console.log(a)   //103

let a = "10" / 3
console.log(a)   //Infinity


NaN;
% - 'остаток от деления';
let x = 6;
let y = 3;
console.log(6 % 3); //6 - 3 - 3 = 0


// bigInt
(2 53-1) (т. е. 9007199254740991), или меньше, чем -(2 53-1)
console.log(typeof 32166461613131464661n);

// string
"" - "Двойные кавычки"
'' - 'Одинарные кавычки'
`` - `Обратные кавычки` ${…}

//boolean
true - '(истина)'
false - '(ложь)'

let y = '21';
console.log(y == 21); //true
console.log(y === 21);//false

//null
'ничего' 'пусто'

//undefined
'значение не было присвоено'

// object
const array = [1, 2, 3];

let obj = {
    name: 'Jeff'
};

let date = new Data();


//typeof
console.log(typeof str);
console.log(typeof str.length);

//symbol

a++// инкремент
--a //декремент


let a = +'10' + 2;
console.log(a)//преобразование строки в число

//---else if---
let x = -4;//negative and odd
let y = 5;// positive and even
let z = 0;

if (x % 2 == 0 && x != 0) {
    console.log('true');
} else
    console.log('false');


let x = 'Alice';
let y = 'Bob';
let z = 'Jeff';

if(y[0] == 'B' && y[y.length -1] == 'b') {
    console.log('Good');
} if(x[1] == 'c' || x.length == 6){
    console.log('Bad');
}

let x = 41;

let positive = (x >= 21) ? 'Adult' : (x < 21 && x >= 12) ? 'Teenager' : 'Kid';
console.log(positive)


//==========================================================================
//Logical operators
//&& (AND)
console.log( true && true );   // true
console.log( false && true );  // false
console.log( true && false );  // false
console.log( false && false ); // false

//|| (OR)
console.log( true || true );   // true
console.log( false || true );  // true
console.log( true || false );  // true
console.log( false || false ); // false

//'! (NOt)
console.log( !true ); // false
console.log( !0 ); // true

// '!! (DOUBLE NOT) transfer to boolean
console.log( !!'abc' ); //true
console.log( !!null ); //false
console.log( !!0 ); //false
console.log( !!5 ); //true

//=======================================================================
//Array
const arr = [];
const arr1 = new Array();
const arr2 = Array.of();// метод Array.of
console.log( arr )

const arr = [1, 2, 3, 4];
const arr1 = new Array(1, 2, 3);
const arr2 = Array.of(1, 2, 3, 4);
const arr = [1, 'b', null, '-8', {name; 'Bob' }, arr1, arr2];
//индекс массива начинается с 0,1,2, 3 ...
//длинна начинается с 1,2,3 ...

[1, "b", null, "-8", [object Object] {name: "Bob" }, [1, 2, 3], [1, 2, 3, 4]]

//обращение к элементам массива
console.log(arr); //выведение массива
console.log(arr.length);// найти длинну массива
console.log(arr [1]); // обращение  к элементу через его индекс
console.log(arr [arr.lenght - 1]); //последний элемент
console.log(arr [arr.lenght - 1] [2]); //элементы в массиве в массиве
console.log(arr [arr.lenght - 1] [- 1]); //undefined
const arr = [[1, 2], [3, 4], [5, 6]];
console.log(arr [1] [0]);

//изменение элемента массива
const arr = [1, 2, 3, 4, [1]];
arr[0] = 2;
console.log(arr); //[2, 2, 3, 4, 5]

const arr = [1, 2, 3, 4, 5];
arr[4][2] = 2;
console.log(arr); //[1, 2, 3, 4, [1, undefined, 2]]

//добавлнение элемента в конец
arr.push('y', 0, 9);
console.log(arr); //[1, 2, 3, 4, 'y', 0, 9]

//удаление последнего элемента
arr.pop();
arr.pop();
arr.pop(); // удалит 3

console.log(arr); //[1, 2, 3, 4] 5 удалил
let a = arr.pop();
console.log(a); // возващает удаленный элемент

//добавление элемента в начало массива, может добавлять любое кол-во
arr.unshift(0);
console.log(arr); //[0, 1, 2, 3, 4]
console.log(arr.unshift()); //возвращает новую длинну


//shift() - удаляет измассива первый элемент
const arrArr = [0, 1, 2, 3, 4];
let a = arrArr.shift();
console.log(arrArr);
console.log(a); //возвращает удаленный элемент

//undefined в массиве, пустая строка
const arr = [1, " ", 2, ,3];
console.log(arr); //[1, " ", 2, undefined, 3]
console.log(arr[1]); //" "

//================================================================
//Слияние элементов массива
const arr = ['I '];
const arr2 = ['am a '];
const arr3 = ['student'];

const newArr = arr + arr2 + arr3;
console.log(newArr); //"I am a student"

const arr4 = ['I ', 'am a ', 'student'];
console.log(arr4); //"I am a student"

let res = arr4[0] + arr4[1] + arr4[2];
console.log(res); //"I am a student"
console.log(typeof res); //"string"


const arr = [1, 2, 3];
const arr2 = [1, 1, 1];
const newArr = [];

let res = arr[0] + arr2[0];
let res1 = arr[1] + arr2[1];
let res2 = arr[2] + arr2[2];
newArr.push(res, res1, res2);
console.log(newArr); //[2, 3, 4]

//слияние массивов
const arr = [1, 2, 3];
const arr2 = [4, 5, 6];
arr.push(...arr2); //(...) <= spread operator
console.log(arr); // [1, 2, 3, 4, 5, 6]



