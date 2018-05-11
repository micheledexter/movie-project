const router = require('express').Router();
const pool = require('../modules/database.connection');

const API_KEY = '19a2ba73';

router.get('/:t', (req, res) => {
    console.log(req.body);
    console.log(req.query);
    console.log(req.params);
});

module.exports = router;