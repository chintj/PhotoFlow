'use strict';

/**
 * @ngdoc function
 * @name photoFlowApp.controller:ArticleCtrl
 * @description
 * # ArticleCtrl
 * Controller of the photoFlowApp
 */
angular.module('photoFlowApp')
  .controller('ArticleCtrl', ['$scope', 'apiHelper', '$routeParams', '$location',

    function($scope, apiHelper, $routeParams, $location) {
      window.prerenderReady = false;
      var prefix = '/api';
      var apiMap = {
        // delBlackList: 'GET /api/app/{app_id}/blacklist/delete',
        getBlog: 'GET ' + prefix + '/blog/article/:id/'
      };
      apiHelper.config(apiMap);

      apiHelper('getBlog', {
        param: {
          'id': $routeParams.id
        }
      }).then(function(data) {
        $scope.blog = data.data;
        $scope.markdown = data.data.content;
        $scope.seo = {
          pageTitle: $scope.blog.title,
          pageDescription: $scope.blog.abstract
        };
        window.prerenderReady = true;
      });

      $scope.jumpToURL = function(path) {
        $location.path(path);
      };
    }
  ]);