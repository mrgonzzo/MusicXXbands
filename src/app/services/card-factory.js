(function (angular) {
    angular.module('app').factory('cardFactory', [cardFactory]);
    function cardFactory() {
        var module = {};
        var self = module;
        var cardarray = [
            { id: 1,part: 'a', picture: "1.png", stat: 'faced', isDisable: 'true' },
            { id: 2,part: 'a', picture: "2.png", stat: 'faced', isDisable: 'true' },
            { id: 3,part: 'a', picture: "3.png", stat: 'faced', isDisable: 'true' },
            { id: 4,part: 'a', picture: "4.png", stat: 'faced', isDisable: 'true' },
            { id: 5,part: 'a', picture: "5.png", stat: 'faced', isDisable: 'true' },
            { id: 6,part: 'a', picture: "6.png", stat: 'faced', isDisable: 'true' }
        ];
        var turn = ['f','f'];
        // -> Fisher–Yates shuffle algorithm
        var shuffleArray = function (deckarray) {
            var m = deckarray.length, t, i;

            // While there remain elements to shuffle
            while (m) {
                // Pick a remaining element…
                i = Math.floor(Math.random() * m--);

                // And swap it with the current element.
                t = deckarray[m];
                deckarray[m] = deckarray[i];
                deckarray[i] = t;
            }

            return deckarray;
        };

        var linkcard = function (cardarray) {

            var barray = angular.copy(cardarray);
            for (var i = 0; i < barray.length; i++) {
                barray[i].part = 'b';
            }
            return barray
        };
        var pararray = linkcard(cardarray);
        cardarray.push.apply(cardarray, pararray);
        module.getDeck = function () {
            shuffleArray(cardarray);
            return cardarray;
        };
        module.getTurn = function () {
          
            return turn;
        };
        return module;
    };
})(angular);
