//  const numberOfFilms = +prompt('сколько фильмов вы уже посмотрели?', '');
// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };
// const a = prompt('Один из последних просмотренных фильмов?', ''),
//       b = prompt('На сколько оцените его?', ''),
//       c = prompt('Один из последних просмотренных фильмов?', ''),
//       d = prompt('На сколько оцените его?', '');

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

// console.log (personalMovieDB);

// // git status - в какой ветке мы сейчас находимся.
// // git config --global user.name "artsiom" - задаем имя для глобального репазитория.
// // git add -A  -- добовляет все файлы в индекс
// // git add название файла.css
// // git add *.css  -- все файлы с расширением css переместятся в индекс
// // git commit -a -m"first commit"  -- буква а означает что мы добавляем все файлы, буква м означает meseng описание комита
// // git log  -- просмотр всех коммитов каторые были созданны.
// // 1 шаг - git status, 2 шаг - git add -A, 3 шаг - git commit -a -m"first commit", 4 шаг - git push -u origin master

// // создание репазитория 16 урок с 10 минуты


// // условия 20 ур.


// // начинаем с If условия else это продолжение условия, else if если нет тогда еще одно условие

// if (4 == 4){
//     console.log('ok');
// } else {
//     console.log('error');
// }


// // пример2

// const num = 50;
// if (num < 48) {
//     console.log('error');
// }else if (num>100) {
//     console.log ('много');
// }else{
//     console.log ('ok');
// }




// // тернарный оператор      тернарный потому что в его работе участвуют три аргумента первый (num === 50), второй (console.log ('ok')) третий (console.log('Error'))
// const num = 50;
// (num === 50) ? console.log ('ok') : console.log ('Error');


// // бинарный аргумент 
// // 4 + 4 плюс является бинарным аргументом
// // унарный аргумент 
// // +'4';

// //     в '' ковычках записывается строка!!!!!!!!!!!!!!!!!
// // switch всегда идет на строгое сравнение. break записывается в конце на случай выполнения условия. что бы проверка не шла дальше. если не записать то проверка будет идти на след условия.
// const numer = 50;
// switch (numer){
//         case 49:
//             console.log('noo');
//             break;
//         case 100:
//             console.log('noo');
//             break;
//         case 50:
//             console.log('ok');
//             break;
//         default:
//             console.log('увы');
//             break;
// }


// //                   Оператор И "&&"
// // результат логических операций, это логическое булевое значение. console.log ((hamburger && fries)); в этом выражении выводится и результат т.е. true и ответ я сыт!

// // const hamburger = true;
// // const fries = true;
// // if (hamburger && fries) {
// // console.log ('я сыт!');}
// // console.log ((hamburger && fries));



// // const hamburger = true;
// // const fries = false;
// // if (hamburger && fries) {
// // console.log ('я сыт!');}

// // console.log ((hamburger && fries));



// // const hamburger = 3;
// // const fries = 1;
// // if (hamburger === 2 && fries) {
// // console.log ('я сыт!');}
// // else{
// // console.log ('Мы уходим');}



// const hamburger = 3;
// const fries = 1;
// const cola = 0;
// console.log ((hamburger === 3 && cola && fries));
// // в данном случае  ответ 0 . т.к. оператор и (&&) выводит первое ложное значение на которое наткнулся, а если ложных значений нет. тогда выводит последнее значение.
// console.log (1 && 0);
// console.log (1 && 5);
// console.log (null && 5);
// console.log (0 && 'gojer');
// if (1 && 0 === 0){
// console.log (true);}
// // в данном случае первая строка выводит 0 т.к. ноль это всегда неправда и 0 является первое ложное значение.
// // вторая строка ответ 5 т.к. все условия правдивы и выводится последнее проверенное условие.
// // третья строка ответ null (неправда (ничего)) оператор "И(&&)"выводит первое ложное (false) значение.
// // четвертая строка ответ 0 аналогия с первой стракой. первое ложное значение является 0.



