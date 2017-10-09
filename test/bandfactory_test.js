'use strict';

describe("angular.module('app').factory('bandFactory')", function () {
      
    beforeEach(function () {
        angular.module('app').factory('bandFactory');
    });

    describe('band Factory', function () {

        var bandFactory;

        beforeEach(function () {
            inject(['bandFactory', function (service) {
                bandFactory = service;
            }
            ]);
        });

        it('debe devolver una lista de cuatro bandas', function () {
            var bands = bandFactory.getAllbands();
            expect(bands).toBeDefined();
            expect(bands.length).toBe(4);
        });
    });
});
