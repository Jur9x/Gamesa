const prostor = document.getElementById('pole');
const batns = document.getElementById('batns');
const batn3 = document.getElementById('batn3');
const batn5 = document.getElementById('batn5');
const batn7 = document.getElementById('batn7');
const batn9 = document.getElementById('batn9');
const body = document.getElementById('body');

const batny = document.getElementsByClassName('policka');

var devet = 0;

var roh1;
var roh2;
var roh3;
var roh4;

var cislo3 = 0;
var cislo5 = 0;
var cislo7 = 0;
var cislo9 = 0;

var promena = 0;

batn3.addEventListener('click', function() {
    cislo3 = 1;
    batns.innerHTML = ``;
    for (var i = 0; i < 3; i++) {
        prostor.innerHTML += `<br>`;
        for (var a = 0; a < 3; a++) {
            promena++;
            prostor.innerHTML += `<button onClick="reply_click(this.id)" class="policka" id="${promena}" style="margin: 2%"></button>`;
        }
    }
})

batn5.addEventListener('click', function() {
    cislo5 = 1;
    batns.innerHTML = ``;
    for (var i = 0; i < 5; i++) {
        prostor.innerHTML += `<br>`;
        for (var a = 0; a < 5; a++) {
            promena++;
            prostor.innerHTML += `<button onClick="reply_click(this.id)" class="policka" id="${promena}" style="margin: 0.8%"></button>`;
        }
    }
})

batn7.addEventListener('click', function() {
    cislo7 = 1;
    batns.innerHTML = ``;
    for (var i = 0; i < 7; i++) {
        prostor.innerHTML += `<br>`;
        for (var a = 0; a < 7; a++) {
            promena++;
            prostor.innerHTML += `<button onClick="reply_click(this.id)" class="policka" id="${promena}" style="margin: 0.5%"></button>`;
        }
    }
})

batn9.addEventListener('click', function() {
    cislo9 = 1;
    batns.innerHTML = ``;
    for (var i = 0; i < 9; i++) {
        prostor.innerHTML += `<br>`;
        for (var a = 0; a < 9; a++) {
            promena++;
            prostor.innerHTML += `<button onClick="reply_click(this.id)" class="policka" id="${promena}" style="margin: 0.1%"></button>`;
        }
    }
})