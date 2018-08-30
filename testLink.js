// testLink.js
const rp = require('request-promise');
const urlExists = require('url-exists-deep');

module.exports = (recipe) => {
    return urlExists(recipe.href)
        .then(exists => {
            return exists;
        })
        .catch(error => {
            //Dont need to do anything here
        });
};