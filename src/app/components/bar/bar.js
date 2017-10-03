(function(angular) {

  angular.module('app').component('compBar', {
    // otra opción es poner aquí directamente el html asignándoselo a template:
    templateUrl:  'app/components/bar/bar.html',
    // en controller definimos la función que escribimos abajo
   controller: ['$state',controllerCompBar],
    // declaramos un alias para no tener que usar $ctrl.
   controllerAs: 'compBar'
});

function controllerCompBar ($state){
  var vm = this;
 
}

})(angular)