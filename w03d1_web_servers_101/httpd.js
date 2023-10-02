const http = require('http');
const fs = require('fs');
const PORT = 8081;

const server = http.createServer((req, res) => {
//    console.log('req', req);
    const route = `${req.method} ${req.url}`;
    console.log(`A request has been made for the ROUTE='${route}'`);

    switch (route) {
        case 'GET /':
            console.log('home page requested');
            // res.write('<h1>HOME</h1><p>Lorem Ipsum etc valo sim sip si claire dfafsdfadf</p><alert>will it blend</alert>');
            fs.readFile('views/home.html', 'utf8', (err, data) => {
                if (err) {
                    res.write('500 error');
                } else {
                    res.write(data);
                }
                res.end();
            });
            break;
        case 'GET /contactus':
            console.log('contact page requested');
            res.write('my phone number is private');
            res.end();
            break;
        default:
            console.log('page not found');
            res.write('404 page not found');
            res.end();
            break;
    }

});

server.listen(PORT, () => {
    console.log(`Server is listening on PORT=${PORT}`);
});
