/* global describe, it, expect */

(function () {
    'use strict';

    describe('Give it some context', function () {
        describe('maybe a bit more context here', function () {
            it('should run here few assertions', function () {

            });
        });
    });
    describe('find variable a', function(){
        it('should be awesome', function(){
            expect(a).to.equal('hello');
        });
    });
})();
