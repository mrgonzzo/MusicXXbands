'use strict';
(function (angular) {
  /* Declaramos el módulo */
  angular.module('app', ['ui.router', 'youtube-embed', 'ngMeta']);

  angular.module('app').config(['$stateProvider', '$urlRouterProvider', 'ngMetaProvider', appConfig]).run(['ngMeta', function (ngMeta) {
    ngMeta.init();
  }]);

  function appConfig($stateProvider, $urlRouterProvider, ngMetaProvider) {
    console.log('en app.js');
    var home = {
      name: 'home',
      url: '/home',
      template: '<comp-home></comp-home>',
      data: {
        meta: {
          'og:title': "Angular Rocks",
          'og:description': 'Esto es la descripción por defecto',
          'og:keywords': 'angular rocks default'
        }
      }
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
      url: '/band/:nameBand',
      params: {
        url: { squash: true, value: null },
        name: { squash: true, value: null },
        id: { squash: true, value: null }
      },
      template: '<comp-band></comp-band>',
      data: {
        meta: {
          'og:title': ":nameBand",
          'og:description': 'The Rolling Stones sample page with a brief description of the rock band and the youtube video "Angie"',
          'og:keywords': 'rock, Rolling Stones, "Angie"'
        }
      }
    };

    $stateProvider.state(home);
    console.log('state', $stateProvider.state, 'home', home);
    $stateProvider.state(foo);
    $stateProvider.state(bar);
    $stateProvider.state(band);
    $urlRouterProvider.otherwise('/');
  }
})(angular);