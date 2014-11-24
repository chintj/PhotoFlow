'use strict';

/**
 * @ngdoc overview
 * @name photoFlowApp
 * @description
 * # photoFlowApp
 *
 * Main module of the application.
 */
angular.module('photoFlowApp', ['ngRoute', 'photoFlowApp.base.services.api'])
  .config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/blog', {
        templateUrl: 'views/blog.html',
        controller: 'BlogCtrl'
      })
      .when('/article/:id', {
        templateUrl: 'views/article.html',
        controller: 'ArticleCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });