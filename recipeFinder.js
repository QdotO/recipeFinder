//recipeFinder.js
const checkRequest = require('./checkRequest.js');
const requestRecipes = require('./requestRecipes.js');
const makeQuery = require('./makeQuery.js');
const validateRecipeLinks = require('./validateRecipeLinks.js');
const findRecipeWMostIngredients = require('./findRecipeWMostIngredients.js')

module.exports = (request) => {
    return checkRequest(request).
        then(makeQuery).
        then(requestRecipes).
        then(validateRecipeLinks).
        then(findRecipeWMostIngredients).
        catch(error => {
            console.log('Error getting recipes: ', error);
        });
};