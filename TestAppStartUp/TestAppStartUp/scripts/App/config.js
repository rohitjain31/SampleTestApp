/// <reference path="../reference.js" />

angular.module("ExamSolution").config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider
            .otherwise("/");

    $stateProvider
                .state('index', {
                    url: '/',
                    templateUrl: "Templates/Login/login.html"
                })
    .state('Home', {
        url: '/Home',
        templateUrl: "Templates/Menus/Home.html"
    })
    .state('About', {
        url: '/About',
        templateUrl: "Templates/Menus/About.html"
    })
    .state('Contact', {
        url: '/Contact',
        templateUrl: "Templates/Menus/Contact.html"
    })
    .state('EBook', {
        url: '/EBook',
        templateUrl: "Templates/Menus/ebooks.html"
    })
    .state('Login', {
        url: '/Login',
        templateUrl: "Templates/Login/login.html",
        controller: 'loginCtrl'
    })
    .state('SignUp', {
        url: '/SignUp',
        templateUrl: "Templates/Login/signUp.html",
        controller: 'registerCtrl'
    })
    .state('Science', {
        url: '/Science',
        templateUrl: 'Templates/Menus/Quiz/Science.html',
        controller: 'scienceCtrl'
    })
    .state('Maths', {
        url: '/Maths',
        templateUrl: 'Templates/Menus/Quiz/Maths.html',
        controller: 'mathsCtrl'
    })
    .state('SSC', {
        url: '/SSC',
        templateUrl: 'Templates/Menus/Exams/ssc.html',
        controller: 'sscCtrl'
    })
    .state('Admin', {
        url: '/Admin',
        TemplateUrl: "Templates/Menus/AdminPage.html",
        controller : 'adminCtrl'
    })
}]);