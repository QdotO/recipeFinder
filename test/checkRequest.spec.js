const checkRequest = require('../checkRequest.js');
const expect = require('chai').expect;

describe('checkRequest', () => {
    it('will see that request is null and will reject', () => {
        var request;
        return checkRequest(request).then(result => {
            expect(result).to.be.null;
        }).catch(error => {
            expect(error).to.be.deep.equal({
                errorType: 'checkRequest error',
                errorMessage: 'request is undefined',
                errorPayload: undefined 
            });
        });
    });

    it('will see that request is valid and will resolve', () => {
        var request = {};
        return checkRequest(request).then(result => {
            expect(result).to.be.deep.equal({});
        });
    });
})