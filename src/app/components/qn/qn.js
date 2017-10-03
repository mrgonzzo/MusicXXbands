(function(angular) {

  angular.module('app').component('compQueen', {
    // otra opción es poner aquí directamente el html asignándoselo a template:
    templateUrl:  'app/components/qn/qn.html',
    // en controller definimos la función que escribimos abajo
   controller: ['$state',controllerCompQueen],
    // declaramos un alias para no tener que usar $ctrl.
   controllerAs: 'compQueen'
});

function controllerCompQueen ($state){
  var vm = this;
  vm.videoQn='https://www.youtube.com/watch?v=5-zh0a6nDTo';
}

})(angular)