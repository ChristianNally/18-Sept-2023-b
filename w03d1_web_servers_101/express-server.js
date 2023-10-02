const express = require('express');
const PORT = 8082;

// setup
const app = express();
app.set('view engine', 'ejs');

// middleware
app.use( (req, res, next) => {
    console.log(`ROUTE: ${req.method} ${req.url}`);
    next();
} );
app.use(express.urlencoded({extended: false}));

// routes
app.get('/', (req, res) => {
//    res.send('is this the homepage?');

    const templateVars = {
        fullname: 'Monkey Fuzz!'
    };

    res.render('home', templateVars);
});

app.get('/contactus', (req, res) => {
    res.render('contact');
});

app.post('/contactus', (req, res) => {
    console.log('POST request to /contactus was made!');
    console.log('req.body', req.body);
    res.redirect('/');
});

app.get('*', (req, res) => {
    res.send('404 not found');
});

// listen

app.listen(PORT, () => {
    console.log(`Express Server is up and running on PORT=${PORT}`);
});
