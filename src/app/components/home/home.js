(function(angular) {

  angular.module('app').component('compHome', {
    // otra opción es poner aquí directamente el html asignándoselo a template:
    templateUrl:  'app/components/home/home.html',
    // en controller definimos la función que escribimos abajo
   controller: ['$state',controllerCompHome],
    // declaramos un alias para no tener que usar $ctrl.
   controllerAs: 'compHome'
});

function controllerCompHome ($state){
  var vm = this;

  vm.goToFoo=function(){
    $state.go('foo');
 }
  vm.goToBar=function(){
     $state.go('bar');
  }
  vm.goToTrs=function(){
    $state.go('trs');
 }
 vm.goToTb=function(){
  $state.go('tb');
}
vm.goToQn=function(){
  $state.go('queen');
}
vm.goToWho=function(){
  $state.go('who');
}

} //end controller

})(angular)