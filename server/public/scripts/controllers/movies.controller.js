app.controller('MoviesController', ['CollectionService', 'OmdbService', function (CollectionService, OmdbService) {
    console.log('MoviesController has been loaded');

    var self = this;

    self.getCollection = CollectionService.getCollection;
    self.collection = CollectionService.collection;
    self.order = CollectionService.order;
}]);