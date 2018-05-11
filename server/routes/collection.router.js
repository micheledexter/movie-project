const router = require('express').Router();
const pool = require('../modules/database.connection');

// GET /collection (search query or all)
router.get('/', (req, res) => {
    const collectionSearch = req.query.q;
    if (collectionSearch != undefined) {
        pool.query(`SELECT "movies"."id", "movies"."name", "genres"."name" AS "genre", "movies"."release_date", "movies"."run_time", "movies"."image" FROM "movies" JOIN "genres" ON "movies"."genre_id" = "genres"."id" WHERE "movies"."name" ILIKE $1 OR "genres"."name" ILIKE $1;`, [
            ('%' + collectionSearch + '%')
        ]).then((response) => {
            console.log(response);
            res.send(response.rows);
        }).catch((error) => {
            console.log(`ERROR occurred during GET /collection: ${error}`);
            res.sendStatus(500);
        });
    } else {
        pool.query(`SELECT "movies"."id", "movies"."name", "genres"."name" AS "genre", "movies"."release_date", "movies"."run_time", "movies"."image" FROM "movies" JOIN "genres" ON "movies"."genre_id" = "genres"."id";`).then((response) => {
            res.send(response.rows);
        }).catch((error) => {
            console.log(`ERROR occurred during GET /collection: ${error}`);
            res.sendStatus(500);
        });
    }
});

// GET /collection/:id (single movie with genre by id)
router.get('/:id', (req, res) => {
    console.log(2, req.body, req.params, req.query);
    const collectionId = req.params.id;
    console.log(`GET /collection/${collectionId}`);
    pool.query(`SELECT "movies"."id", "movies"."name", "genres"."name" AS "genre", "movies"."release_date", "movies"."run_time", "movies"."image" FROM "movies" JOIN "genres" ON "movies"."genre_id" = "genres"."id" WHERE "movies"."id" = $1;`, [
        collectionId
    ]).then((response) => {
        res.send(response.rows);
    }).catch((error) => {
        console.log(`ERROR occurred during GET /collection/:id: ${error}`);
    });
});

module.exports = router;