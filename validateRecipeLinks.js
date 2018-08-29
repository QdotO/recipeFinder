//validateRecipeLinks.js
const testLink = require('./testLink.js');

module.exports = (recipes)=> {
    return new Promise((resolve, reject) => {
        return resolve( recipes.filter(recipe => { return testLink(recipe) } ) )
     }) //.then(verifiedRecipes => {
    //     console.log('Verifed Recipes: ', verifiedRecipes);
    //     return verifiedRecipes;
    // });    
};