// if (hamburger === 3 && cola === 1 && fries) {
// console.log ('я сыт!');}
// else{
// console.log ('Мы уходим');}




// // оператор ИЛИ    || 

// // оператор или упирается в первую правду  ||

 


// console.log (1 || 0);
// console.log (1 || 5);
// console.log (null || 5);
// console.log (0 || 'gojer');


// // комбинированные условия && ||
// const hamburger = 3;
// const fries = 3;
// const cola = 0;
// const nagins = 2;

// if (hamburger === 3 && cola === 2 || fries ===3 && nagins ) {
//     console.log ('я сыт!');}
//     else{
//     console.log ('Мы уходим');}
//     console.log (hamburger === 3 && cola === 2 || fries ===3 && nagins);
    
// // оператор ! не
// // он выводит противоположное значение. если было true тогда выводит false  и наооборот.
// console.log (!0);

// // практика
// console.log( NaN || 2 || undefined );
// console.log( NaN && 2 && undefined );
// console.log( 1 && 2 && 3 );
// console.log( !1 && 2 || !3 );
// console.log( 25 || null && !3 );
// console.log( NaN || null || !3 || undefined || 5);
// console.log( NaN || null && !3 && undefined || 5);
// console.log( 5 === 5 && 3 > 1 || 5);

// const hamburger = 3;
// const fries = 3;
// const cola = 0;
// const nuggets = 2;
 
// if (hamburger === 3 && cola || fries === 3 && nuggets) {
//    console.log('Done!')
// }

// let hamburger;
// const fries = NaN;
// const cola = 0;
// const nuggets = 2;
 
// if (hamburger || cola || fries === 3 || nuggets) {
//    console.log('Done!')
// }


// let hamburger;
// const fries = NaN;
// const cola = 0;
// const nuggets = 2;
 
// if (hamburger && cola || fries === 3 && nuggets) {
//    console.log('Done!')
// }




// // ЦИКЛЫ!!!


// let num = 50;

// while (num < 55){
//     console.log(num);
//     num++;
// }
// // пример выше. условно. пока наше условие не выполнено мы будет выполнять след. действие ++

// let i = 2;

// while (i <= 16){
//     if (i % 2 === 0){
//         i++;
//         continue;
//     }
//     console.log(i);

//     i++;
// }






// let num = 50;


// // do (сделай что-то)
// do {    
//     console.log(num);
//     num++;

// }
// while (num < 55);




// // 3-Й  ЦИКЛЫ
// let num = 50;  
//     //   1         2    3
// for(let i = 1; i < 18; i++) {
//     if (i === 6) {
//         break; 
//         // обрубает при выполнении условия
//         // подобный оператор continue позволяет пропустит тот шаг который нам не нужен. но при этом не прерывать сам цикл
//     }
//     console.log(i);
   
// }
// 1.значение i
// 2.условие при котором закончится цикл
// 3. шаг цикла




// // цикл внутри цикла
// // '\n' - оператор переноса строки.

// let result = '';
// const length = 7;
// for (let i = 1; i < length; i++){
//     for (let j = 0; j < i; j++){
//         result += "*";
//     }

//     result += '\n';
// }
// console.log (result);


// // first это метка. к которой обращается break либо continue
// first: for (let i = 0; i < 3; i++){
//     console.log (`first level: ${i}`);
//         for (let j = 0; j < 3; j++) {
//             console.log (`second level: ${j}`);
//             for (let k = 0; k < 5; k++) {
//                 if (k === 2) continue first;
//                 console.log (`third level: ${k}`);
//                 }
//             }
//         }



//     // практика по циклам.
//     При помощи цикла выведите числа от 5 до 10 в консоль. 5 и 10 включительно. Цикл можно использовать любой
//             let num = 5;
//             while (num<=10) {
//                 console.log(num);
//                 num++;}





