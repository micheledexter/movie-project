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
    self.order = {
        category: 'name'
    }

    self.getCollection = function () {
        $http({
            method: 'GET',
            url: '/collection'
        }).then(function (response) {
            console.log('Received response');
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

    if (self.collection.list.length == 0) self.getCollection();
}]);