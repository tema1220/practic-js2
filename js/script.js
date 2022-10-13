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