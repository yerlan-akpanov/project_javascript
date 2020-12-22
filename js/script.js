"use strict";

// *******************************************************************************************
// alert("Hello");

// *******************************************************************************************
// const result = confirm("Are you here?");
// console.log(result);

// *******************************************************************************************
// const answer = +prompt("Вам есть 18?", "18");
// console.log(answer + 5);

// *******************************************************************************************
// const answer = [];
// answer[0] = prompt("Как Ваше имя?", "");
// answer[1] = prompt("Как Ваша фамилия?", "");
// answer[2] = prompt("Сколько Вам лет?", "");
// document.write(answer);

// ***************************************ИНТЕРПОЛЯЦИЯ****************************************************
// const category = "toys";
// console.log(`https://someurl.com/${category}/5`);

// const user = "Ivan";
// alert(`Hello ${user}`);

// *******************************************************************************************

const numberOfFilms = +prompt("Сколько фильмов Вы уже посмотрели?", "");

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

const a = prompt("Один из послдених просмотренных фильмов?", ""),
      b = prompt("На сколько оцените его?", ""),
      c = prompt("Один из последних просмотренных фильмов?", ""),
      d = prompt("На сколько оцените его?", "");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);