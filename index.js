"use strict"

//Variables

let divContainer = document.getElementById("cities");
let userInput = prompt("Skriv in en stad");
let h2Element = document.querySelector("h2");
let currentCity = 0;

//Start of all functions


function showCity() {
    currentCity = findCity(userInput);
 
 
    if (currentCity) {
        h2Element.textContent = currentCity.name + " (" + currentCity.country + ")";
        document.title = currentCity.name;
    } else {
        h2Element.textContent = userInput + " finns inte i databasen.";
        document.title = "not found";
    }
 }
 