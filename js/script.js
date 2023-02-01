"use strict";

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,

    start: () => {
        personalMovieDB.count = +prompt('Сколько фильмрв вы уже посмотрели?', '');

        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмрв вы уже посмотрели?', ''); 
        }
    },
    rememberMyFilms: () => {
        for (let i = 0; i < personalMovieDB.count; i++) {
            const filmName = prompt('Один из просмотренных вами фильмов: ', '').trim(),
                  filmRating = prompt('На сколько оцените его?', '').trim();
        
            if (filmName != null && filmRating != null && filmName != '' && filmRating != '' && filmName.length < 50) {
                personalMovieDB.movies[filmName] = filmRating;
                console.log('done');
            } else {
                console.log('error');
                i--;
            }
        }
    },
    detectPersonalLevel: () => {
        if (personalMovieDB.count < 10) {
            console.log('Просмотрено довольно мало  фильмов');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log('Вы классический зритель');
        } else if (personalMovieDB.count >= 30){
            console.log('Вы киноман');
        } else {
            console.log('error')
        }
    },
    showMyDB: () => {
        if (!personalMovieDB.privat) {
            console.log(personalMovieDB.movies);
        }
    },
    writeYourGeners: () => {
        for (let i = 1; i <= 3; i++) {
            let genre = prompt(`Ваш любимый жанр под номером ${i}:`);
            if (genre == '' || genre == null) {
                console.log('Вы ввели некорректые данные или не ввели их вообще.');
                i--;
            } else {
                personalMovieDB.genres[i - 1] = genre;
            }
        }

        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр номер ${i + 1} - ${personalMovieDB.genres[i]}.`);
        });
    },
    toggleVisibleMyDB: () => {
        if (personalMovieDB.privat) personalMovieDB.privat = false;
        else personalMovieDB.privat = true;
    }
};

personalMovieDB.start();
personalMovieDB.rememberMyFilms();
personalMovieDB.detectPersonalLevel();
personalMovieDB.showMyDB();
personalMovieDB.toggleVisibleMyDB();
personalMovieDB.showMyDB();
personalMovieDB.writeYourGeners();