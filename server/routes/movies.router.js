const router = require('express').Router();
const pool = require('../modules/database.connection');

// GET /movies (search query or all)
router.get('/', (req, res) => {
    const movieSearch = req.query.q;
    console.log(`GET /movies`);
    if (movieSearch) {
        pool.query(`SELECT * FROM "movies" WHERE "name" ILIKE $1;`, [
            ('%' + movieSearch + '%')
        ]).then((response) => {
            res.send(response.rows);
        }).catch((error) => {
            console.log(`ERROR occurred during GET /movies: ${error}`);
            res.sendStatus(500);
        });
    } else {
        pool.query('SELECT * FROM "movies";').then((response) => {
            res.send(response.rows);
        }).catch((error) => {
            console.log(`ERROR occurred during GET /movies: ${error}`);
            res.sendStatus(500);
        });
    }
});

// GET /movies/:id (single movie by id)
router.get('/:id', (req, res) => {
    const movieId = req.params.id;
    console.log(`GET /movies/${movieId}`);
    pool.query(`SELECT * FROM "movies" WHERE "id" = $1;`, [
        movieId
    ]).then((response) => {
        res.send(response.rows);
    }).catch((error) => {
        console.log(`ERROR occurred during GET /movies/:id: ${error}`);
        res.sendStatus(500);
    });
});

// POST /movies (data sent in body)
router.post('/', (req, res) => {
    const movie = req.body;
    console.log(`POST /movies: ${movie}`);
    pool.query(`INSERT INTO "movies" ("name", "genre_id", "release_date", "run_time", "image") VALUES ($1, $2, $3, $4, $5);`, [
        movie.name,
        movie.genre_id,
        movie.release_date,
        movie.run_time,
        movie.image
    ]).then((response) => {
        console.log(`Success response: ${response}`);
        res.sendStatus(201);
    }).catch((error) => {
        console.log(`ERROR occurred during POST /movies: ${error}`);
        res.sendStatus(500);
    });
});

// PUT /movies/:id (data sent in body for specific movie id)
router.put('/:id', (req, res) => {
    const movie = req.body;
    const movieId = req.body;
    console.log(`PUT /movies/${movieId}: ${movie}`);
    pool.query(`UPDATE "movies" SET "name" = $1, "genre_id" = $2, "release_date" = $3, "run_time = $4, "image" = $5 WHERE "id" = $6;`, [
        movie.name,
        movie.genre_id,
        movie.release_date,
        movie.run_time,
        movie.image,
        movieId
    ]).then((response) => {
        console.log(`Success response: ${response}`);
        res.sendStatus(202);
    }).catch((error) => {
        console.log(`ERROR occurred during PUT /movies/:id: ${error}`);
        res.sendStatus(500);
    });
});

// DELETE /movies/:id (just get rid of the selected movie by id)
router.delete('/:id', (req, res) => {
    const movieId = req.params.id;
    console.log(`DELETE /movies/${movieId}`);
    pool.query(`DELETE FROM "movies" WHERE "id" = $1;`, [
        movieId
    ]).then((response) => {
        console.log(`Success response: ${response}`);
        res.sendStatus(200);
    }).catch((error) => {
        console.log(`ERROR occurred during DELETE /movies/:id: ${error}`);
        res.sendStatus(500);
    });
});

module.exports = router;