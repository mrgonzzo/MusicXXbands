(function (angular) {

  angular.module('app').component('compHome', {
    // otra opción es poner aquí directamente el html asignándoselo a template:
    templateUrl: 'app/components/home/home.html',
    // en controller definimos la función que escribimos abajo
    controller: ['$state', 'bandFactory', 'ngMeta', controllerCompHome],
    // declaramos un alias para no tener que usar $ctrl.
    controllerAs: 'compHome'
  });

  function controllerCompHome($state, bandFactory, ngMeta) {
    var vm = this;

    vm.allbands = bandFactory.getAllbands();

    vm.goToFoo = function () {
      $state.go('foo');
    }
    vm.goToBar = function () {
      $state.go('bar');
    }

    vm.goToBand = function (_urlBand_, _nameBand_, _idBand_) {

      $state.go('band', { url: _urlBand_, name: _nameBand_, id: _idBand_ });

    }
  } //end controller

})(angular)