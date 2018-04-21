const express = require('express');
var app = express();
const fs = require('fs');
var port = 3000;


app.get('/catalog.html', function(req, res) {
    res.sendFile('docs/catalog.html');
});
