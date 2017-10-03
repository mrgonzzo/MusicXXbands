'use strict';
(function (angular) {
  /* Declaramos el módulo */
  angular.module('app', ['ui.router']);

  angular.module('app').config(['$stateProvider', '$urlRouterProvider', appConfig]);

  function appConfig($stateProvider, $urlRouterProvider,ngaudio) {
    var home = {
      name: 'home',
      url: '/home',
      template: '<comp-home></comp-home>'
    };
    var foo = {
      name: 'foo',
      url: '/foo',
      template: '<comp-foo></comp-foo>'
    };
    
    var bar = {
      name: 'bar',
      url: '/bar',
      template: '<comp-bar></comp-bar>'
    };
    var trs = {
      name: 'trs',
      url: '/the-rolling-stones',
      template: '<comp-trs></comp-trs>'
    };
    var tb = {
      name: 'tb',
      url: '/the-beatles',
      template: '<comp-tb></comp-tb>'
    };
    var queen = {
      name: 'queen',
      url: '/queen',
      template: '<comp-queen></comp-queen>'
    };
    var who = {
      name: 'who',
      url: '/the-who',
      template: '<comp-who></comp-who>'
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