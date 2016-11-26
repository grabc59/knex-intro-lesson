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
knex('movies')
  .select('id', 'title', 'rating', 'is_3d', 'score')
  .where('score', '>=', 7.5)
  .where({ rating: 'PG', is_3d: true })
  .then((result) => {
    console.log(result);
    knex.destroy();
  })
  .catch((err) => {
    console.error(err);
    knex.destroy();
    process.exit(1);
  });
