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
        }).catch(function (error) {
            console.log(`ERROR occurred during GET /collection: ${error}`);
            alert('ERROR occurred during GET /collection');
        })
    };

    // Search collection for movies matching format
    self.searchCollection = function (query) {
        query = '/collection?q=' + query;
        $http({
            method: 'GET',
            url: query
        }).then(function (response) {
            console.log(response.data);
        }).catch(function (error) {
            console.log(`ERROR occurred during GET /collection: ${error}`);
            alert('ERROR occurred during GET /collection');
        });
    };

    // Get all movies in the database
    self.getMovies = function () {
        $http({
            method: 'GET',
            url: '/movies'
        }).then(function (response) {
            self.movies.list = response.data;
        }).catch(function (error) {
            console.log(`ERROR occurred during GET /movies: ${error}`);
            alert('ERROR occurred during GET /movies');
        });
    };

    // Get all genres in the database
    self.getGenres = function () {
        $http({
            method: 'GET',
            url: '/genres'
        }).then(function (response) {
            self.genres.list = response.data;
        }).catch(function (error) {
            console.log(`ERROR occurred during GET /genres: ${error}`);
            alert('ERROR occurred during GET /genres');
        });
    };

    // Populate local information
    if (self.collection.list.length != self.collection.current) self.getCollection();
    if (self.movies.list.length != self.movies.current) self.getMovies();
    if (self.genres.list.length != self.genres.current) self.getGenres();
}]);