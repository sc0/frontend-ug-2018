let Rx = require('rxjs/Rx');

Rx.Observable.range(0, 10)
.map(item => Rx.Observable.range(0, item))
.switchMap(item => item)
.subscribe({
    next: item => console.log(`Next ${item}`),
    error: er => console.log(`Error ${er}`),
    complete: () => console.log('OK') 
});
