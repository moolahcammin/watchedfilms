"use strict";

let numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "100");
console.log("Я посмотрел столько фильмов:" + numberOfFilms);

let personalMovieDB = {
    count: numberOfFilms,
}