'use strict';

/**
 * @ngdoc overview
 * @name photoFlowApp
 * @description
 * # photoFlowApp
 *
 * Main module of the application.
 */
angular.module('photoFlowApp', ['ngRoute', 'photoFlowApp.base.services.api', 'ngSanitize', 'btford.markdown', 'bootstrapLightbox'])
  .config(function($routeProvider, $locationProvider) {

    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'PictureCtrl'
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

    $locationProvider.hashPrefix('!');

  });