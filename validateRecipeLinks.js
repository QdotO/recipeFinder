//validateRecipeLinks.js
const testLink = require('./testLink.js');

module.exports = (recipes)=> {
        return recipes.filter(recipe => { 
            return testLink(recipe) 
        });
};