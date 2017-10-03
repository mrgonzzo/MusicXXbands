(function(angular) {

  angular.module('app').component('compTb', {
    // otra opción es poner aquí directamente el html asignándoselo a template:
    templateUrl:  'app/components/tb/tb.html',
    // en controller definimos la función que escribimos abajo
   controller: ['$state',controllerCompTb],
    // declaramos un alias para no tener que usar $ctrl.
   controllerAs: 'compTb'
});

function controllerCompTb ($state){
  var vm = this;
  
  vm.videoTb='https://www.youtube.com/watch?v=75Oct1Qv8x0'
}

})(angular)