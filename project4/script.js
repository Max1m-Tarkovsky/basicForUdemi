"use strict";
const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function () {
        personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
        while (personalMovieDB.count === '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
        }
    },
    rememberMyfilms: function () {
        for (let i = 0; i < 2; i++) {
            const a = prompt("Один из последних просмотренных фильмов?", ""),
                b = prompt("На сколько оцените его?", "");
            if (a != null && b != null && a != '' && b != '' && a.length < 50 && b.length < 50) {
                personalMovieDB.movies[a] = b;
                console.log('done');
            } else {
                console.log('Error');
                i--;
            }
        }
    },
    detecPersonalLevel: function () {
        if (personalMovieDB < 10) {
            console.log("Просмотрено довольно мало фильмов ");
        } else if (personalMovieDB >= 10 && personalMovieDB < 30) {
            console.log("Вы классический зритель ");
        } else if (personalMovieDB >= 30) {
            console.log("Вы киноман");
        } else {
            console.log("Произошла Ошибка");
        }

    },
    showMyDB: function (hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    writeYourGenres: function () {
        for (let i = 1; i <= 3; i++) {
            let gener = prompt(`Ваш любимый жанр под номером ${i}`);
            if (gener === '' || gener == null) {
               console.log("Вы ввели не коректные данные или не ввели их вовсе ")
                i--;
            } else {
                personalMovieDB.genres[i - 1] = gener;
            }

        }
        personalMovieDB.genres.forEach((item,i)=>{
            console.log(`Любимый жанр ${i+1} Это -${item}`)
        })
    },
    // Альтернативный вариант из урока

    // let genres = prompt(`Введите ваши любимые жанры через запятую`).toLowerCase();

    // if (genres === '' || genres == null) {
    //     console.log('Вы ввели некорректные данные или не ввели их вовсе');
    //     i--;
    // } else {
    //     personalMovieDB.genres = genres.split(', ');
    //     personalMovieDB.genres.sort();
    // }



    toggleVisibleMyDB: function () {
        if (personalMovieDB.privat === true) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    }


};
personalMovieDB.toggleVisibleMyDB();
personalMovieDB.start();
personalMovieDB.rememberMyfilms();
personalMovieDB.detecPersonalLevel();
personalMovieDB.writeYourGenres();
personalMovieDB.showMyDB(personalMovieDB.privat);
console.log(personalMovieDB);

