const router = require('express').Router();
const pool = require('../modules/database.connection');

// GET /genres (search query or all)
router.get('/', (req, res) => {
    const genreSearch = req.query.q;
    console.log(`GET /genres`);
    if (genreSearch) {
        pool.query(`SELECT * FROM "genres" WHERE "name" ILIKE $1;`, [
            ('%', + genreSearch + '%')
        ]).then((resonse) => {
            res.send(response.rows);
        }).catch((error) => {
            console.log(`ERROR occurred during GET /genres: ${error}`);
            res.sendStatus(500);
        });
    } else {
        pool.query(`SELECT * FROM "genres";`).then((response) => {
            res.send(response.rows);
        }).catch((error) => {
            console.log(`ERROR occurred during GET /genres: ${error}`);
            res.sendStatus(500);
        });
    }
});

// GET /genres/:id (single genre by id)
router.get('/:id', (req, res) => {
    const genreId = req.params.id;
    console.log(`GET /genres/${genreId}`);
    pool.query(`SELECT * FROM "genres" WHERE "id" = $1;`, [
        genreId
    ]).then((response) => {
        res.send(response.rows);
    }).catch((error) => {
        console.log(`ERROR occurred during GET /genres/:id: ${error}`);
        res.sendStatus(500);
    });
});

// POST /genres (data sent in body)
router.post('/', (req, res) => {
    const genre = req.body;
    console.log(`POST /genres: ${genre}`);
    pool.query(`INSERT INTO "genres" ("name") VALUES ($1);`, [
        genre.name
    ]).then((response) => {
        console.log(`Success response: ${response}`);
        res.sendStatus(201);
    }).catch((error) => {
        console.log(`ERROR occurred during POST /genres: ${error}`);
        res.sendStatus(500);
    });
});

// PUT /genres/:id (data sent in body for specific genre id)
router.put('/:id', (req, res) => {
    const genre = req.body;
    const genreId = req.params.id;
    console.log(`PUT /genres/${genreId}: ${genre}`);
    pool.query(`UPDATE "genres" SET "name" = $1 WHERE "id" = $2;`, [
        genre.name,
        genreId
    ]).then((response) => {
        console.log(`Success response: ${response}`);
        res.sendStatus(202);
    }).catch((error) => {
        console.log(`ERROR occurred during PUT /genres/:id: ${error}`);
        res.sendStatus(500);
    });
});

// DELETE /genres/:id (just get rid of the selected genre by id)
router.delete('/:id', (req, res) => {
    const genreId = req.params.id;
    console.log(`DELETE /genres/${genreId}`);
    pool.query(`DELETE FROM "genres" WHERE "id" = $1;`, [
        genreId
    ]).then((response) => {
        console.log(`Success response: ${response}`);
        res.sendStatus(200);
    }).catch((error) => {
        console.log(`ERROR occurred during DELETE /genres/:id: ${error}`);
        res.sendStatus(500);
    });
});

module.exports = router;