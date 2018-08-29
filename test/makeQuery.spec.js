const expect = require('chai').expect;
const makeQuery = require('../makeQuery.js');
const endpoint = process.env.RECIPE_ENDPOINT || 'http://www.recipepuppy.com/api/?';

describe('makeQuery', () => {
    it('will see that request.query.i is valid and will resolve and endpoint including it', () => {
        var request = {
            query: {
                i: "pasta"
            }
        };
        return makeQuery(request).then(result => {
            expect(result).to.be.equal(endpoint + 'i=pasta');
        });
    });

    it('will see that request.query.q is valid and will resolve and endpoint including it', () => {
        var request = {
            query: {
                q: "soup"
            }
        };
        return makeQuery(request).then(result => {
            expect(result).to.be.equal(endpoint + 'q=soup');
        });
    });
});