//                 2 задание
//                 При помощи цикла for вывести числа от 20 до 10 в консоль. В обратном порядке (20, 19, 18...). Когда цикл дойдет до числа 13 - остановить весь цикл
 
// for(let i = 20; i >= 1; i--) {
//     if (i === 12) {
//         break; 
//     //     // обрубает при выполнении условия
//     //     // подобный оператор continue позволяет пропустит тот шаг который нам не нужен. но при этом не прерывать сам цикл
//     }
//     console.log(i);
   
// }



//                 3 задание
//                 При помощи цикла for выведите чётные числа от 2 до 10 включительно
//                 for (let i = 2; i <= 10; i++) {
//                     if (i % 2 == 0)
//                     console.log(i)}


//                     4 задание
//                     Перепишите цикл  for на вариант с while. Результат должен остаться точно таким же. Не создайте бесконечный цикл! Иначе браузер может зависнуть.

//                     for (let i = 2; i <= 16; i++) {
//                         if (i % 2 === 0) {
//                             continue;
//                         } else {
//                             console.log(i);
//                         }
//                     }


//                     let i = 2;

//                     while (i <= 16){
//                         if (i % 2 === 0){
//                             i++;
//                             continue;
//                         }
//                         console.log(i);

//                         i++;
//                     }


//                     5 задание
//                     Заполните массив цифрами от 5 до 10 включительно. Помните, что элементы массива можно сформировать так же, как и обращаться к ним: arr[0]
//                     const arr = [];
//                     for (let i=5; i<=10; i++) {
//                         arr [i-5] = i;
//                     }
//                     console.log(arr);
//                     return arr;

//                     const arr = [3, 5, 8, 16, 20, 23, 50];
//                     const result = [];
                
//                     for (let i = 0; i < arr.length; i++) {
//                         result[i] = arr[i];
                    
                
//                     console.log(result);
//                     return result;
//                 }




//                 function secondTask() {
//                     const data = [5, 10, 'Shopping', 20, 'Homework'];
                
//                     for (let i = 0; i < data.length; i++) {
//                         if (typeof(data[i]) === 'number') {
//                             data[i] = data[i] * 2;
//                         } else if (typeof(data[i]) === 'string') {
//                             data[i] = `${data[i]} - done`;
//                         }
//                     }
                
//                     console.log(data);
//                     return data;
//                 }
                


//                 {
//                     const data = [5, 10, 'Shopping', 20, 'Homework'];
//                     const result = [];
                
//                     for (let i = 1; i <= data.length; i++) {
//                         result[i - 1] = data[data.length - i]
//                     }
                
//                     console.log(result);
//                     return result;
//                 }
                











//                 const data = [5, 10, 'Shopping', 20, 'Homework'];
//                 for (let i = 0)
                



                
// let result = '';
// const length = 7;
// for (let i = 1; i < length; i++){
//     for (let j = 0; j < lines - i; j++){
//         result += "";
//     }

//     result += '\n';
// }
// console.log (result);


// const lines = 5;
// let result = '';

// for (let i = 0; i <= lines; i++) {
//     for (let j = 0; j < lines - i; j++) {
//         result += " ";
//     }
//     for (let j = 0; j < 2 * i + 1; j++) {
//         result += "*";
//     }
//     result += "\n";
// }

// console.log(result)

const numberOfFilms = +prompt ('сколько фильмов вы уже посмотрели?', '');
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for (let i = 0; i < 2; i++){
    const a = prompt('Один из последних просмотренных фильмов?', ''),
    b = prompt('На сколько оцените его?', '');
    if (a != null && b != null && a != '' && b != ''&& a.length <50 ){
        personalMovieDB.movies [a] = b;
        console.log ('done');

    } else {
        console.log (error);
        --i;
    }
    

}
if (personalMovieDB.count <10){
    console.log("Просмотрено довольно мало фильмов");
    }else if (personalMovieDB.count >10 && personalMovieDB.count <30) {
        console.log("Вы классический зритель");
    }else if (personalMovieDB.count >=50){
        console.log("Вы киноман");
    }else {
        console.log("Произошла ошибка");
    }


