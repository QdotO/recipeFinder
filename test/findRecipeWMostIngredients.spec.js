const expect = require('chai').expect;
const data = require('../data/sampleResponse.json');
const data2 = require('../data/sampleResponse2.json');
const findRecipeWMostIngredients = require('../findRecipeWMostIngredients.js');

describe('findRecipeWMostIngredients module', () => {
    it('will see that verifiedRecipes is undefined and will reject', () => {
        var verifiedRecipes = undefined;
        return findRecipeWMostIngredients(verifiedRecipes)
            .then(result => {
                expect(result).to.be.null;
            })
            .catch(error => {
                expect(error).to.be.equal('verifiedRecipes is undefined');
            });
    });

    it('will find the recipe with the most ingredients', () => {
        var verifiedRecipes = data;
        var result = findRecipeWMostIngredients(verifiedRecipes)
        expect(result).to.be.deep.equal({
            "name": "Cheese & Pesto Lasagna",
            "url": "http://www.recipezaar.com/Cheese-Pesto-Lasagna-132715",
            "numberOfIngredients": 12
        });
    });

    it('will find the recipe with the most ingredients on a second data set', () => {
        var verifiedRecipes = data2;
        var result = findRecipeWMostIngredients(verifiedRecipes)
        expect(result).to.be.deep.equal({
            "name": "Basic Chicago-style Pizza Recipe",
            "url": "http://www.grouprecipes.com/65487/basic-chicago-style-pizza.html",
            "numberOfIngredients": 16
          });
    });
});