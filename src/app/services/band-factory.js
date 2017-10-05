(function (angular) {
    angular.module('app').factory('bandFactory', [bandFactory]);
    function bandFactory() {
        var module = {};
        var self = module;

        var bandarray = [
            {
                id: 1,
                name: 'The Who',
                url: '/the-who',
                appvar:'who',
                ngclass: 'whoclass',
                txt: 'The Who es una banda británica de rock considerada un icono de la música del siglo XX, formada en 1962 con el nombre de The Detours que cambió a aquel tras la incorporación del baterista Keith Moon. De esa manera el grupo, con Roger Daltrey (voz), Pete Townshend (guitarra, teclados y voz), John Entwistle (bajo y voz) y Keith Moon (batería), potenció su carrera escalando a los primeros puestos del ambiente del rock inglés.',
                img: 'app\resources\The-Who-en-Chile.jpg',
                template: '<comp-who></comp-who>',
                /* data: {
                  meta: {
                    'og:title': "The Who",
                    'og:description': 'The Who sample page with a brief description of the rock band and the youtube video: "My generation"',
                    'og:keywords': 'rock, who, "My generation"'
                  }
                },
                */ video: 'Lelc4pvmp60'
            },
            {
                id: 2,
                name: 'The Rolling Stones',
                url: '/the-rolling-stones',
                appvar:'tsr',
                ngclass: 'trsclass',
                txt: 'The Rolling Stones es una banda británica de rock originaria de Londres. La banda se fundó en abril de 19622​ por Brian Jones, Mick Jagger, Keith Richards, Bill Wyman, Ian Stewart y Charlie Watts.2​ Brian Jones fue despedido en junio de 1969, falleciendo tres semanas después, siendo reemplazado por el guitarrista Mick Taylor, que dejaría el grupo en 1975 y sería a su vez reemplazado por Ron Wood.',
                img: 'app\resources\RollingStones.jpg',
                template: '<comp-trs></comp-trs>',
                /* data: {
                  meta: {
                    'og:title': "The Rolling Stones",
                    'og:description': 'The Rolling Stones sample page with a brief description of the rock band and the youtube video: "Angie"',
                    'og:keywords': 'rock, Rolling Stones, "Angie"'
                  }
                },
                */ video: 'UYfFrb6ZECY'
            },
            {
                id: 3,
                name: 'The Beatles',
                url: '/the-beatles',
                appvar:'tb',
                ngclass: 'tbclass',
                txt: 'The Beatles fue una banda de pop/rock inglesa activa durante la década de 1960, y reconocida como la más exitosa comercialmente y la más alabada por la crítica en la historia de la música popular. Formada en Liverpool, estuvo constituida desde 1962 por John Lennon (guitarra rítmica, vocalista), Paul McCartney (bajo, vocalista), George Harrison (guitarra solista, vocalista) y Ringo Starr (batería, vocalista).',
                img: 'app\resources\beatles.jpg',
                template: '<comp-tb></comp-tb>',
                /* data: {
                  meta: {
                    'og:title': "The Beatles",
                    'og:description': 'The Beatles sample page with a brief description of the rock band and the youtube video: "With A Little Help From My Friends"',
                    'og:keywords': 'rock, Beatles, "With A Little Help From My Friends'
                  }
                },
                */ video: '75Oct1Qv8x0'
            },
            {
                id: 4,
                name: 'Queen',
                url: '/queen',
                appvar:'qn',
                ngclass: 'qnclass',
                txt: 'Queen es una banda británica de rock formada en 1970 en Londres por el cantante Freddie Mercury, el guitarrista Brian May, el baterista Roger Taylor y el bajista John Deacon. Si bien el grupo ha presentado bajas de dos de sus miembros (Mercury, fallecido en 1991, y Deacon, retirado en 1997), los integrantes restantes, May y Taylor, continúan trabajando bajo el nombre Queen, por lo que la banda aún es considerada activa',
                img: 'app\resources\Queen.jpg',
                template: '<comp-queen></comp-queen>',
                /* data: {
                  meta: {
                    'og:title': "Queen",
                    'og:description': 'Queen sample page with a brief description of the rock band and the youtube video: "Mustafa Ibrahim"',
                    'og:keywords': 'rock, Queen, "Mustafa Ibrahim"'
                  }
                },
                */ video: '5-zh0a6nDTo'
            }
        ];
        module.getAllbands = function () {
            return bandarray;
        };
        module.getBandById = function (_idband_) {
            var band = '';
            var idband = parseInt(_idband_)
            //es interesante usar firewalls
            if (!idband) {
                return false;
            } //end firewall
            //con un while es mas rapido (no importa la posicion) while (len--)
            for (var i = 0; i < bandarray.length; i++) {
                //lo optimo es usar los tres iguales para comprobar tambien el tipo además del valor (más eficiente)
                if (idband === bandarray[i].id) {
                    band = bandarray[i];
                }
            }
            return band;
        };


        return module;
    };
})(angular);
