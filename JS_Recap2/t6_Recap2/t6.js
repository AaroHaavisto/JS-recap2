'use strict';

const movies = [];
const numOfMovies = parseInt(prompt('Syötä elokuvien määrä'));

for (let i = 0; i < numOfMovies; i++) {
  const nimi = prompt('Syötä elokuvan nimi');
  const arvosana = parseInt(prompt('Syötä arvosana (1-5)'));

  movies.push({
    nimi: nimi,
    arvosana: arvosana,
  });
}

movies.sort(function (a, b) {
  return b.arvosana - a.arvosana;
});

for (const movie of movies) {
  document.querySelector('#target1').innerHTML +=
    `<li>${movie.nimi} (${movie.arvosana})</li>`;
}

if (movies.length > 0) {
  document
    .querySelector('#suosikki')
    .insertAdjacentHTML('afterbegin', movies[0].nimi);
}

console.log(movies);
