const express = require('express');
const app = express();
const path = require('path');
require('dotenv').config()

app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'pug');

// app.get('/', (req, res) => {
//     res.render('index.pug')
// });

//routes or endpoints
app.get('/', (req, res) => {
    res.render('index', {

    })
});

// app.get('/maps', (req, res) => {
//     res.render('maps')
// });

app.get('/youtube', (req, res) => {
    res.render('youtube', {
        key: process.env.KEY
    })
})

app.get('/url', (req, res) => {
    res.render('url.pug')
});

app.get('/maps', (req, res) => {
    res.render('maps', {
                            // title: 'maps',
                            // heading: "Google API's",
                            key: process.env.KEY
                        })
})


//PORT
const port = process.env.PORT || 3000;
app.listen(3000, () => console.log(`Listening on port ${port}...`))
