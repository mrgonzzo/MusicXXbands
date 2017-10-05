(function(angular) {

  angular.module('app').component('compBand', {
    // otra opción es poner aquí directamente el html asignándoselo a template:
    templateUrl:  'app/components/band/band.html',
    // en controller definimos la función que escribimos abajo
   controller: ['$state','$stateParams','bandFactory',controllerCompBand],
    // declaramos un alias para no tener que usar $ctrl.
   controllerAs: 'compBand',
   bindings: {
    itemBand: '<'
}
});

function controllerCompBand ($state,$stateParams,bandFactory){
  var vm = this;
  
  var idband = $stateParams.id;
  
       vm.band =bandFactory.getBandById(idband);
      console.log(vm.band);
  
};
})(angular)