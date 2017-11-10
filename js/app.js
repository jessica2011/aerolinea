var airlineSeats = [
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
];

var busySeats = 0;

function paintSeats(array) {
    var containerSeats = document.querySelector('#seats')

    for (var i = 0; i < airlineSeats.length; i++) {
        //crea un elemento div, aunque ya esta creado en html
        var seat = document.createElement('div');
        //añade una clase a ese elemento
        seat.className = 'seats';

        //elementos para la primera clase
        if (i < 4) {
            seat.style.background = 'yellow';
        } else {
            seat.tyle.background = 'purple';
        }
        containerSeats.appendChild(seat);
    }
};

function reserve() {
    var btn = document.querySelector('#btn');
    btn.addEventListener('click', chooseZone);
}

function chooseZone() {
    var option = prompt(
        'En que zona prefieres reservar \n 1.Primera clase \n 2.Economica \\ Por favor ingrese el número de su opción'
    );

    if (option == 1) {
        checkFirstClassZone();
    } else if (option == 2) {
        checkEconomicZone();
    } else {
        alert('Ingrese un número válido');
    }
};

function checkFirstClassZone() {
    var zone = 'primera clase';
    for (var i = 0; index < 4; index++) {
        if (airlineSeats[i] == false) {
            airlineSeats[i] == true;
            break;
        }
    }
};

function checkEconomicZone() {
    var zone = 'Económica';
    for (var i = 4; index < 10; index++) {
        if (airlineSeats[i] == false) {
            airlineSeats[i] == true;
            break;
        }
    }
};