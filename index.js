'use strict';

const env = 'development'; // which set of config info to use
const config = require('./knexfile.js')[env]; //the config information (server, db type) knex should use
const knex = require('knex')(config); // knex will open 2 connections to the server specified in the config so it can run multiple sql commands concurrently

// first example
// const sql = knex('movies').toString();
//
// console.log(sql);
//
// knex.destroy();

//second example
// knex('movies')
// .then((result) => {
//   console.log(result);
//   knex.destroy();
// })
// .catch((err) => {
//   console.error(err);
//   knex.destroy();
//   process.exit(1);
// });

// third example
// knex('movies')
//   .select('id', 'title', 'rating', 'is_3d', 'score')
//   .then((result) => {
//     console.log(result);
//     knex.destroy();
//   })
//   .catch((err) => {
//     console.error(err);
//     knex.destroy();
//     process.exit(1);
//   });

// fourth example
// knex('movies')
//   .select('id', 'title', 'rating', 'is_3d', 'score')
//   .where('id', 4)
//   .then((result) => {
//     console.log(result);
//     knex.destroy();
//   })
//   .catch((err) => {
//     console.error(err);
//     knex.destroy();
//     process.exit(1);
//   });

// fifth example
// knex('movies')
//   .select('id', 'title', 'rating', 'is_3d', 'score')
//   .where('score', '>=', 7.5)
//   .then((result) => {
//     console.log(result);
//
//     knex.destroy();
//   })
//   .catch((err) => {
//     console.error(err);
//     knex.destroy();
//     process.exit(1);
//   });


// sixth example
// knex('movies')
//   .select('id', 'title', 'rating', 'is_3d', 'score')
//   .where('score', '>=', 7.5)
//   .where('rating', 'PG') // chained where clauses, knex query builder takes care of adding 'AND'
//   .then((result) => {
//     console.log(result);
//     knex.destroy();
//   })
//   .catch((err) => {
//     console.error(err);
//     knex.destroy();
//     process.exit(1);
//   });

// seventh example
// knex('movies')
//   .select('id', 'title', 'rating', 'is_3d', 'score')
//   .where('score', '>=', 7.5)
//   .where({ rating: 'PG', is_3d: true })
//   .then((result) => {
//     console.log(result);
//     knex.destroy();
//   })
//   .catch((err) => {
//     console.error(err);
//     knex.destroy();
//     process.exit(1);
//   });

// eighth example
// knex('movies')
//   .select('id', 'title', 'rating', 'is_3d', 'score')
//   .where('score', '>=', 7.5)
//   .where({ rating: 'PG', is_3d: true })
//   .orWhere('title', 'Pulp Fiction')
//   .then((result) => {
//     console.log(result);
//     knex.destroy();
//   })
//   .catch((err) => {
//     console.error(err);
//     knex.destroy();
//     process.exit(1);
//   });

// ninth example
// knex('movies')
//   .select('id', 'title', 'rating', 'is_3d', 'score')
//   .where('score', '>=', 7.5)
//   .where({ rating: 'PG', is_3d: true })
//   .orWhere('title', 'Pulp Fiction')
//   .orderBy('score', 'DESC')
//   .then((result) => {
//     console.log(result);
//     knex.destroy();
//   })
//   .catch((err) => {
//     console.error(err);
//     knex.destroy();
//     process.exit(1);
//   });



// tenth example
// knex('movies')
//   .select('id', 'title', 'rating', 'is_3d', 'score')
//   .where('score', '>=', 7.5)
//   .where({ rating: 'PG', is_3d: true })
//   .orWhere('title', 'Pulp Fiction')
//   .orderBy('score', 'DESC')
//   .limit(1)
//   .then((result) => {
//     console.log(result);
//     knex.destroy();
//   })
//   .catch((err) => {
//     console.error(err);
//     knex.destroy();
//     process.exit(1);
//   });

// test
  // knex('movies')
  //   // .distinct('rating')
  //   // .select('title')
  //   // .offset(1)
  //   .pluck('title')
  //   // .where('score', '>=', 7.5)
  //   // .orderBy('score', 'DESC')
  //   .then((result) => {
  //     console.log(result);
  //     knex.destroy();
  //   })
  //   .catch((err) => {
  //     console.error(err);
  //     knex.destroy();
  //     process.exit(1);
  //   });




// exercises
// Return the id, title, and score of the single lowest scoring movie in the table.
// knex('movies')
//   .orderBy('score')
//   .first('id', 'title', 'score')
//   .then((result) => {
//       console.log(result);
//       knex.destroy();
//     })
//     .catch((err) => {
//       console.error(err);
//       knex.destroy();
//       process.exit(1);
//     });

// Return the id, title, and duration of the "X-Men: Apocalypse" and "The Princess Bride" movies.
// knex('movies')
//   .select('id', 'title', 'duration')
//   .where({title: "X-Men: Apocalypse"})
//   .orWhere({title: 'The Princess Bride'})
//   .then((result) => {
//       console.log(result);
//       knex.destroy();
//     })
//     .catch((err) => {
//       console.error(err);
//       knex.destroy();
//       process.exit(1);
//     });


// Return the id, title, and released_at all the movies ordered by from oldest to newest.
// knex('movies')
//   .select('id', 'title', 'released_at')
//   .orderBy('released_at')
//   .then((result) => {
//       console.log(result);
//       knex.destroy();
//     })
//     .catch((err) => {
//       console.error(err);
//       knex.destroy();
//       process.exit(1);
//     });

// Return the id, title, genre, and score of all of the PG movies that scored between 7.5 and 8.5
// knex('movies')
//   .select('id', 'title', 'genre')
//   .where('rating', 'PG')
//   .whereBetween('score',[7.5, 8.5])
//   .then((result) => {
//       console.log(result);
//       knex.destroy();
//     })
//     .catch((err) => {
//       console.error(err);
//       knex.destroy();
//       process.exit(1);
//     });



// Return the title, score, award_kind, and award_name of all movies ordered alphabetically by its title.
// knex('movies')
//   .join('awards', 'movies.id', '=', 'awards.movie_id')
//   .select('movies.title', 'movies.score', 'awards.kind', 'awards.name')
//   .orderBy('movies.title')
//   .then((result) => {
//       console.log(result);
//       knex.destroy();
//     })
//     .catch((err) => {
//       console.error(err);
//       knex.destroy();
//       process.exit(1);
//     });



// Return the title, actor_name, role of "Pulp Fiction" ordered by youngest to oldest actors.
knex('actors_movies')
  .select('movies.title', 'actors.name', 'actors_movies.role')
  .join('actors', 'actors_movies.actor_id', '=', 'actors.id')
  .join('movies', 'movies.id', '=', 'actors_movies.movie_id')
  .where('title', 'Pulp Fiction')
  .orderBy('birthed_at', 'desc')
  .then((result) => {
      console.log(result);
      knex.destroy();
    })
    .catch((err) => {
      console.error(err);
      knex.destroy();
      process.exit(1);
    });
