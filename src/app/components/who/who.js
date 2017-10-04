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
  vm.who = { txt:'The Who es una banda británica de rock considerada un icono de la música del siglo XX, formada en 1962 con el nombre de The Detours que cambió a aquel tras la incorporación del baterista Keith Moon. De esa manera el grupo, con Roger Daltrey (voz), Pete Townshend (guitarra, teclados y voz), John Entwistle (bajo y voz) y Keith Moon (batería), potenció su carrera escalando a los primeros puestos del ambiente del rock inglés.',
            img:'app\resources\The-Who-en-Chile.jpg',
            video:'Lelc4pvmp60'
          };
           
    
       
  
};
})(angular)