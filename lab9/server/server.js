const express = require('express');
const bodyParser = require('body-parser');
const app = express();

let watches = [
    {brand: 'Fossil', forMen: true, price: 131, model: 'FTW1166P', strap: 'bracelet', waterResistence: 50},
    {brand: 'Diesel', forMen: true, price: 350, model: 'DZ7406', strap: 'leather', waterResistence: 50},
    {brand: 'MVMT', forMen: false, price: 159, model: 'Voyager Rose Gold', strap: 'material', waterResistence: 15},
    {brand: 'Casio', forMen: false, price: 120, model: 'G-Shock', strap: 'plastic', waterResistence: 25},
    {brand: 'Rolex', forMen: false, price: 435, model: 'Sky-Dweller', strap: 'bracelet', waterResistence: 30},
    {brand: 'MVMT', forMen: true, price: 210, model: 'Gunmetal Sandstorm', strap: 'leather', waterResistence: 15},
    ];

app.listen(8080, () => console.log('Example app listening on port 3000!'));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, ContentType, Content-Type, Accept");
    next();
});

app.use(bodyParser.json());

app.get('/watches', (req, res) => {
    res.send(watches);
});

app.post('/watch', (req, res) => {
    console.log(req.body);
    watches.push(req.body);
    res.send({});
})