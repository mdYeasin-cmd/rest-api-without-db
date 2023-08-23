const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/users', require('./routes/users.route'));

// home route
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});

// 404 not found route
app.use((req, res, next) => {
    res.status(404).json({
        message: "Route not found!"
    })
});

// Server error
app.use((err, req, res, next) => {
    console.log(err);
    res.status(500).json({
        message: "Something broke!"
    })
});

module.exports = app;