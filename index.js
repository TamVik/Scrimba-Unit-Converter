let number = 20;
let numberElement = document.getElementById("number-element");
numberElement.textContent = number;


function meterToFeet() {
    let result = (number * 3.2808399).toFixed(3);
    let meterFeet = document.getElementById("meter-feet")
    meterFeet.textContent = `${number} meters = ${result} feet`;
}

meterToFeet()

function feetToMeter() {
    let result = (number * 0.3048000).toFixed(3);
    let feetMeter = document.getElementById("feet-meter");
    feetMeter.textContent = `${number} feet = ${result} meters`;
}

feetToMeter()

function litersToGallons() {
    let result = (number * 0.264172052).toFixed(3);
    let litersGallons = document.getElementById("liters-gallons");
    litersGallons.textContent = `${number} liters = ${result} gallons`;
}

litersToGallons()

function gallonsToLiters() {
    let result = (number * 3.78541178).toFixed(3);
    let gallonsLiters = document.getElementById("gallons-liters");
    gallonsLiters.textContent = `${number} gallons = ${result} liters`;
}

gallonsToLiters()

function kilogramsToPounds() {
    let result = (number * 2.20462262).toFixed(3);
    let kilogramsPounds = document.getElementById("kilograms-pounds");
    kilogramsPounds.textContent = `${number} kilos = ${result} pounds`;
}

kilogramsToPounds();

function poundsToKilograms() {
    let result = (number * 0.45359237).toFixed(3);
    let poundsKilograms = document.getElementById("pounds-kilograms");
    poundsKilograms.textContent = `${number} pounds = ${result} kilos`;
}

poundsToKilograms()