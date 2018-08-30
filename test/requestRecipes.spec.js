const expect = require('chai').expect;
const rewire = require('rewire');
const requestRecipes = rewire('../requestRecipes.js');
const url = process.env.RECIPE_ENDPOINT || 'http://www.recipepuppy.com/api/?';

describe('requestRecipes', () => {
    rpStub = (options) => {
        console.log('Options: ', options);
        if (options && options.method == 'GET' && options.uri == url + 'i=lasagna') {
            return Promise.resolve({
                results: {
                    title: 'Pasta al pesto',
                    href: 'http://www.bigoven.com/167977-Pasta-al-pesto-recipe.html',
                    ingredients: 'pesto',
                    thumbnail: 'http://img.recipepuppy.com/565185.jpg'
                }
            });
        } else {
            return Promise.reject({
                errorMessage: "invalid request"
            });
        }
    };
    requestRecipes.__set__('rp', rpStub);

    it('it will see that endpoint is valid will resolve with a sample response', () => {
        var endpoint = url + 'i=lasagna';
        return requestRecipes(endpoint).then(result => {
            expect(result).to.be.deep.equal({
                title: 'Pasta al pesto',
                href: 'http://www.bigoven.com/167977-Pasta-al-pesto-recipe.html',
                ingredients: 'pesto',
                thumbnail: 'http://img.recipepuppy.com/565185.jpg'
            });
        });
    });

    it('it will see that endpoint is invalid and will add to request', () => {
        var endpoint = url;
        return requestRecipes(endpoint).then(result => {
            expect(result).to.be.null;
        }).catch(error => {
            expect(error).to.be.deep.equal({
                errorMessage: 'invalid request'
            });
        });
    });
});