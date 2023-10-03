const express = require('express');
const app = express();
const PORT = 8887;

//
// SETUP
//
app.set('view engine', 'ejs');

//
// Database
//
const musicButtons = {
    'key1': {
        url: 'http://example.com/path-to-tune.mp3',
        name: 'Monkey Fuzz',
        genre: 'Death Metal',
    },
    'key2': {
        url: 'http://example.com/path-to-tune-2.mp3',
        name: 'Monkey Fuzz 2',
        genre: 'Cafe Acoustic Guitar Cover',
    },
    'key3': {
        url: 'https://www.yout-ube.com/watch?v=5r3B7yz6J68',
        name: 'Tom`s Diner Cover',
        genre: 'Jazz (because Trumpet)',
    }
};

//
// MIDDLEWARE
//
app.use(express.urlencoded({extended: true}));

//
// ROUTES
// BREAD (Browse, Read, Edit, Add, Delete)
//


//
// Browse
//
app.get('/', (req, res) => {

    console.log('musicButtons', musicButtons); // debugging: shows the whole DB every homepage load

    const templateVars = {
        music_database: musicButtons
    };
    res.render('home', templateVars);
});


//
// Read
//
app.get('/read/:keyname', (req, res) => {

    console.log('req.params', req.params);
    const keyname = req.params.keyname;

    const templateVars = {
        buttonName: musicButtons[keyname].name,
        buttonUrl: musicButtons[keyname].url,
        buttonGenre: musicButtons[keyname].genre 
    };
    res.render('read', templateVars);
});


//
// Edit
//
app.get('/edit/:buttonKey', (req, res) => {
    const key = req.params.buttonKey;
    const templateVars = {
        buttonName: musicButtons[key].name,
        buttonUrl: musicButtons[key].url,
        buttonGenre: musicButtons[key].genre
    };
    res.render('edit', templateVars);
});

app.post('/edit/:key', (req, res) => {
    console.log('POST /edit has run');
    musicButtons[req.params.key] = {
        name: req.body.buttonName,
        url: req.body.buttonUrl,
        genre: req.body.buttonGenre
    };
    res.redirect('/');
});

//
// Add
//
app.get('/add', (req, res) => {
    res.render('add');
});

app.post('/add', (req, res) => {
    console.log('req.body', req.body);

    musicButtons[req.body.buttonName] = {
        url: req.body.buttonUrl,
        name: req.body.buttonName,
        genre: req.body.buttonGenre
    };

    res.redirect('/');

});

//
// Delete
//
app.get('/delete/:buttonKey', (req, res) => {
    const key = req.params.buttonKey;
    delete musicButtons[key];
    res.redirect('/');
});

//
// LISTEN
//
app.listen(PORT, () => {
    console.log(`Server is listening on PORT=${PORT}`);
});
