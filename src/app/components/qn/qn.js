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
  vm.qn = { txt:'Queen es una banda británica de rock formada en 1970 en Londres por el cantante Freddie Mercury, el guitarrista Brian May, el baterista Roger Taylor y el bajista John Deacon. Si bien el grupo ha presentado bajas de dos de sus miembros (Mercury, fallecido en 1991, y Deacon, retirado en 1997), los integrantes restantes, May y Taylor, continúan trabajando bajo el nombre Queen, por lo que la banda aún es considerada activa',
  img:'app\resources\Queen.jpg',
  video:'https://www.youtube.com/watch?v=5-zh0a6nDTo'
};
}

})(angular)