(function(angular) {

  angular.module('app').component('compFoo', {
    // otra opción es poner aquí directamente el html asignándoselo a template:
    templateUrl:  'app/components/foo/foo.html',
    // en controller definimos la función que escribimos abajo
   controller: ['$state',controllerCompFoo],
    // declaramos un alias para no tener que usar $ctrl.
   controllerAs: 'compFoo'
});

function controllerCompFoo ($state){
  var vm = this;
 
}

})(angular)