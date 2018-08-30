// findRecipeWMostIngredients.js
const decode = require('decode-html');

module.exports = (verifiedRecipes) => {
    if(typeof verifiedRecipes == 'undefined'){
        return Promise.reject('verifiedRecipes is undefined');
    }
    
    var mostIngredientsCount = 0;
    var filteredRecipe = {};
    verifiedRecipes.forEach(recipe => {
        var ingredients = recipe.ingredients.split(',');
        if (ingredients.length > mostIngredientsCount) {
            filteredRecipe.name = recipe.title;
            filteredRecipe.url = recipe.href;
            mostIngredientsCount = ingredients.length;
        }
    });
    filteredRecipe.name = decode(filteredRecipe.name);
    filteredRecipe.numberOfIngredients = mostIngredientsCount;
    console.log("Recipe with most ingredients: " + JSON.stringify(filteredRecipe, null, 2) + '\n');
    return filteredRecipe;
};