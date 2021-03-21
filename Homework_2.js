
//Название дня недели using switch
//1 - 'Monday', 2 - 'Tuesday', 3 - 'Wednesday', 4 - 'Thursday', 5 - 'Friday', 6 - 'Saturday', 7 - 'Sunday'. Any other
// number - 'Wrong day'.
function weekDay(day) {
    switch(day) {
        case 1:
            return 'Monday';

        case 2:
            return 'Tuesday';

        case 3:
            return 'Wednesday';

        case 4:
            return 'Thursday';

        case 5:
            return 'Friday';

        case 6:
            return 'Saturday';

        case 7:
            return 'Sunday';

        default:
            return 'Wrong day';
    }
}

console.log(weekDay(1));


    let numberOfDay = 1;

switch(numberOfDay) {
    case 0:
        console.log('Monday');
        break;
    case 1:
        console.log('Tuesday');
        break;
    case 2:
        console.log('Wednesday');
        break;
    case 3:
        console.log ('Thursday');
        break;
    case 4:
        console.log('Friday');
        break;
    case 5:
        console.log('Saturday');
        break;
    case 6:
        console.log('Sunday');

    default:
        console.log('Wrong day');
}

console.log(`WrongData ${numberOfDay}`)


//Using switch, if we get: zero, one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve it should
// log 1,2,3,4,5,6,7,8,9,10,11,12.
function switchNumber(number){
    switch(number) {
        case 0:
            return 'Zero';
        case 1:
            return 'One';
        case 2:
            return 'Two';
        case 3:
            return 'Three';
        case 4:
            return 'Four';
        case 5:
            return 'Five';
        case 6:
            return 'Six';
        case 7:
            return 'Seven';
        case 8:
            return 'Eight';
        case 9:
            return 'Nine';
        case 10:
            return 'Ten';
        case 11:
            return 'Eleven';
        case 12:
            return 'Twelve';
            }
}
console.log(switchNumber(7));

//Using switch 1,2,3,4,5 = working day; 6,7 = weekend; other numbers = 'Wrong data';
function workingWeek(days){
    switch (days){
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            return 'working day';
        case 6:
        case 7:
            return 'weekend';
    }
    return 'Wrong data';
}
console.log(workingWeek(1));

//School grades using switch: 1 - 'bad', 2 - 'unsatisfactory', 3 - 'satisfactory', 4 - 'good', 5 - 'excellent',
// other - 'Wrong input. Check you grade!'.
function schoolGrades(marks){
    switch (marks){
        case 1:
            return 'Bad';
        case 2:
            return 'unsatisfactory';
        case 3:
            return 'satisfactory';
        case 4:
            return 'good';
        case 5:
            return 'excellent';
         }
    return 'Wrong input. Check you grade!';
}

console.log(schoolGrades(1));

//Если число четное и положительное, верни - true иначе, false;
let num = 5;
let num2 = 10;
let num3 = -6;
let num4 = -3;

if (num % 2 == 0 && num != 0) {
    console.log('true');
} else
    console.log('false');
if (num2 % 2 == 0 && num2 != 0){
    console.log('true');
} else
    console.log('false');

if (num3 % 2 == 0 && num3 != 0) {
    console.log('true');
} else
    console.log('false');

if (num4 % 2 == 0 && num4 != 0) {
    console.log('true');
} else
    console.log('false');


//Если день недели от 1 до 5, верни "Weekday", 6-7 - "Weekend"
let day = 5;
let day1 = 2;
let day2 = 6;
let day3 = 7;


let result = (day >= 1 && day <= 5) ? 'workday' : (day > 5 && day <= 7) ? 'weekend' : 'others';
console.log(result);


//Если длина слова >= 8, и <= 12 и != 9, верни слово - "Good", если длина слова <= 11, и >= 2 и != 5, верни -
// "Not Good", если длина больше 12, верни - "TooLong" //use .length to get a length of the word.

let word = 'HelloThere';
let word1 = 'HelloThereHowAreYou';
let word2 = 'Hi';
let word3 = 'Nice';
let word4 = 'JavaScript';

