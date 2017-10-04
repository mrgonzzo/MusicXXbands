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
  vm.tb = { txt:'The Beatles fue una banda de pop/rock inglesa activa durante la década de 1960, y reconocida como la más exitosa comercialmente y la más alabada por la crítica en la historia de la música popular. Formada en Liverpool, estuvo constituida desde 1962 por John Lennon (guitarra rítmica, vocalista), Paul McCartney (bajo, vocalista), George Harrison (guitarra solista, vocalista) y Ringo Starr (batería, vocalista).',
  img:'app\resources\beatles.jpg',
  video:'75Oct1Qv8x0'
};
}

})(angular)