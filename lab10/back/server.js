const express = require('express');
const app = express();
const bodyParser = require('body-parser');

let watches = [
    {id: 1, brand: 'Fossil', forMen: true, price: 131, model: 'FTW1166P', strap: 'bracelet', waterResistence: 50},
    {id: 2, brand: 'Diesel', forMen: true, price: 350, model: 'DZ7406', strap: 'leather', waterResistence: 50},
    {id: 3, brand: 'MVMT', forMen: false, price: 159, model: 'Voyager Rose Gold', strap: 'material', waterResistence: 15},
    {id: 4, brand: 'Casio', forMen: false, price: 120, model: 'G-Shock', strap: 'plastic', waterResistence: 25},
    {id: 5, brand: 'Rolex', forMen: false, price: 435, model: 'Sky-Dweller', strap: 'bracelet', waterResistence: 30},
    {id: 6, brand: 'MVMT', forMen: true, price: 210, model: 'Gunmetal Sandstorm', strap: 'leather', waterResistence: 15},
];

app.use(bodyParser.json());
app.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin', ['*']);
    res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.append('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.post('/watch', (req, res) => {
    let newWatch = req.body;
    newWatch.id = watches[watches.length-1].id + 1;
    watches.push(newWatch);
    return res.send({id: newWatch.id});
});

app.get('/watch/:id', (req, res) => {
   let result = null;
   for (let watch of watches) {
       if (watch.id === parseInt(req.params.id)) {
           result = watch;
           break;
       }
   }
   return res.send(result);
});

app.get('/watches', (req,res) => {
    let result = [];
    for (let watch of watches) {
        result.push({id: watch.id, brand: watch.brand, model: watch.model});
    }
    return res.send(result);
});


app.listen(8080, () => console.log('Serwer wystartował na porcie 8080'));