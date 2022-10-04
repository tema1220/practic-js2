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