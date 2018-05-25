import {Watch} from './Watch';
import {WatchAPI} from './API';

let testWatches = [
    new Watch('Diesel', true, 500, 'Big Daddy', 'leather', 50),
    new Watch('Rolex', true, 1500, 'RA545X', 'bracelet', 60),
    new Watch('Fossil', true, 154, 'FA2134', 'bracelet', 10),
];

WatchAPI.add(testWatches[0]);
WatchAPI.add(testWatches[1]);
WatchAPI.add(testWatches[2]);

let w = WatchAPI.get(1);

console.log(w);

console.log("Rolexów w kolekcji: " + WatchAPI.getByBrand('Rolex').length);

if (w != null) {
    console.log(w.getFullDescription());
    WatchAPI.remove(w);
}

console.log("Rolexów w kolekcji: " + WatchAPI.getByBrand('Rolex').length);
console.log("Element o id == 10 jest nullem: " + (WatchAPI.get(10) === null));
