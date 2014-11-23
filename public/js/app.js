angular.module('ContactsApp',['ngRoute','ngResource'])
    .config(function($routeProvider, $locationProvider){
        $routeProvider
            .when('/course', {
                controller: 'CourseController',
                templateUrl: 'views/course.html'
            });

        $locationProvider.html5Mode(true);
    });
