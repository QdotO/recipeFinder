const expect = require('chai').expect;
const rewire = require('rewire');
const validateRecipeLinks = rewire('../validateRecipeLinks.js');

describe('validateRecipeLinks module', () => {
    var recipes = [{
        title: 'Test Recipe Title',
        href: 'Testrecipe.com',
        ingredients: 'test ingredient'
    }];

    it('will see that recipes is undefined and will reject', () => {
        var recipes;
        validateRecipeLinks(recipes)
            .then(result => {
                expect(result).to.be.null;
            })
            .catch(error => {
                expect(error).to.be.equal('recipes is undefined')
            });
    });

    it('will see that recipes is undefined and will reject', () => {
        var recipes = [];
        validateRecipeLinks(recipes)
            .then(result => {
                expect(result).to.be.null;
            })
            .catch(error => {
                expect(error).to.be.equal('recipes not valid length');
            });
    });

    it('will see that testLink returns true and will return a single recipe in an array', () => {
        var testLinkStub = () => {
            return true;
        };
        validateRecipeLinks.__set__('testLink', testLinkStub);
        var result = validateRecipeLinks(recipes);
        expect(result).to.be.deep.equal(recipes);
    });

    it('will see that testLink returns true and will return a single recipe in an array', () => {
        var testLinkStub = () => {
            return false;
        };
        validateRecipeLinks.__set__('testLink', testLinkStub);
        var result = validateRecipeLinks(recipes);
        expect(result).to.be.deep.equal([]);
    });
});