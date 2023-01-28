"use strict";

const numberOfFilms = +prompt('Сколько фильмрв вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    geners: [],
    privat: false
};

for (let i = 0; i < 2; i++) {
    const filmName = prompt('Один из просмотренных вами фильмов: ', ''),
          filmRating = prompt('На сколько оцените его?', '');

    if (filmName != null && filmRating != null && filmName != '' && filmRating != '' && filmName.length < 50) {
        personalMovieDB.movies[filmName] = filmRating;
        console.log('done');
    } else {
        console.log('error');
        i--;
    }
}

if (personalMovieDB.count < 10) {
    console.log('Просмотрено довольно мало  фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log('Вы классический зритель');
} else if (personalMovieDB.count >= 30){
    console.log('Вы киноман');
} else {
    console.log('error')
}

console.log(personalMovieDB);