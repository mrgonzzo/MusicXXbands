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
  vm.trs = { txt:'The Rolling Stones es una banda británica de rock originaria de Londres. La banda se fundó en abril de 19622​ por Brian Jones, Mick Jagger, Keith Richards, Bill Wyman, Ian Stewart y Charlie Watts.2​ Brian Jones fue despedido en junio de 1969, falleciendo tres semanas después, siendo reemplazado por el guitarrista Mick Taylor, que dejaría el grupo en 1975 y sería a su vez reemplazado por Ron Wood.',
  img:'app\resources\RollingStones.jpg',
  video:'https://www.youtube.com/watch?v=UYfFrb6ZECY'
};
}

})(angular)