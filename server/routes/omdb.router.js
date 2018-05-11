const router = require('express').Router();
const pool = require('../modules/database.connection');

const API_KEY = '19a2ba73';

router.get('/:t', (req, res) => {
    const queryString = `http://www.omdbapi.com/?apikey=${API_KEY}&t=${req.params.t}`;
    console.log(req.body, req.params, req.query); 
});

module.exports = router;