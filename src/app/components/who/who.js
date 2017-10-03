(function(angular) {

  angular.module('app').component('compWho', {
    // otra opción es poner aquí directamente el html asignándoselo a template:
    templateUrl:  'app/components/who/who.html',
    // en controller definimos la función que escribimos abajo
   controller: ['$state',controllerCompWho],
    // declaramos un alias para no tener que usar $ctrl.
   controllerAs: 'compWho'
});

function controllerCompWho ($state){
  var vm = this;
 
}

})(angular)