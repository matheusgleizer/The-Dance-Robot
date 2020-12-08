function dance() {
    let mouth = document.getElementById('mouth');
    let hands = document.getElementById('hands');
    let foots = document.getElementById('foots');

    mouth.style = 'border-bottom-left-radius: 15px; border-bottom-right-radius: 15px; border-top-left-radius: 0px; border-top-right-radius: 0px;';

    hands.style = 'animation-play-state: running';

    foots.style = 'animation-play-state: running';

    let btnDance = document.getElementById('btn-dance');

    let btnStop = document.getElementById('btn-stop');

    btnDance.style = 'visibility: hidden; grid-row: 2;';

    btnStop.style = 'visibility: visible; grid-row: 1;';

}

function stop() {


    let mouth = document.getElementById('mouth');
    let hands = document.getElementById('hands');
    let foots = document.getElementById('foots');

    mouth.style = 'border-bottom-left-radius: 0px; border-bottom-right-radius: 0px; border-top-left-radius: 15px; border-top-right-radius: 15px;';

    hands.style = 'animation-play-state: paused';

    foots.style = 'animation-play-state: paused';

    let btnDance = document.getElementById('btn-dance');

    let btnStop = document.getElementById('btn-stop');

    btnDance.style = 'visibility: visible; grid-row: 1;';

    btnStop.style = 'visibility: hidden; grid-row: 2;';

}