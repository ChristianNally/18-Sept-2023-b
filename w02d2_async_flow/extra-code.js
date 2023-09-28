// EXAMPLE FILE READ

const fs = require('fs');

fs.readFile('/tmp/text.txt', 'utf8', (err, data) => {
    console.log('end of file read attempt');
    if (err) {
        console.log('ERROR! Monkey Fuzz!!', err);
    } else {
        console.log('file contents', data);
    }
});


// EXAMPLE Network API Request

const axios = require('axios');


axios.get({
    url: 'http://example.com/get-some-json',
    success: (data) => {
        console.log('data', data);
    },
    error: (error) => {} 
});


console.log('this is the end of the main thread');
