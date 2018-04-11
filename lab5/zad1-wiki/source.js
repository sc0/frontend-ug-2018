var q = $('#q');
var keyups = Rx.Observable.fromEvent(q, 'keyup');

keyups.throttleTime(500).map(x => {
    return q.val();
})

.switchMap(x => {return searchWikipedia(x)})
.do(x => {console.log(x)})
.subscribe(x => { presentResults(x); });


function presentResults(x) {
    const div = $('#results');

    div.html(``);

    div.append(`<h2>${x[0]}</h2>`);
    div.append(`<ul>`);
    for(let i = 0; i < x[1].length; i++) {
        div.append(`<li>${x[1][i]} [<a href=${x[3][i]}>link</a>]</li>`)
    }
    div.append(`</ul>`);

}

function searchWikipedia(term) {
    return $.ajax({
        url: 'http://en.wikipedia.org/w/api.php',
        dataType: 'jsonp',
        data: {
            action: 'opensearch',
            format: 'json',
            search: term
        }
    }).promise();
}