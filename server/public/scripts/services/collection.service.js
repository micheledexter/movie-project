app.service('CollectionService', ['$http', function ($http) {
    console.log('CollectionService has been loaded');

    var self = this;

    self.collection = {
        list: []
    };
    self.movies = {
        list: []
    };
    self.genres = {
        list: []
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


    self.getCollection = function () {
        $http({
            method: 'GET',
            url: '/collection'
        }).then(function (response) {
            console.log('Received response');

        })
    };
}]);