console.log (personalMovieDB); 



// функции


// let num = 10; это глобальная переменная
function showFirstMessage(text) {
    console.log (text);
    // let num = 30; это локальная переменная. в случае когда внутри функции нет переменной которую она ищет , она идет вверх. и берет значение от туда.

    // замыкание функции это внутри этой функции есть все переменные которые ей доступны.
    console.log (num)
}
// function showFirstMessage(text) {
//     console.log (text);
//     // let num = 20;
//     console.log (num)
// }
showFirstMessage ("hello");
console.log (num);

// return как только функция видит это значение она прекращает свое действие. т.е. если в функции после return написать что либо еще то тот код будет мерт. он не будет никогда использоваться.
function calc (a, b) {
    return (a + b);  
}
console.log (calc (4, 3));
console.log (calc (5, 2));
console.log (calc (1, 3));
console.log (calc (5, 8));


// еще одно назначение return - это возращение значения наружу.
function ret(){
    let num = 50;
    return num;
}
// return закидывает 50 ret () потом она попадает в const  и далее выводится в консоле
const anotherNum = ret();
console.log (anotherNum);


// выше расмотренны функции fuction declaration их особенность в том что они загружаются еще до начала скрипта. т.е. загружается html потом загружаются переменные var потом fuction declaration а потом уже сам скрипт.


// так же используется и function expression ее особенность в том что она выполняется когда до нее доходит поток кода по очереди.
const logger = function (){
    console.log("hello");
};
logger ();



// стрелочные функции 
const cal = (a, b) => {
    console.log ('1');
    return a + b;
};


const usdCurr = 30;
const eurCurr = 45;
function convert (amount, curr) {
    console.log (curr * amount);
}
convert (500, usdCurr);
convert (500, eurCurr);




// return дополнение

const usdCurr = 30;
const discount = 0.9 ;
function convert (amount, curr) {
    return curr * amount;
}
function promotion (result){
    console.log (result * discount);
}
const res = convert (500, usdCurr);
// тоже самое что и след строка.
// promotion (convert (500, usdCurr));

promotion (res);






function test () {
    for (let i = 0; i < 5; i++) {
        console.log (i);
        if (i === 3) return
    }
    // в таком случае у нас цикл прерывается на трех (return в данном случае работает как и break), а так же прерывается и сама функция. и все что будет дальше после return  уже не выведется в этой функции.
    console.log ('done');
}
test ();



//  каждая фунцкия выводит значение return undefined

function doNothing() {};
console.log (doNothing() === undefined);

// console.log это тоже функция. и в браузере помимо ответа выводит значение undefined.
// после return не стоит стаивть перенос строки  
return 
curr * amount



// практика функции


// задача 1
// Создайте функцию, которая будет на вход принимать 1 аргумент с именем человека и возвращать строку.
// Пример: вызов функции sayHello('Антон') возвращает строку "Привет, Антон!". В решении вызывать функцию не нужно, программа сделает это за вас.
// P.S. возвращать - это использовать ключевое слово return.
// P.S.S. Это классическая функция-модификатор, которых мы дальше по курсу будем создавать еще много в разных видах.

function sayHello(name){
    return "привет, $ {name}";
}
sayHello('artsiom');

// Создайте функцию, которая принимает в себя 1 аргумент в виде целого числа и возвращает массив из трех чисел: одно на 1 меньше, сам аргумент, и число на 1 больше.
// Пример: вызов функции returnNeighboringNumbers(5) возвращает массив в виде [4, 5, 6].
function returnNeighboringNumbers(num) {
    return [num - 1, num, num + 1];

}
returnNeighboringNumbers(6);



