"use strict"

//Variables

let divContainer = document.getElementById("cities");
let userInput = prompt("Skriv in en stad");
let h2Element = document.querySelector("h2");
let currentCity = 0;
let closestCity = 0;
let furthestCity = 0;
let closestDistance = 100000;
let furthestDistance = 0;

//Start of all functions


function showCity() {
    currentCity = findCity(userInput);
 
 
    if (currentCity) {
        h2Element.textContent = currentCity.name + " (" + currentCity.country + ")";
        document.title = currentCity.name;
        highlightCity();
        findClosestAndFurthest();
    } else {
        h2Element.textContent = userInput + " finns inte i databasen.";
        document.title = "not found";
    }
 }
 

 function findCity(cityName) {
    for (let i = 0; i < cities.length; i++) {
        if (cities[i].name.toLowerCase() === cityName.toLowerCase()) {
            return cities[i];
        }
    }
    return undefined;
 }
 