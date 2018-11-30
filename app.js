const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'pug');

app.get("/", (req, res)=> {
    res.render("index.pug")
});




app.listen(3000)