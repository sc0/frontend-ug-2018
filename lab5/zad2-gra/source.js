const opponent = $('#opponent');
const player = $('#player');
const keydown = Rx.Observable.fromEvent(window, 'keydown');
const keys = ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'];

keydown
    .takeWhile(x => !gameFinished())
    .filter(x => keys.indexOf(x.key) >= 0)
    .subscribe(x => movePlayer(player, x.key));

Rx.Observable.interval(50)
    .takeWhile(x => !gameFinished())
    .map(x => randomGenerator.next().value)
    .map(x => keys[x])
    .subscribe(x => movePlayer(opponent, x));



const randomGenerator = (function* () {
    while (true) {
        yield Math.round(Math.random() * 3);
    }
})();


function movePlayer(div, key) {
    let x = +(div.css('left').slice(0, -2));
    let y = +(div.css('top').slice(0, -2));

    switch (key) {
        case 'ArrowUp':
            y -= 20;
            if (y < 0) y = 0;
            break;
        case 'ArrowDown':
            y += 20;
            if (y > 550) y = 550;
            break;
        case 'ArrowRight':
            x += 20;
            if (x > 550) x = 550;
            break;
        case 'ArrowLeft':
            x -= 20;
            if (x < 0) x = 0;
            break;
    }

    div.css('left', x.toString() + 'px');
    div.css('top', y.toString() + 'px');
}


function gameFinished() {
    let px = +(player.css('left').slice(0, -2));
    let py = +(player.css('top').slice(0, -2));

    let ox = +(opponent.css('left').slice(0, -2));
    let oy = +(opponent.css('top').slice(0, -2));

    if (px + 50 > ox && px < ox + 50 && py + 50 > oy && py < oy + 50) {
        alert('Wygrałeś!');
        return true;
    }

    return false;
}