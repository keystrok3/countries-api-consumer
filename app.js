const express = require('express');
const helper = require('./helper.js');

const app = express();

app.get('/',(req, res) => {
    helper.get_all()
        .then(data => {
            res.send(data);
        })
        .catch(error => {
            console.error(error);
            res.sendStatus(500);
        });
});

app.listen(8080);