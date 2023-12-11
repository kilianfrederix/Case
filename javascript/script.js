"use strict";

let geselecteerdekamer;
let kamers;
let voornaam;

let allescorrect = true;

function controleervoornaam() {
    if (voornaam.lengt < 2) {
        document.getElementById("voornaam_error").innerHTML = "Minstens 2 karakters ingeven!";
        allescorrect = false;
    } else {
        document.getElementById("voornaam_error").innerHTML = "";
    }
}




function verstuur() {
    geselecteerdekamer = document.getElementById("kamers").selectedIndex;
    kamers = document.getElementById("kamers").value;
    voornaam = document.getElementById("voornaam").value;

    // controle voornaam 
    if (voornaam.lengt == 0) {
        document.getElementById("voornaam_error").innerHTML = "Vul je naam in";
        allescorrect = false;
    } else {
        controleervoornaam()
    }

    // controle geselcteerde kamers
    if (geselecteerdekamer == 0) {
        document.getElementById("kamers_error").innerHTML = "Kies een optie!!";
        allescorrect = false;
    } else {
        document.getElementById("kamers_error").innerHTML = "";
    }








}
verstuur()