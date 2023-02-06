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
      movieList = promo.querySelector('.promo__interactive-list'),
      form = promo.querySelector('.add'),
      input = form.querySelector('.adding__input'),
      checkbox = form.querySelector('[type="checkbox"]'),
      button = form.querySelector('button');

ads.forEach((img) => {
    img.remove();
});

genre.textContent = 'драма';

background.style.background = 'url("img/bg.jpg") center 70% / cover no-repeat';

moviesUpdate();

button.addEventListener('click', () => {
    let film = ('' + input.value).trim();
    film = film[0].toUpperCase() + film.substring(1);
    
    input.value = '';
    
    if (film !== '') {
        if (film.length > 21) {
            film = film.substring(0, 21) + '...';
        }
        
        if (checkbox.checked) {
            alert('Добавляем любимый фальм');
            checkbox.checked = false;
        }
    
        movieDB.movies.push(film);
        moviesUpdate();
    } else {
        alert('Вы не ввели название фильма');
    }
});

function moviesUpdate() {
    movieDB.movies.sort(); 

    movieList.innerHTML = '';

    for (let i = 0; i < movieDB.movies.length; i++) {
        movieList.innerHTML += `<li class="promo__interactive-item">${i + 1}. ${movieDB.movies[i]}<div class="delete"></div></li>`;
    }

    promo.querySelectorAll('.delete').forEach((trashcan, i) => {
        trashcan.addEventListener('click', () => {
            movieDB.movies.splice(i, 1);
            moviesUpdate();
        });
        console.log(movieDB.movies);
    });
}