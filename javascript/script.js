"use strict";

let geselecteerdekamer;
let kamers;
let voornaam;
let achternaam;
let straat;
let straatnummer;
let bus;
let postcode;
let email;
let alletijden;
let teltijden;
let ontbijt;
let middag;
let avond;
let nummer;
let gemeente;
let volwassenen;
let kinderen;
let aankomstdatum;
let vertrek;


let allescorrect = true;

function controleervoornaam() {
    if (voornaam.length < 2 ) {
        document.getElementById("voornaam_error").innerHTML = "Minstens 2 karakters ingeven!";
        allescorrect = false;
    } else if (voornaam.search(/^[a-zA-Z]+$/)== -1) {
        document.getElementById("voornaam_error").innerHTML = "Je mag geen getallen ingeven!";
        allescorrect = false;
    } else {
        document.getElementById("voornaam_error").innerHTML = "";
    }
}

function controleerachternaam() {
    if (achternaam.length < 2 ) {
        document.getElementById("achternaam_error").innerHTML = "Minstens 2 karakters ingeven!";
        allescorrect = false;
    } else if (achternaam.search(/^[a-zA-Z]+$/)== -1) {
        document.getElementById("achternaam_error").innerHTML = "Je mag geen getallen ingeven!";
        allescorrect = false;
    } else {
        document.getElementById("achternaam_error").innerHTML = "";
    }
}

function controleerstraat() {
    if ((straat).length < 2 ) {
        document.getElementById("straat_error").innerHTML = "Minstens 2 karakters ingeven!";
        allescorrect = false;
    } else if (straat.search(/^[a-zA-Z]+$/)== -1) {
        document.getElementById("straat_error").innerHTML = "Je mag geen getallen ingeven!";
        allescorrect = false;
    } else {
        document.getElementById("straat_error").innerHTML = "";
    }
}

function controleerStraatnummer(){
    if(straatnummer.search(/^\d/) == -1){
        document.getElementById("straatnummer_error").innerHTML = "Minstens 1 cijfer!";
        allescorrect = false;
    } else {
        document.getElementById("straatnummer_error").innerHTML = "";
    }
}

function controleerbusnummer(){
    if(bus.search(/^\d/) == -1){
        document.getElementById("bus_error").innerHTML = "Minstens 1 cijfer!";
        allescorrect = false;
    } else if (bus > 100) {
        document.getElementById("bus_error").innerHTML = "je mag niet hoger als 100 ingeven!"
        allescorrect = false;
    } else if (bus == 0) {
        document.getElementById("bus_error").innerHTML = "je moet hoger als 0 ingeven"
    } else {
        document.getElementById("bus_error").innerHTML = "";
    }
    
}

function controleerPostcode(){
	if(postcode.search(/^[1-9]\d{3}$/) == -1){
        document.getElementById("postcode_error").innerHTML = "geen correcte postcode!";
        allescorrect = false;
	} else {
        document.getElementById("postcode_error").innerHTML = "";
	}
}

function controleerEmail(){
    let regexEmail=/^[A-Za-z][\.A-Za-z0-9+_-]+@[\.A-Za-z0-9-]+\.[A-Za-z]{2,20}$/;
    if(regexEmail.test(email) == false){
        document.getElementById("email_error").innerHTML = "Dit is geen correcte E-mail Address!";
        allescorrect = false;
    } else {
        document.getElementById("email_error").innerHTML = "";
    }
}

function controleeraankomst() {
    let dateRegex = /^\d{4}-\d{2}-\d{2}$/
    if (dateRegex.test(aankomstdatum) == false) {
        document.getElementById("aankomst_error").innerHTML = "dit is geen geldige datum";
        allescorrect = false;
    } else {
        document.getElementById("aankomst_error").innerHTML = "";
    }
}

function controleervertrek() {
    if (vertrek.length < 1 || vertrek > 7 ) {
        document.getElementById("vertrek_error").innerHTML = "maximum 7 dagen ingeven!";
        allescorrect = false;
    } else if (vertrek == 0){
        document.getElementById("vertrek_error").innerHTML = "Je moet meer dan 0 ingeven!";
        allescorrect = false;
    } else {
        document.getElementById("vertrek_error").innerHTML = "";
    }
}

function controleernummer() {
    let regexnummer = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    if (regexnummer.test(nummer) == false) {
        document.getElementById("nummer_error").innerHTML = "Dit is geen geldig telefoon nummer!";
        allescorrect = false;
    } else {
        document.getElementById("nummer_error").innerHTML = "";
    }
}

function controleergemeente() {
    if (gemeente.length < 2) {
        document.getElementById("gemeente_error").innerHTML = "Minstens 2 karakters ingeven!";
        allescorrect = false;
    } else if (gemeente.search(/^[a-zA-Z]+$/)== -1) {
        document.getElementById("gemeente_error").innerHTML = "Je mag geen getallen ingeven!";
        allescorrect = false;
    } else {
        document.getElementById("gemeente_error").innerHTML = "";
    }
}

function controleervolwassenen() {
    if (volwassenen.length < 1 || volwassenen > 4 ) {
        document.getElementById("volwassenen_error").innerHTML = "maximum 4 personen ingeven!";
        allescorrect = false;
    } else if (volwassenen == 0){
        document.getElementById("volwassenen_error").innerHTML = "Je moet meer dan 0 ingeven!";
        allescorrect = false;
    } else {
        document.getElementById("volwassenen_error").innerHTML = "";
    }
}