// 3) Создайте функцию, которая будет принимать в себя 2 аргумента, оба числа. Первое число - это база, второе число - это сколько раз нужно будет повторить это число в прогрессии. (Смотри пример ниже). Функция должна возвращать строку (или число в особых случаях, о которых ниже), где эти числа идут по порядку, разделенные тремя дефисами "---". После последнего числа их не должно быть.
// Если второй аргумент не является числом, равен или меньше нуля - то возвращать просто первый аргумент. (Проверяем через оператор typeof)
// Примеры:
// Вызов функции getMathResult(5, 3) даст ответ 5---10---15
// Вызов функции getMathResult(3, 10) даст ответ 3---6---9---12---15---18---21---24---27---30
// Вызов функции getMathResult(10, 5) даст ответ 10---20---30---40---50
// Вызов функции getMathResult(10, '5') даст ответ 10
// Вызов функции getMathResult(10, 0) даст ответ 10
// Вызов функции getMathResult(20, -5) даст ответ 20

function getMathResult(num, times) {
    if (typeof(times) !== 'number' || times <= 0) {
        return num;
    }
    let str = '';
    for (let i = 1; i <= times; i++) {
        if (i === times) {
            str += `${num * i}`;
            // Тут без черточек в конце
        } else {
            str += `${num * i}---`;
            // Это тоже самое, что и
            // str = str + num * i + "---"
        }
    }
    return str;
}
getMathResult(10, 5);


// методы и свойства строк

// методы это вспомогательные функции
// свойства это вспомогательные значения


const str = "test";
console.log (str.length); 
// console.log (str.length);  выводит ответ 4 , это количество символов внутри строки.
const arr = [1, 2, 3, 4, 5];
console.log (arr.length); 
// количество элементов внутри массива.
// length это есть свойство. и оно вызывается через точку.  (arr.length). причем это единственное свойство для строки. 
// узнать что за нах можно при помощи console.dir(number)

const str = "test";
console.log (str [0]); 

// методы


// toUpperCase выводит :
// TEST
// test
// это свойство не изменяет предыдущее значение, а выводит новое.

const str = "test";
console.log (str.toUpperCase()); 
console.log (str);

// toLowerCase   
// переводит все в нижний регистор. т.е ТЕСТ в тест
const str = "Test";
console.log (str.toLowerCase()); 
console.log (str);


// метод indexOf - метод позволяющий найти кусочек строки или символ. и указать его позицию в строке. и вывести в консоль.
//  пример ;
const fruit = "some fruit";
console.log (fruit.indexOf("fruit"));
// в значение выводится 5 . т.к. отсчет ведется с ноля. s-0, o-1, m-2, e-3, пробел - 4, f-5.
// этот метод используется и для проверки нахождения элемента внутри строки. пример ниже. ответ -1. т.к. эта буква не используется в строке.
const fruit = "some fruit";
console.log (fruit.indexOf("d"));


// метод slice . выводит элемент по заданным позиция. пример:

const fruit = "some fruit";
console.log (fruit.slice(5, 9));
// в этом случает выведет frui т.к f - пятая (5) буква. а i это 8 буква. указывается не включительно.
// если указать просто в условии значение (5) тогда у нас выведется все что находится с пятой позиции  ответ fruit
const fruit = "some fruit";
console.log (fruit.slice(5));
// slice может быть отрицательным т.е slice(-2, -4) отсчет идет справа на лево.

// имеется подобный метод на slice это метод substring
// они подобны между собой. но substring не может быть отрицательным значением.



// метод substr 

const fruit = "some fruit";
console.log (fruit.substr(5, 3));


// в js есть отдельная библиотека которая называется math / Она есть прям в браузерах. это математическая библиотека.
// округление.:
// round - это округление в примере выводит 12
const num = 12.2;
console.log (Math.round(num));

// parseInt переводит число в другую систему исчисления.
const test = "12.2px";
console.log(parseInt(test));
// ответ 12 числовой тип данных. и плюс обрезает не целую часть

// метод parseFloat выводит так же как parseInt только с не целым значением. ответ 12.2
const test = "12.2px";
console.log(parseFloat(test));

