// Тема: Создание, добавление, удаление элементов массива
//Используйте методы, свойства массива.

// Создайте пустой массив arr. Выведите массив в консоль.
const arr = [];
console.log(arr);

// Заполните массив числами от 0 до 10.
// Выведите полученный массив в консоль.
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(arr);

// Добавьте в начало массива елементы a, b, c, d.
// Выведите полученный массив в консоль.
const arr = [1, 2, 3, 4]
arr.unshift('a', 'b', 'c', 'd')
console.log(arr);

// Удалите в массиве последние 5 элементов.
// Выведите полученный массив в консоль.
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
arr.pop();
arr.pop();
arr.pop();
arr.pop();
arr.pop();
console.log(arr);

// Удалите в массиве первые 3 элемента.
// Выведите полученный массив в консоль.
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
arr.shift();
arr.shift();
arr.shift();
console.log(arr);

// Выведите длину полученного массива.
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(arr.length);

// Выведите последний елемент массива.
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(arr [arr.length - 1]);

// Выведите первый елемент массива.
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(arr [0]);

// Замените первый елемент массива на строку 'new element'.
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
arr.unshift('new element');
console.log(arr);

// Создайте массив arr2. Заполните его числами 1,2,3,4. Используя метод shift(), удалите елемент и выведите удаленный еменент. (подсказка: не забудьте про переменную)

// Создайте массив arr3. Заполните его числами a,b,c,d. Используя метод unshift(), добавьте елемент и выведите длину масива (не используя метод length).

//Проверьте, что возвращает метод pop() (подсказка: не забудьте про переменную)
console.log(arr);
let a = arr.pop();
console.log(a); // возващает удаленный элемент

//Coздайте массив со строками 'My ', 'name ', 'is '. Добавьте в конец массива ваше имя. Сделайте слияние елементов массива и выведите строку в консоль.

//Coздайте массив arr с елементами от 1 до 5. Создайте массив arr2 с елементами от 6 до 10. Сделайте слияние массивов. Умножте первый и последний елементы массива.

//https://www.codewars.com/kata/511f0fe64ae8683297000001/train/javascript
//https://www.codewars.com/kata/523b4ff7adca849afe000035/train/javascript
//https://www.codewars.com/kata/55a70521798b14d4750000a4/train/javascript
//https://www.codewars.com/kata/571ec274b1c8d4a61c0000c8/train/javascript
//https://www.codewars.com/kata/5859d3325a8a0747180000c6/train/javascript
//https://www.codewars.com/kata/523b623152af8a30c6000027/train/javascript
//https://www.codewars.com/kata/523b66342d0c301ae400003b/train/javascript
//https://www.codewars.com/kata/534ea96ebb17181947000ada/train/javascript
//https://www.codewars.com/kata/53ee5429ba190077850011d4/train/javascript
//https://www.codewars.com/kata/557b5e0bddf29d861400005d/train/javascript
//https://www.codewars.com/kata/55ca77fa094a2af31f00002a/train/javascript
//https://www.codewars.com/kata/55f9bca8ecaa9eac7100004a/train/javascript
//https://www.codewars.com/kata/560ecf0cb040de130e00007d/train/javascript
//https://www.codewars.com/kata/56200d610758762fb0000002/train/javascript
//https://www.codewars.com/kata/571edd157e8954bab500032d/train/javascript
//https://www.codewars.com/kata/57f24e6a18e9fad8eb000296/train/javascript
//https://www.codewars.com/kata/588417e576933b0ec9000045/train/javascript
//https://www.codewars.com/kata/589478160c0f8a40870000bc/train/javascript
//https://www.codewars.com/kata/589519d1f0902e01af000054/train/javascript
//https://www.codewars.com/kata/59c287b16bddd291c700009a/train/javascript
//https://www.codewars.com/kata/59fc72fe235f93838b002235/solutions/javascript
//https://www.codewars.com/kata/5a023c426975981341000014/train/javascript
//https://www.codewars.com/kata/5a03b3f6a1c9040084001765/train/javascript
//https://www.codewars.com/kata/5a2e9ae2b6cfd7692a0000ba/train/javascript
//https://www.codewars.com/kata/5799a2d13467dbc64900094b/train/javascript
//https://www.codewars.com/kata/56aed32a154d33a1f3000018/train/javascript
//https://www.codewars.com/kata/564a6486c2070faee6000011/train/javascript
//https://www.codewars.com/kata/55a996e0e8520afab9000055/train/javascript
//https://www.codewars.com/kata/55a5bfaa756cfede78000026/train/javascript
//https://www.codewars.com/kata/53369039d7ab3ac506000467/train/javascript
//https://www.codewars.com/kata/5265326f5fda8eb1160004c8/train/javascript
//https://www.codewars.com/kata/53934feec44762736c00044b/train/javascript
//https://www.codewars.com/kata/544675c6f971f7399a000e79/train/javascript
//https://www.codewars.com/kata/551b4501ac0447318f0009cd/train/javascript
//https://www.codewars.com/kata/5966e33c4e686b508700002d/train/javascript
//https://www.codewars.com/kata/56c24c58e0c0f741d4001aef/train/javascript
//https://www.codewars.com/kata/580a094553bd9ec5d800007d/train/javascript
//https://www.codewars.com/kata/54c27a33fb7da0db0100040e/train/javascript
//https://www.codewars.com/kata/54c27a33fb7da0db0100040e/train/javascript












