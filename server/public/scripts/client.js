console.log('js');

const API_KEY = '19a2ba73';

var app = angular.module('MovieApp', ['ngRoute', 'ngMaterial']);

app.config(function ($routeProvider) {
    console.log('Route config loaded');

    $routeProvider
    .when('/', {
        redirectTo: '/movies'
    }).when('/movies', {
        templateUrl:'views/movies.view.html',
        controller: 'MoviesController as vm'
    }).when('/genres', {
        templateUrl: 'views/genres.view.html',
        controller: 'GenresController as vm'
    }).otherwise({
        template: '<h1>ERROR 404</h1>'
    });
});