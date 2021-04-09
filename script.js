const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

const personalMovieDB = {
    count:numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

// const a = prompt("Один из просмотренных фильмов?", ""),
//       b = prompt("Насколько оцените его?", ""),
//       c = prompt("Один из просмотренных фильмов?", ""),
//       d = prompt("Насколько оцените его?", "");


// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

// Автоматизация вопросов

// let num = 2;

//1 способ

// while (num < 4) {
//     const a = prompt("Один из просмотренных фильмов?", ""),
//           b = prompt("Насколько оцените его?", "");
//           num++;
//          
//           if (a != null && b != null && a != "" && b != "" && a.length < 50) {
//                         personalMovieDB.movies[a] = b;
//                         console.log("done");
//                     } else {
//                         console.log("error");
//                         num--;
//                     }
// }

//2 способ

// do {
//     const a = prompt("Один из просмотренных фильмов?", ""),
//           b = prompt("Насколько оцените его?", "");
//           num++;
          
//         if (a != null && b != null && a != "" && b != "" && a.length < 50) {
//         personalMovieDB.movies[a] = b;
//         console.log("done");
//         } else {
//         console.log("error");
//         num--;
//     }
// }
// while (num <4);

//3 способ

for (let i = 0; i < 2; i++) {
    const a = prompt("Один из просмотренных фильмов?", ""),
          b = prompt("Насколько оцените его?", "");

        if (a != null && b != null && a != "" && b != "" && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log("done");
        } else {
            console.log("error");
            i--;
        }
}



if (personalMovieDB.count < 10) {
    console.log("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("Вы классический зритель");
} else if (personalMovieDB.count >= 30) {
    console.log("Вы киноман");
} else {
    console.log("Произошла ошибка");
}

console.log(personalMovieDB);