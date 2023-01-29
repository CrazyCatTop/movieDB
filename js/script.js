"use strict";

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмрв вы уже посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмрв вы уже посмотрели?', '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    geners: [],
    privat: false
};

function rememberMyFilms() {
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
}

rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log('Просмотрено довольно мало  фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('Вы классический зритель');
    } else if (personalMovieDB.count >= 30){
        console.log('Вы киноман');
    } else {
        console.log('error')
    }
}

detectPersonalLevel();

console.log(personalMovieDB);

function showMyDB() {
    if (!personalMovieDB.privat) {
        console.log(personalMovieDB.movies);
    }
}

showMyDB();

function writeYourGeners() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.geners[i - 1] = prompt(`Ваш любымый жанр под номером ${i}:`);
    }
};

writeYourGeners();