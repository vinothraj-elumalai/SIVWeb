var sivwebapp = angular.module("sivweb", ["ngRoute"]);
sivwebapp.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "templates/test.html"
    })
    .when("/login", {
        templateUrl : "templates/login.html"
    })
    .when("/createuser", {
        templateUrl : "templates/createuser.html",
        controller : "createUserCtrl"
    });
});