const express = require('express');
var app = express();
const fs = require('fs');
var port = 3000;

app.use(express.static('docs'));

app.get('/', function(req, res) {
    res.sendFile('docs/index.html');
});

app.listen(port, () => {
    console.log(`server running at port: ${port}`);
});