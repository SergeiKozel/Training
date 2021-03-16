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






//---Logical operators---
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



//Switch