if (word.length >= 8 &&  word.length <= 12 && word.length != 9) {
    console.log('Good');
if (word.length <= 11 &&  word.length >= 2 && word.length != 5) {
    console.log('Not Good');
    if (word.length > 12) {
        console.log('TooLong');


// Верни equal, если слова при конкатинации составляют точную фразу, и not equal, если нет.
        let a = 'My ';
        let b = 'name ';
        let c = 'is ';
        let d = 'Bob';
        let phrase = 'My name is Bob'; //equal
        let phrase2 = 'My name is ';   //not equal
        let phrase3 = 'My nameis Bob'; //not equal


// Верни 'positive', если number больше 0 и negative, если меньше 0  и zero, если 0.
        let number = 5;
        let number2 = 0;
        let number3 = -6;

        if (number > 0) {
            console.log('positive')
        }
        if (number < 0) {
            console.log('negative')
        }
        if (number = 0) {
            console.log('zero')
        }


//!Все ли 4 числа положительные, четные и не равны 0? Если да, верни 'true', иначе - 'false';
        let numb = 5;
        let numb2 = 0;
        let numb3 = -6;
        let numb4 = 6;

        if (numb, numb2, numb3, numb4 % 2 == 0 && numb, numb2, numb3, numb4 > 0) {
            console.log('true');
        } else {
    console.log('false');
}


//Начинается ли слово с буквы N и заканчивается на 'd'? Если да, выведи 'Yes', если нет - "No".
// подсказка, чтобы узнать последнюю букву console.log(str[str.length - 1]);
let str = 'Neverland';
let str1 = 'Nike';
let str2 = 'Work';

if (str[0] == 'N' && str[str.length - 1] == 'd' ) {
    console.log('Yes');
    } else {
    console.log('No');
    }


//Является ли человек, школьником? Ему больше 7 и меньше 19, выведи = 'student'; меньше 6 = 'kid'; больше 18  = 'adult';
let human = 12;
let human1 = 5;
let human2 = 18;
let human3 = 21;

if (human1 >= 7 && human1 < 19) {
    console.log('student');
} else if (human1 < 6){
    console.log('kid');
} else if (human1 > 18){
    console.log('adult');
}

//Если длина номера телефона равна 10 или 11 цифрам, выведи 'real', если нет - 'fake';
let phoneNumber = '+1918909090';
let phoneNumber1 = '+191890909';
let phoneNumber2 = '+19189090901';

if (phoneNumber.length == 10 || phoneNumber.length == 11 ){
console.log('real')
    } else {
console.log('fake')
    }


//numA и numB четные числа. Если да, вывод 'Yes', other 'No'.
numA = 8;
numB = 2;

        if (numA  % 2 == 0) {
            console.log('yes');
        }  else {
            console.log('no');
        } if (numB  % 2 == 0) {
            console.log('yes');
        }  else {
            console.log('no');
        }

//среди 3х чисел есть хотя бы 2 одинаковых. Если да, вывод 'Yes', other 'No'
let numberOne = 2;
let numberTwo = 3;
let numberTree = 2;


//хотя бы одно из 3х чисел - четное. Если да, вывод 'Yes', other 'No'
let numberOne1 = 21;
let numberTwo2 = 3;
let numberTree3 = 23;



//Напишите функцию, которая возвращает меньшее число. Если числа равны, вернуть их сумму.

function minNumber(a, b, c){

}
// console.log(minNumber(5, 8, 2));
// console.log(minNumber(15, -8, 12));
// console.log(minNumber(15, 15, 15));


//Определить четное или не четное число. Если число четное, вернуть Even, не четное - Odd;

function evenOdd(num){

    if(num % 2 == 0){
        return 'Even';
    }
    return 'Odd';
}
console.log(evenOdd(5)); //Odd
console.log(evenOdd(-8)); //Even
console.log(evenOdd(0)); //Even
evenOdd(5); //Odd
evenOdd(-8); //Even
evenOdd(0); //Even


//Если число больше 0, вернуть - positive, меньше - negative, 0 - zero;
function numberValue(num)function numberValue(num){
            if (num < 0) {
                return 'negative';
            } if (num > 0){
                return 'positive';
            }
            else {
                return 'zero';
            }
        }
// console.log(numberValue(9)); //positive
// console.log(numberValue(-9)); //negative
// console.log(numberValue(0)); //0

//Напишите функцию, которая возвращает true, если число негативное и четное, false - ecли число негативное и не четное, разделите число на 2,
// если число позитивное и четное, умножте на 3, если число позитивное и не четное. Выведите 'zero', если число равно 0.
function simpleMath(num){
            if (num < 0 && num % 2 == 0) {
                return 'true';
            } if (num < 0 && num % 2 != 0){
                return 'false';
            } if (num > 0 && num % 2 == 0) {
                return num / 2;
            } if (num > 0 && num % 2 != 0) {
                return num * 2;
            } else {
                return 'zero';
            }
        }
// console.log(simpleMath(9));
// console.log(simpleMath(-9));
// console.log(simpleMath(10));
// console.log(simpleMath(-10));
// console.log(simpleMath(0));

//Выведите сумму двух наибольших чисел из 3х.
function sumOfTwo(one, two, tree){

}

// console.log(sumOfTwo(3, 0, -1));
// console.log(sumOfTwo(-3, 0, -1));
// console.log(sumOfTwo(13, 10, -1));
// console.log(sumOfTwo(30, 0, -11));
// console.log(sumOfTwo(36, 100, -41));


//Измените знак числа
function changeSign(num){

}
// console.log(changeSign(9)); // -9
// console.log(changeSign(-5)); // 5
// console.log(changeSign(10)); // -10
// console.log(changeSign(-12)); // 12


//Выведите сезон года
// "Winter", если месяц = 1, 2 или 12;
// "Spring", если месяц = 3, 4 или 5;
// "Summer", если месяц = 6, 7 или 8;
// "Fall", если месяц = 9, 10 или 11.
function season(month){
          switch (month) {
              case 1:
              case 2:
              case 12:
                  return 'Winter';
              case 3:
              case 4:
              case 5:
                  return 'Spring';
              case 6:
              case 7:
              case 8:
                  return 'Summer';
              case 9:
              case 10:
              case 11:
                  return 'Fall';

          }

}
console.log(season(12));
console.log(season(2));
console.log(season(6));
console.log(season(8));


//From_codewars-------------------------------------------

//https://www.codewars.com/kata/572059afc2f4612825000d8a/solutions/javascript

        function howManydays(month){
            switch (month){
                case 2: return 28
                case 4:
                case 6:
                case 9:
                case 11: return 30
            }
            return 31
        }


//https://www.codewars.com/kata/515e188a311df01cba000003/train/javascript
function getPlanetName(id){
    var name = id;
    switch(id){
        case 1:
            name = 'Mercury';
            break;
        case 2:
            name = 'Venus';
            break;
        case 3:
            name = 'Earth';
            break;
        case 4:
            name = 'Mars';
            break;
        case 5:
            name = 'Jupiter';
            break;
        case 6:
            name = 'Saturn';
            break;
        case 7:
            name = 'Uranus';
            break;
        case 8:      name = 'Neptune'
    }
    return name;
}
//https://www.codewars.com/kata/5296455e4fe0cdf2e000059f
function calculate(a, x, b) {
    switch(x) {
        case '+':
            return a+b;
        case '-':
            return a-b;
        case '*':
            return a*b;
        case '/':
            return b === 0  ? null : a/b;
        default:
            return null;
    }
}
//https://www.codewars.com/kata/57356c55867b9b7a60000bd7/train/javascript


        function basicOp(operation, value1, value2) {
            switch(operation) {
                case '+':
                    return value1 + value2;
                case '-':
                    return value1 - value2;
                case '*':
                    return value1 * value2;
                case '/':
                    return value1 === 0  ? null : value1/value2;
                default:
                    return null;
            }
        }

//https://www.codewars.com/kata/5808dcb8f0ed42ae34000031/train/javascript
function switchItUp(number){
    switch(number) {
        case 0:
            return 'Zero';
        case 1:
            return 'One';
        case 2:
            return 'Two';
        case 3:
            return 'Three';
        case 4:
            return  'Four';
        case 5:
            return 'Five';
        case 6:
            return 'Six';
        case 7:
            return 'Seven';
        case 8:
            return 'Eight';
        case 9:
            return 'Nine';
        default:
            return 'Unknown number';
    }
}
//https://www.codewars.com/kata/5810085c533d69f4980001cf/train/javascript

        function calculator (a,b,sign) {
            if ((typeof a === 'number') && (typeof b === 'number')) {

                switch (sign) {
                    case '+':
                        return a + b;
                    case '-':
                        return a - b;
                    case '*':
                        return a * b;
                    case '/':
                        return a / b;

                }
            }
            return 'unknown value';
        }


//https://www.codewars.com/kata/53da3dbb4a5168369a0000fe/train/javascript
function even_or_odd(number) {
    if (number % 2 === 0) {
        return("Even");
    }
    else
        return("Odd");
    }

//https://www.codewars.com/kata/55cbd4ba903825f7970000f5/train/javascript

        function getGrade (s1, s2, s3) {
            avg = (s1+s2+s3)/3;
            if (avg < 60)  return "F";
            else if (avg < 70) return "D";
            else if (avg < 80) return "C";
            else if (avg < 90) return "B";
            else return "A";
        }

//https://www.codewars.com/kata/56368f37d464c0a43c00007f/solutions/javascript //switch
        const calculate = (a, op, b) => {
            switch (op) {
                case "+": return a + b
                case "-": return a - b
                case "*": return a * b
                case "/": return b ? a / b : null
            }
            return null
        }

//https://www.codewars.com/kata/56530b444e831334c0000020/train/javascript

        function chromosomeCheck(sperm) {
            return sperm == 'XY' ? 'Congratulations! You\'re going to have a son.'
           : 'Congratulations! You\'re going to have a daughter.'
               }

//https://www.codewars.com/kata/57089707fe2d01529f00024a/train/javascript

//https://www.codewars.com/kata/57158fb92ad763bb180004e7/train/javascript //use ``
        function rainAmount(mm){
            if (mm < 40) {
                return `You need to give your plant ${40 - mm}mm of water`;
            }
            else {
                return "Your plant has had more than enough water for today!";
            }
        }

//https://www.codewars.com/kata/571f832f07363d295d001ba8/train/javascript

//https://www.codewars.com/kata/574b3b1599d8f897470018f6/train/javascript

//https://www.codewars.com/kata/5761a717780f8950ce001473/solutions/javascript
        function  calculateAge(a, b) {
            if (b > a && b - a != 1) {
                return `You are ${b - a} years old.`
            } if (b < a && b - a != -1){
                return `You will be born in ${a - b} years.`
            } if (a === b){
                return `You were born this very year!`
            } if (b - a == -1){
                return `You will be born in 1 year.`
            }
            else return `You are 1 year old.`
        }



//https://www.codewars.com/kata/57a429e253ba3381850000fb/solutions

        function bmi(weight, height) {
            let result = weight / height ** 2;
            if (result <= 18.5) {
                return 'Underweight';
            }
            if (result <= 25.0) {
                return 'Normal';
            }
            if (result <= 30.0) {
                return 'Overweight';
            }
            if (result > 30.0) {
                return 'Obese';
            }
        }


        function bmi(weight, height) {
            let result = weight / height ** 2;
            return bmi <= 18.5 ? 'Underweight'
                : bmi <= 25.0 ? 'Normal'
                    : bmi <= 30.0 ? 'Overweight'
                        :  'Obese';

        }
//https://www.codewars.com/kata/57b58827d2a31c57720012e8/train/javascript //toFixed(2)

        function fuelPrice(litres, pricePerLitre) {
            if (litres >= 2 && litres < 4) {
                return +(pricePerLitre * litres - litres * 0.05).toFixed(2);
            } else if (litres >= 4 && litres < 6) {
                return +(pricePerLitre * litres - litres * 0.1).toFixed(2);
            } else if (litres >= 6 && litres < 8) {
                return +(pricePerLitre * litres - litres * 0.15).toFixed(2);
            } else if (litres >= 8 && litres < 10) {
                return +(pricePerLitre * litres - litres * 0.20).toFixed(2);
            } else {
                return +(pricePerLitre * litres - litres * 0.25).toFixed(2);
            }
        }


        function fuelPrice(litres, pricePerLiter) {
            let discount = Math.min(Math.floor(litres/2) * 0.05, 0.25);
            let price = litres * (pricePerLiter - discount);
            return Math.round(price*100) / 100;
        }


//https://www.codewars.com/kata/57f022a6cba9da84a3000095

//https://www.codewars.com/kata/583710ccaa6717322c000105/train/javascript

//https://www.codewars.com/kata/5875b200d520904a04000003/solutions/javascript

//https://www.codewars.com/kata/5ab6538b379d20ad880000ab/train/javascript
        const areaOrPerimeter = function(l , w) {
            if (l == w){
                return l * w;
            } else {
                return (l + w) * 2;
        }
        }


        const areaOrPerimeter = function(l , w) {
            return l == w ? l * w : (l + w) * 2;
        }

//https://www.codewars.com/kata/52ceafd1f235ce81aa00073a/train/javascript

//https://www.codewars.com/kata/55192f4ecd82ff826900089e/train/javascript

// https://www.codewars.com/kata/55cb632c1a5d7b3ad0000145/train/javascript

//https://www.codewars.com/kata/chuck-norris-vii-true-or-false-beginner

//https://www.codewars.com/kata/571f832f07363d295d001ba8/train/javascript

        function trueOrFalse(val){
            if (val){
                return 'true';
        } else {
                return 'false';
        }
        }

        function trueOrFalse(val){
            return !val ? 'false':'true'
        }
//https://www.codewars.com/kata/59ca8246d751df55cc00014c/train/javascript
        function hero(bullets, dragons){
            return bullets >= dragons * 2
        }
