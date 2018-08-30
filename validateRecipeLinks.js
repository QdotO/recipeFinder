//validateRecipeLinks.js
const testLink = require('./testLink.js');

module.exports = (recipes) => {
    if (typeof recipes == 'undefined') {
        return Promise.reject('recipes is undefined');
    } else if (recipes.length < 1) {
        return Promise.reject('recipes not valid length');
    }
    return recipes.filter(recipe => {
        return testLink(recipe)
    });
};