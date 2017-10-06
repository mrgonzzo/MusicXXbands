'use strict';
(function (angular) {
  /* Declaramos el módulo */
  angular.module('app', ['ui.router', 'youtube-embed', 'ngMeta']);

  angular.module('app').config(['ngMetaProvider','$stateProvider', '$urlRouterProvider', appConfig]).run(['ngMeta', function (ngMeta) {
    ngMeta.init();
  }]);

  function appConfig(ngMetaProvider, $stateProvider, $urlRouterProvider ) {
    
    var home = {
      name: 'home',
      url: '/',
      data: {
        meta: {
          'og:title': "Angular Rocks",
          'og:description': 'Esto es la descripción por defecto',
          'og:keywords': 'angular rocks default'
        }
      },
      template: '<comp-home></comp-home>'
      
    };
    var foo = {
      name: 'foo',
      url: '/foo',
      template: '<comp-foo></comp-foo>',
      data: {
        meta: {
          'og:title': "Angular Rocks",
          'og:description': 'Esto es la descripción por defecto',
          'og:keywords': 'angular rocks default'
        }
      }
    };

    var bar = {
      name: 'bar',
      url: '/bar',
      template: '<comp-bar></comp-bar>',
      data: {
        meta: {
          'og:title': "Angular Rocks",
          'og:description': 'Esto es la descripción por defecto',
          'og:keywords': 'angular rocks default'
        }
      }
    };
    var band = {
      name: 'band',
      url: '/:url',
      params: {
        url: { squash: true, value: null },
        name: { squash: true, value: null },
        id: { squash: true, value: null }
      },
      template: '<comp-band></comp-band>'
     
    };

    $stateProvider.state(home);
    $stateProvider.state(foo);
    $stateProvider.state(bar);
    $stateProvider.state(band);
    $urlRouterProvider.otherwise('/');
  }
})(angular);