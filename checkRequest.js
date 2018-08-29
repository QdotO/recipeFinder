// checkRequest.js

module.exports = (request) => {
    return new Promise((resolve, reject) => {
        if(request == null){
            return reject('request is undefined');
        }else {
            return resolve(request);
        }
    }).catch(error => {
        console.log(`checkRequest error: ${error}`);
        return Promise.reject({
            errorType: 'checkRequest error',
            errorMessage: error,
            errorPayload: request
        });
    });
};