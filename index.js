// app.js

const finder = require('./recipeFinder.js'); 
    
    var req = {
        query: {
            i: 'pesto',
            q: 'lasagna'
        }
    };
   return finder(req);
