// app.js

const express = require('express')
const app = express();
const PORT = 3000;
const finder = require('./recipeFinder.js');

app.get('/', (req, res) => { 
   finder(req).then(response => {
        console.log('Returning: ',response);
        res.status(200).send(JSON.stringify(response, null , 2));
    }).catch(error => {
        console.log('Returning error: ', error);
        res.status(500).send(JSON.stringify(error, null, 2));
    });
}); 

app.listen(PORT, () => console.log(`Recipe Finder listening on port ${PORT}`))