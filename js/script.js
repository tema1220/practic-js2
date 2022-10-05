 const numberOfFilms = +prompt('сколько фильмов вы уже посмотрели?', '');
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
const a = prompt('Один из последних просмотренных фильмов?', ''),
      b = prompt('На сколько оцените его?', ''),
      c = prompt('Один из последних просмотренных фильмов?', ''),
      d = prompt('На сколько оцените его?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log (personalMovieDB);

// git status - в какой ветке мы сейчас находимся.
// git config --global user.name "artsiom" - задаем имя для глобального репазитория.
// git add -A  -- добовляет все файлы в индекс
// git add название файла.css
// git add *.css  -- все файлы с расширением css переместятся в индекс
// git commit -a -m"first commit"  -- буква а означает что мы добавляем все файлы, буква м означает meseng описание комита
// git log  -- просмотр всех коммитов каторые были созданны.
// 1 шаг - git status, 2 шаг - git add -A, 3 шаг - git commit -a -m"first commit", 4 шаг - git push -u origin master

// создание репазитория 16 урок с 10 минуты


// условия 20 ур.


// начинаем с If условия else это продолжение условия, else if если нет тогда еще одно условие

if (4 == 4){
    console.log('ok');
} else {
    console.log('error');
}


// пример2

const num = 50;
if (num < 48) {
    console.log('error');
}else if (num>100) {
    console.log ('много');
}else{
    console.log ('ok');
}




// тернарный оператор      тернарный потому что в его работе участвуют три аргумента первый (num === 50), второй (console.log ('ok')) третий (console.log('Error'))
const num = 50;
(num === 50) ? console.log ('ok') : console.log ('Error');


// бинарный аргумент 
// 4 + 4 плюс является бинарным аргументом
// унарный аргумент 
// +'4';

//     в '' ковычках записывается строка!!!!!!!!!!!!!!!!!
// switch всегда идет на строгое сравнение. break записывается в конце на случай выполнения условия. что бы проверка не шла дальше. если не записать то проверка будет идти на след условия.
const numer = 50;
switch (numer){
        case 49:
            console.log('noo');
            break;
        case 100:
            console.log('noo');
            break;
        case 50:
            console.log('ok');
            break;
        default:
            console.log('увы');
            break;
}


//                   Оператор И "&&"
// результат логических операций, это логическое булевое значение. console.log ((hamburger && fries)); в этом выражении выводится и результат т.е. true и ответ я сыт!

// const hamburger = true;
// const fries = true;
// if (hamburger && fries) {
// console.log ('я сыт!');}
// console.log ((hamburger && fries));



// const hamburger = true;
// const fries = false;
// if (hamburger && fries) {
// console.log ('я сыт!');}

// console.log ((hamburger && fries));



// const hamburger = 3;
// const fries = 1;
// if (hamburger === 2 && fries) {
// console.log ('я сыт!');}
// else{
// console.log ('Мы уходим');}



const hamburger = 3;
const fries = 1;
const cola = 0;
console.log ((hamburger === 3 && cola && fries));
// в данном случае  ответ 0 . т.к. оператор и (&&) выводит первое ложное значение на которое наткнулся, а если ложных значений нет. тогда выводит последнее значение.
console.log (1 && 0);
console.log (1 && 5);
console.log (null && 5);
console.log (0 && 'gojer');
if (1 && 0 === 0){
console.log (true);}
// в данном случае первая строка выводит 0 т.к. ноль это всегда неправда и 0 является первое ложное значение.
// вторая строка ответ 5 т.к. все условия правдивы и выводится последнее проверенное условие.
// третья строка ответ null (неправда (ничего)) оператор "И(&&)"выводит первое ложное (false) значение.
// четвертая строка ответ 0 аналогия с первой стракой. первое ложное значение является 0.



if (hamburger === 3 && cola === 1 && fries) {
console.log ('я сыт!');}
else{
console.log ('Мы уходим');}




// оператор ИЛИ    || 

// оператор или упирается в первую правду  ||

 


console.log (1 || 0);
console.log (1 || 5);
console.log (null || 5);
console.log (0 || 'gojer');


// комбинированные условия && ||
const hamburger = 3;
const fries = 3;
const cola = 0;
const nagins = 2;

if (hamburger === 3 && cola === 2 || fries ===3 && nagins ) {
    console.log ('я сыт!');}
    else{
    console.log ('Мы уходим');}
    console.log (hamburger === 3 && cola === 2 || fries ===3 && nagins);
    
// оператор ! не
// он выводит противоположное значение. если было true тогда выводит false  и наооборот.
console.log (!0);

// практика
console.log( NaN || 2 || undefined );
console.log( NaN && 2 && undefined );
console.log( 1 && 2 && 3 );
console.log( !1 && 2 || !3 );
console.log( 25 || null && !3 );
console.log( NaN || null || !3 || undefined || 5);
console.log( NaN || null && !3 && undefined || 5);
console.log( 5 === 5 && 3 > 1 || 5);

const hamburger = 3;
const fries = 3;
const cola = 0;
const nuggets = 2;
 
if (hamburger === 3 && cola || fries === 3 && nuggets) {
   console.log('Done!')
}

let hamburger;
const fries = NaN;
const cola = 0;
const nuggets = 2;
 
if (hamburger || cola || fries === 3 || nuggets) {
   console.log('Done!')
}


let hamburger;
const fries = NaN;
const cola = 0;
const nuggets = 2;
 
if (hamburger && cola || fries === 3 && nuggets) {
   console.log('Done!')
}

