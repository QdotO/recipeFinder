const endpointRoot = process.env.RECIPE_ENDPOINT || 'http://www.recipepuppy.com/api/?';
module.exports = (request) => {
    console.log('Request: ', request);
    console.log('Endpoint: ', endpointRoot);
    var endpoint;
    if(request && request.query){
        if (request.query.i && request.query.q){ //if both are defined
            endpoint = endpointRoot.concat("i=" + request.query.i, "&q=" + request.query.q);
            console.log('Endpoint is: ', endpoint);
        } else if (request.query.i && !request.query.q) { //if only i is defined
           endpoint = endpointRoot.concat("i=" + request.query.i);
            console.log('Endpoint is: ', endpoint);
        } else if (request.query.q && !request.query.i){ //if only q is defined
            console.log('Endpoint before adding is: ', endpoint);
            endpoint = endpointRoot.concat("q=" + request.query.q);
            console.log('Endpoint is: ', endpoint);
        }
    }
    return Promise.resolve(endpoint);
}