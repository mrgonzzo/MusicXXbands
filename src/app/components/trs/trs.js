(function(angular) {

  angular.module('app').component('compTrs', {
    // otra opción es poner aquí directamente el html asignándoselo a template:
    templateUrl:  'app/components/trs/trs.html',
    // en controller definimos la función que escribimos abajo
   controller: ['$state',controllerCompTrs],
    // declaramos un alias para no tener que usar $ctrl.
   controllerAs: 'compTrs'
});

function controllerCompTrs ($state){
  var vm = this;
 
}

})(angular)