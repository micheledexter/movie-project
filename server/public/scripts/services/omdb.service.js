app.service('OmdbService', ['$http', function ($http) {
    console.log('OmdbService has been loaded');

    var self = this;

    const API_KEY = '19a2ba73';
    self.omdbQuery = {
        list: []
    };

    self.search = {
        query: ''
    };

    self.omdbMovie = {
        name: '',
        genre: '',
        release_date: '',
        run_time: '',
        image: '',
        raw: {}
    };

    self.queryOmdb = function (query) {
        $http({
            method: 'GET',
            url: `http://www.omdbapi.com/?apikey=${API_KEY}&t=${query}`
        }).then(function (response) {
            const movie = response.data;
            self.omdbMovie.name = movie.Title;
            self.omdbMovie.genre = movie.Genre.split(', ')[0];
            let rd = movie.Released.split(' ');
            switch (rd[1]) {
                case 'Jan':
                    rd[1] = '01';
                    break;
                case 'Feb':
                    rd[1] = '02';
                    break;
                case 'Mar':
                    rd[1] = '03';
                    break;
                case 'Apr':
                    rd[1] = '04';
                    break;
                case 'May':
                    rd[1] = '05';
                    break;
                case 'Jun':
                    rd[1] = '06';
                    break;
                case 'Jul':
                    rd[1] = '07';
                    break;
                case 'Aug':
                    rd[1] = '08';
                    break;
                case 'Sep':
                    rd[1] = '09';
                    break;
                case 'Oct':
                    rd[1] = '10';
                    break;
                case 'Nov':
                    rd[1] = '11';
                    break;
                case 'Dec':
                    rd[1] = '12';
                    break;
            }
            self.omdbMovie.release_date = rd[2] + '-' + rd[1] + '-' + rd[0];
            self.omdbMovie.run_time = movie.Runtime.split(' ')[0];
            self.omdbMovie.image = movie.Poster;
            self.omdbMovie.raw = movie;
        }).catch(function (error) {
            console.log(`ERROR occurred during GET /omdb: ${error}`);
        });
    };
}]);