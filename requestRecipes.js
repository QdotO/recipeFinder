const rp = require('request-promise');

module.exports = (endpoint) => {
    if (endpoint == null) {
        return Promise.reject('endpoint is undefined');
    }
    var options = {
        uri: endpoint,
        method: 'GET',
        json: true
    };

    return rp(options).then(response => {
        console.log('Recipe Puppy responded with: ', response);
        return response.results;
    });
};