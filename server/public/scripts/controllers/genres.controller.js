app.controller('GenresController', ['CollectionService', function (CollectionService) {
    console.log('GenresController has been loaded');

    var self = this;

    self.genres = CollectionService.genres;
    self.newGenre = CollectionService.newGenre;
    self.search = CollectionService.search;
    self.getGenres = CollectionService.getGenres;
    self.searchGenres = CollectionService.searchGenres;
    self.getGenreById = CollectionService.getGenreById;
    self.addNewGenre = CollectionService.addNewGenre;
    self.updateGenre = CollectionService.updateGenre;
    self.deleteGenre = CollectionService.deleteGenre;
    self.updateLists = CollectionService.updateLists;
    self.countGenreMovies = CollectionService.countGenreMovies;
    self.filter = '';
}]);