function controleerkinderen() {
    if (kinderen.length < 1 || kinderen > 4 ) {
        document.getElementById("kinderen_error").innerHTML = "maximum 4 personen ingeven!";
        allescorrect = false;
    } else if (kinderen == 0){
        document.getElementById("kinderen_error").innerHTML = "Je moet meer dan 0 ingeven!";
        allescorrect = false;
    } else {
        document.getElementById("kinderen_error").innerHTML = "";
    }
}

function verstuur() {
    geselecteerdekamer = document.getElementById("kamers").selectedIndex;
    kamers = document.getElementById("kamers").value;
    voornaam = document.getElementById("voornaam").value;
    achternaam = document.getElementById("achternaam").value;
    straat = document.getElementById("straatnaam").value;
    straatnummer = document.getElementById("straatnummer").value;
    bus = document.getElementById("bus").value;
    postcode=document.getElementById("postcode").value;
    email=document.getElementById("email").value;
    aankomstdatum=document.getElementById("aankomst").value;
    vertrek=document.getElementById("vertrek").value;
    alletijden=document.getElementsByClassName('eten_input');
    nummer = document.getElementById("nummer").value;
    gemeente = document.getElementById("gemeente").value;
    volwassenen = document.getElementById("aantal-volwassenen").value;
    kinderen = document.getElementById("aantal-kinderen").value;

    teltijden = 0;
    allescorrect = true;

    // controle voornaam 
    if (voornaam.length == 0) {
        document.getElementById("voornaam_error").innerHTML = "Vul je naam in!!";
        allescorrect = false;
    } else {
        controleervoornaam();
    }

    // controle achternaam
    if (achternaam.length == 0) {
        document.getElementById("achternaam_error").innerHTML = "Vul je achternaam in!!";
        allescorrect = false;
    } else {
        controleerachternaam();
    }

    // controle straatnaam
    if (straat.length == 0) {
        document.getElementById("straat_error").innerHTML = "Vul je straatnaam in!!"
        allescorrect = false;
    } else {
        controleerstraat();
    }

    // controle straatnummer
    if(straatnummer.length == 0) {
        document.getElementById("straatnummer_error").innerHTML = "Vul je straatnummer in!!";
        allescorrect = false;
    } else {
        controleerStraatnummer();
    }

    // controle busnummer
    if(bus == "") {
        document.getElementById("bus_error").innerHTML = ""
        allescorrect = true
    } else if (bus.search(/^\d/) == -1){
        document.getElementById("bus_error").innerHTML = "Minstens 1 cijfer!";
        allescorrect = false;
    } else if (bus > 100) {
        document.getElementById("bus_error").innerHTML = "je mag niet hoger als 100 ingeven!";
        allescorrect = false;
    } else if (bus == 0) {
        document.getElementById("bus_error").innerHTML = "je moet hoger als 0 ingeven";
        allescorrect = false;
    } else {
        document.getElementById("bus_error").innerHTML = "";
    }

    // controle postcode
    if(postcode.length == 0) {
        document.getElementById("postcode_error").innerHTML = "Vul je postcode in!!";
        allescorrect = false;
    } else {
        controleerPostcode();
    }

    // controle email 
    if(email.length == 0){
        document.getElementById("email_error").innerHTML = "Vul je E-mail Address in!!";
        allescorrect = false;
    } else {
        controleerEmail();
    }

    // controle aankomstdatum
    if (aankomstdatum.length == 0) {
        document.getElementById("aankomst_error").innerHTML = "Vul je datum in!!"
        allescorrect = false;
    } else {
        controleeraankomst()
    }

    // controle vertrek
    if (vertrek.length == 0) {
        document.getElementById("vertrek_error").innerHTML = "Vul je aantal in!!"
        allescorrect = false;
    } else {
        controleervertrek()
    }
    
    // controle eettijden
    let length = alletijden.length
    for (let i =  0; i < length; i++) {
        if (alletijden[i].checked) {
            teltijden++;
        }
    }
    if (teltijden == 0) {
        document.getElementById("eettijden_error").innerHTML = "Kies minstens 1!!";
        allescorrect = false;
    } else {
        document.getElementById("eettijden_error").innerHTML = "";
        ontbijt = "ontbijt = " + alletijden[0].checked;
        middag = "middag = " + alletijden[1].checked;
        avond = "avond = " + alletijden[2].checked;
    }

    // controle nummer
    if (nummer.length == 0) {
        document.getElementById("nummer_error").innerHTML = "Vul je telefoon nummer in!!";
        allescorrect = false;
    } else {
        controleernummer()
    }

    // controle gemeente
    if (gemeente.length == 0) {
        document.getElementById("gemeente_error").innerHTML = "Vul je gemeente in!!";
        allescorrect = false;
    } else {
        controleergemeente()
    }

    // controle volwassenen
    if (volwassenen.length == 0) {
        document.getElementById("volwassenen_error").innerHTML = "Vul je aantal in!!";
        allescorrect = false;
    } else {
        controleervolwassenen()
    }

    // controle kinderen
    if (kinderen.length == 0) {
        document.getElementById("kinderen_error").innerHTML = "Vul je aantal in!!";
        allescorrect = false;
    } else {
        controleerkinderen()
    }

    // controle geselcteerde kamers
    if (geselecteerdekamer == 0) {
        document.getElementById("kamers_error").innerHTML = "Kies een optie!!";
        allescorrect = false;
    } else {
        document.getElementById("kamers_error").innerHTML = "";
    }

    // formulier versturen
    
    if (allescorrect) {
        alert("Je formulier is goed verstuurd")
    }
}

verstuur()