(function (angular) {

  angular.module('app').component('compBand', {
    // otra opción es poner aquí directamente el html asignándoselo a template:
    templateUrl: 'app/components/band/band.html',
    // en controller definimos la función que escribimos abajo
    controller: ['$state', '$stateParams','ngMeta', 'bandFactory', controllerCompBand],
    // declaramos un alias para no tener que usar $ctrl.
    controllerAs: 'compBand',
  });

  function controllerCompBand($state, $stateParams, ngMeta, bandFactory) {
    var vm = this;
    
    var idband = $stateParams.id;
    vm.band = bandFactory.getBandById(idband);
    ngMeta.setTag('og:title',vm.band.name);
    ngMeta.setTag('og:description',vm.band.description);
    ngMeta.setTag('og:keywords',vm.band.keywords);
  };
})(angular)