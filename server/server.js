require('./config/config');
const express = require('express')
const app = express()
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const path = require('path');


app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())
// Configuracion global de rutas
app.use(require('./routes/index'));

let renderHTML = path.resolve(__dirname, '../public/index.html');
app.get('/', function (req, res) {
    res.sendFile(renderHTML);
})

mongoose.connect(process.env.URLDB, {
    useNewUrlParser: true,
}, (err) => {
    if (err) throw err;
    console.log("Data Base Online");
});

app.listen(process.env.PORT, ()=> {
    console.log("Started in port 3000");
})