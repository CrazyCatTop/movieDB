'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const promo = document.querySelector('.promo'),
      ads = promo.querySelectorAll('.promo__adv img'),
      genre = promo.querySelector('.promo__genre'),
      background = promo.querySelector('.promo__bg'),
      movieItems = promo.querySelectorAll('.promo__interactive-item');

ads.forEach((img) => {
    img.remove();
});

genre.textContent = 'драма';

background.style.background = 'url("/img/bg.jpg") center 70% / cover no-repeat';

movieDB.movies.sort(); 

movieItems.forEach((movie, i) => {
    movie.innerHTML = `${i + 1}. ${movieDB.movies[i]} <div class="delete"></div>`;
});