const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const bodyParser = require('body-parser');
const movieRouter = require('./routes/movies.router');
const genreRouter = require('./routes/genres.router');
const collectionRouter = require('./routes/collection.router');
const omdbRouter = require('./routes/omdb.router');

app.use(express.static('server/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use('/movies', movieRouter);
app.use('/genres', genreRouter);
app.use('/collection', collectionRouter);
app.listen(PORT, () => {
    console.log(`Express listening on port: ${PORT}`);
});