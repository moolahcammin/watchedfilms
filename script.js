// let numberOfFilms;


// function start() {
//     numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

//     while (numberOfFilms == "" || 
//     numberOfFilms == null || 
//     isNaN(numberOfFilms)) {
//         numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
//     }
// }

// start();

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    numberFilmsWatched: function() {
        personalMovieDB.count = 
        +prompt("Сколько фильмов вы уже посмотрели?", "");
        while (personalMovieDB.count == "" || 
        personalMovieDB.count == null || 
        isNaN(personalMovieDB.count)) {
            personalMovieDB.count = 
            +prompt("Сколько фильмов вы уже посмотрели?", "");
        }
    },
    rememberMyFilms: function() {
        for (let i = 0; i < 2; i++) {
            const a = prompt("Один из просмотренных фильмов?", ""),
                  b = prompt("Насколько оцените его?", "");
        
                if (a != 
                    null && b != null && a != "" && b != "" && a.length < 50) {
                    personalMovieDB.movies[a] = b;
                    console.log("done");
                } else {
                    console.log("error");
                    i--;
                }
        }
    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            console.log("Просмотрено довольно мало фильмов");
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log("Вы классический зритель");
        } else if (personalMovieDB.count >= 30) {
            console.log("Вы киноман");
        } else {
            console.log("Произошла ошибка");
        }
    },
    showMyDB: function(hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function() {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },
    writeYourGenres: function() {
        // for (let i = 1; i <= 3; i++) {
        for (let i = 1; i < 2; i++) {
        //     let genre = prompt(
        //         `Ваш любимый жанр под номером ${i}`);

        //         if (genre == "" || genre == null) {
        //             console.log("Вы ввели некорректные данные");
        //             i--;
        //         } else {
        //             personalMovieDB.genres[i - 1] = genre;
        //         }
        // }
        let genres = prompt(`Ваш любимый жанр под номером через 
        запятую`).toLowerCase();
        

        if (genres === "" || genres == null) {
            console.log("Вы ввели некорректные данные или не вели их вовсе");
            i--;
        } else {
            personalMovieDB.genres = genres.split(", ");
            personalMovieDB.genres.sort();
        }
    }

        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i + 1} - это ${item}`);
        });
    }
};

// personalMovieDB.numberFilmsWatched();
// personalMovieDB.rememberMyFilms();
// personalMovieDB.detectPersonalLevel();
// personalMovieDB.privat.showMyDB();
// personalMovieDB.writeYourGenres();

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
//           if (a != null && b != null && 
//                                        a != "" && b != "" && a.length < 50) {
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



// function rememberMyFilms() {
//     for (let i = 0; i < 2; i++) {
//         const a = prompt("Один из просмотренных фильмов?", ""),
//               b = prompt("Насколько оцените его?", "");
    
//             if (a != 
// null && b != null && a != "" && b != "" && a.length < 50) {
//                 personalMovieDB.movies[a] = b;
//                 console.log("done");
//             } else {
//                 console.log("error");
//                 i--;
//             }
//     }
// }

// rememberMyFilms();



// function detectPersonalLevel() {
//     if (personalMovieDB.count < 10) {
//         console.log("Просмотрено довольно мало фильмов");
//     } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//         console.log("Вы классический зритель");
//     } else if (personalMovieDB.count >= 30) {
//         console.log("Вы киноман");
//     } else {
//         console.log("Произошла ошибка");
//     }
// }

// detectPersonalLevel();

// function showMyDB() {
//     if (personalMovieDB.privat == false) {
//         console.log(personalMovieDB);
//     }
// } 

// function showMyDB (hidden) {
//     if (!hidden) {
//         console.log(personalMovieDB);
//     }
// }

// showMyDB(personalMovieDB.privat);

// function writeYourGenres() {
//     for (let i = 0; i < 3; i++) {
//         const numgenre = prompt(
//             "Ваш любимый жанр под номером ${номер по порядку}", "");
//             personalMovieDB.genres[numgenre] = [];
//     }
    
// }

// function writeYourGenres() {
//     for (let i = 1; i <= 3; i++) {
//         const numgenre = prompt(
//             `Ваш любимый жанр под номером ${i}`);
//             personalMovieDB.genres[i - 1] = numgenre;
//     }
    
// }

// function writeYourGenres() {
//     for (let i = 1; i <= 3; i++) {
//             personalMovieDB.genres[i - 1] = prompt(
//                 `Ваш любимый жанр под номером ${i}`);
//     }
    
// }

// writeYourGenres();


