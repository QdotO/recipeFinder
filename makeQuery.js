const endpointRoot = process.env.RECIPE_ENDPOINT || 'http://www.recipepuppy.com/api/?';
module.exports = (request) => {
    var endpoint;
    if(request && request.query){
        if (request.query.i && request.query.q){ //if both are defined
            endpoint = endpointRoot.concat("i=" + request.query.i, "&q=" + request.query.q);
        } else if (request.query.i && !request.query.q) { //if only i is defined
           endpoint = endpointRoot.concat("i=" + request.query.i);
        } else if (request.query.q && !request.query.i){ //if only q is defined
            endpoint = endpointRoot.concat("q=" + request.query.q);
        }
    }
    return Promise.resolve(endpoint);
}