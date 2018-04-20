const express = require('express');
var app = express();
const fs = require('fs');
var port = 3000;

app.use(express.static('public'));

app.get('/', function(req, res) {
    var name = req.query.name;
    var age = req.query.age;

    var person = {
        name: name,
        age: age
    }

    saveToPublic(person, function(err) {
        if(err) {
            res.status(404).send('User Not Saved');
            return;
        }
        res.send('User Saved');
    });
});

function saveToPublic(obj, callback) {
    fs.writeFile('./public/data/person.json', JSON.stringify(person), callback);
}

app.listen(port, () => {
    console.log(`server running at port: ${port}`);
});