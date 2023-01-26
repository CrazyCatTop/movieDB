"use strict";

const numberOfFilms = +prompt('Сколько фильмрв вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    geners: [],
    privat: false
};

const filmName = prompt('Один из просмотренных вами фильмов: ', ''),
      filmRating = prompt('На сколько оцените его?', '');
      filmName2 = prompt('Один из просмотренных вами фильмов: ', ''),
      filmRating2 = prompt('На сколько оцените его?', '');

personalMovieDB.movies[filmName] = filmRating;
personalMovieDB.movies[filmName2] = filmRating2;

console.log(personalMovieDB);