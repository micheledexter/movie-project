app.service('CollectionService', ['$http', function ($http) {
    console.log('CollectionService has been loaded');

    var self = this;

    self.collection = {
        list: [],
        current: -1
    };
    self.movies = {
        list: [],
        current: -1
    };
    self.genres = {
        list: [],
        current: -1
    };
    self.search = {
        string: '',
        results: []
    };
    self.newMovie = {
        name: '',
        genre_id: '',
        release_date: '',
        run_time: '',
        image: ''
    };
    self.newGenre = {
        genre: ''
    };
    self.order = {
        category: 'name'
    }

    /*
    ALL OF THE GET REQUESTS
    */

    // Get all movies in the database in formatted form
    self.getCollection = function () {
        $http({
            method: 'GET',
            url: '/collection'
        }).then(function (response) {
            self.collection.list = response.data;
            for (let i = 0; i < self.collection.list.length; i++) {
                if (!self.collection.list[i].image.includes('/')) {
                    self.collection.list[i].image = '/images/' + self.collection.list[i].image;
                }
            }
            self.collection.current = self.collection.list.length;
        }).catch(function (error) {
            console.log(`ERROR occurred during GET /collection: ${error}`);
            alert('ERROR occurred during GET /collection');
        })
    };

    // Search collection for movies matching query in formatted form
    self.searchCollection = function (query) {
        query = '/collection?q=' + query;
        $http({
            method: 'GET',
            url: query
        }).then(function (response) {
            self.search.results = response.data;
        }).catch(function (error) {
            console.log(`ERROR occurred during GET /collection: ${error}`);
            alert('ERROR occurred during GET /collection');
        });
    };

    // Select a movie by ID from the collection in formatted form
    self.getCollectionItemById = function (id) {
        id = '/collection/' + id;
        $http({
            method: 'GET',
            url: id
        }).then(function (response) {
            self.search.results = response.data;
        }).catch(function (error) {
            console.log(`ERROR occurred during GET /collection/:id: ${error}`);
            alert('ERROR occurred during GET /collection/:id');
        })
    }

    // Get all movies in the database
    self.getMovies = function () {
        $http({
            method: 'GET',
            url: '/movies'
        }).then(function (response) {
            self.movies.list = response.data;
            self.movies.current = self.movies.list.length;
        }).catch(function (error) {
            console.log(`ERROR occurred during GET /movies: ${error}`);
            alert('ERROR occurred during GET /movies');
        });
    };

    // Search table for movies matching query
    self.searchMovies = function (query) {
        query = '/movies?q=' + query;
        $http({
            method: 'GET',
            url: query
        }).then(function (response) {
            self.search.results = response.data;
        }).catch(function (error) {
            console.log(`ERROR occurred during GET /movies: ${error}`);
            alert('ERROR occurred during GET /movies');
        });
    };

    // Select a movie by ID from the table
    self.getMovieById = function (id) {
        id = '/movies/' + id;
        $http({
            method: 'GET',
            url: id
        }).then(function (response) {
            self.search.results = response.data;
        }).catch(function (error) {
            console.log(`ERROR occurred during GET /movies/:id: ${error}`);
            alert('ERROR occurred during GET /movies/:id');
        });
    };

    // Get all genres in the database
    self.getGenres = function () {
        $http({
            method: 'GET',
            url: '/genres'
        }).then(function (response) {
            self.genres.list = response.data;
            self.genres.current = self.genres.list.length;
        }).catch(function (error) {
            console.log(`ERROR occurred during GET /genres: ${error}`);
            alert('ERROR occurred during GET /genres');
        });
    };

    // Search table for genres matching query
    self.searchGenres = function (query) {
        query = '/genres?q=' + query;
        $http({
            method: 'GET',
            url: query
        }).then(function (response) {
            self.search.results = response.data;
        }).catch(function (error) {
            console.log(`ERROR occurred during GET /genres: ${error}`);
            alert('ERROR occurred during GET /genres');
        });
    };

    // Select a genre by ID from the table
    self.getGenreById = function (id) {
        id = '/genres/' + id;
        $http({
            method: 'GET',
            url: id
        }).then(function (response) {
            self.search.results = response.data;;
        }).catch(function (error) {
            console.log(`ERROR occurred during GET /genres/:id: ${error}`);
            alert('ERROR occurred during GET /genres/:id');
        });
    };

    /*
    ALL OF THE POST REQUESTS
    */

    // Add a movie to the table
    self.addNewMovie = function (movie) {
        const genres = self.genres.list;
        for (let i = 0; i < genres.length; i++) {
            if (movie.genre == genres[i].name) {
                movie.genre_id = genres[i].id;
                break;
            }
        }
        console.log(movie);
        $http({
            method: 'POST',
            url: '/movies',
            data: movie
        }).then(function (response) {
            console.log(response.data);
            self.getMovies();
            self.getCollection();
        }).catch(function (error) {
            console.log(`ERROR occurred during POST /movies: ${error}`);
            alert('ERROR occurred during POST /movies');
        });
    };

    // Add a genre to the table
    self.addNewGenre = function (genre) {
        $http({
            method: 'POST',
            url: '/movies',
            data: genre
        }).then(function (response) {
            console.log(response.data);
            self.getGenres();
            self.getCollection();
        }).catch(function (error) {
            console.log(`ERROR occurred during POST /genres: ${error}`);
            alert('ERROR occurred during POST /genres');
        });
    };

    /*
    ALL OF THE PUT REQUESTS
    */

    // Update a movie in the table
    self.updateMovie = function (movie, movieId) {
        movieId = '/movies/' + movieId;
        $http({
            method: 'PUT',
            url: movieId,
            data: movie
        }).then(function (response) {
            console.log(response.data);
            self.getMovies();
            self.getCollection();
        }).catch(function (error) {
            console.log(`ERROR occurred during PUT /movies/:id: ${error}`);
            alert('ERROR occurred during PUT /movies/:id');
        });
    };

    // Update a genre in the table
    self.updateGenre = function (genre, genreId) {
        genreId = '/genres/' + genreId;
        $http({
            method: 'PUT',
            url: genreId,
            data: genre
        }).then(function (response) {
            console.log(response.data);
            self.getGenres();
            self.getCollection();
        }).catch(function (error) {
            console.log(`ERROR occurred during PUT /genres/:id: ${error}`);
            alert('ERROR occurred during PUT /genres/:id');
        });
    };

    /*
    ALL OF THE DELETE REQUESTS
    */

    // Delete a movie from the table
    self.deleteMovie = function (movieId) {
        movieId = '/movies/' + movieId;
        $http({
            method: 'DELETE',
            url: movieId
        }).then(function (response) {
            console.log(response.data);
            self.getMovies();
            self.getCollection();
        }).catch(function (error) {
            console.log(`ERROR occurred during DELETE /movies/:id`);
            alert('ERROR occurred during DELETE /movies/:id');
        });
    };

    // Delete a genre from the table
    self.deleteGenre = function (genreId) {
        genreId = '/genres/' + genreId;
        $http({
            method: 'DELETE',
            url: genreId
        }).then(function (response) {
            console.log(response.data);
            self.getGenres();
            self.getCollection();
        }).catch(function (error) {
            console.log(`ERROR occurred during DELETE /genres/:id`);
            alert('ERROR occurred during DELETE /genres/:id');
        });
    };

    // Populate local information
    self.updateLists = function () {
        if (self.collection.list.length != self.collection.current) {
            self.getCollection();
            self.collection.current = self.collection.list.length;
        }
        if (self.movies.list.length != self.movies.current) {
            self.getMovies();
            self.movies.current = self.movies.current.length;
        }
        if (self.genres.list.length != self.genres.current) {
            self.getGenres();
            self.genres.current = self.genres.current.length;
        }
    }
    
    self.updateLists();
}]);