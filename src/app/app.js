'use strict';
(function (angular) {
  /* Declaramos el módulo */
  angular.module('app', ['ui.router', 'youtube-embed', 'ngMeta']);

  angular.module('app').config(['$stateProvider', '$urlRouterProvider', 'ngMetaProvider', appConfig]).run(['ngMeta', function(ngMeta) { 
    ngMeta.init();
  }]);

  function appConfig($stateProvider, $urlRouterProvider,ngMetaProvider) {

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
    var trs = {
      name: 'trs',
      url: '/the-rolling-stones',
      template: '<comp-trs></comp-trs>',
      data: {
        meta: {
          'og:title': "The Rolling Stones",
          'og:description': 'The Rolling Stones sample page with a brief description of the rock band and the youtube video "Angie"',
          'og:keywords': 'rock, Rolling Stones, "Angie"'
        }
      }
    };
    var tb = {
      name: 'tb',
      url: '/the-beatles',
      template: '<comp-tb></comp-tb>',
      data: {
        meta: {
          'og:title': "The Beatles",
          'og:description': 'The Beatles sample page with a brief description of the rock band and the youtube video "With A Little Help From My Friends"',
          'og:keywords': 'rock, Beatles, "With A Little Help From My Friends'
        }
      }
    };
    var queen = {
      name: 'queen',
      url: '/queen',
      template: '<comp-queen></comp-queen>',
      data: {
        meta: {
          'og:title': "Queen",
          'og:description': 'Queen sample page with a brief description of the rock band and the youtube video "Mustafa Ibrahim"',
          'og:keywords': 'rock, Queen, "Mustafa Ibrahim"'
        }
      }
    };
    var who = {
      name: 'who',
      url: '/the-who',
      template: '<comp-who></comp-who>',
      data: {
        meta: {
          //title:"The Who",
          'og:title': "The Who",
          'og:description': 'The Who sample page with a brief description of the rock band and the youtube video "My generation"',
          'og:keywords': 'rock, who, "My generation"'
        }
      }
    };
    $stateProvider.state(home);
    $stateProvider.state(foo);
    $stateProvider.state(bar);
    $stateProvider.state(trs);
    $stateProvider.state(tb);
    $stateProvider.state(queen);
    $stateProvider.state(who);
    $urlRouterProvider.otherwise('/home');
  }
})(angular);