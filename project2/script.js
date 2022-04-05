"use strict";
const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for (let i = 0; i < 2; i++) {
    const a = prompt("Один из последних просмотренных фильмов?", ""),
        b = prompt("На сколько оцените его?", "");
    if (a != null && b != null && a != '' && b != '' && a.length < 50 && b.length < 50) {
        personalMovieDB.movies[a] = b;
    } else {
        i--;
    }
}
if (personalMovieDB < 10) {
    console.log("Просмотрено довольно мало фильмов ");
} else if (personalMovieDB >= 10 && personalMovieDB < 30) {
    console.log("Вы классический зритель ");
} else if (personalMovieDB >= 30) {
    console.log("Вы киноман")
} else {
    console.log("Произошла Ошибка")
}
console.log(personalMovieDB);

