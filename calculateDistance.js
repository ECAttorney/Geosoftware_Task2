"use strict"

//  Längen- bzw. Breitengrade von dem vorgegeben Punkt in jeweils einer Variable speichern
var lat1 = point[1];
var lon1 = point[0];

// Array erstellen, welche so groß wie "cities" ist
var distances= Array.apply(null, Array[cities.length])

// Über diese Variable wird später die Auflistung auf der HTML-Seite ausgegeben
var ausgabe = "";

// Funktion, welche die Distanz zwischen 2 Punkten berechnet. Quelle: https://www.movable-type.co.uk/scripts/latlong.html
function calculateDistance(){

    for(var i = 0; i < cities.length; i++){

        var lon2 = cities[i][0];
        var lat2 = cities[i][1];
    
        const R = 6371e3; 
        const φ1 = lat1 * Math.PI/180; 
        const φ2 = lat2 * Math.PI/180;
        const Δφ = (lat2-lat1) * Math.PI/180;
        const Δλ = (lon2-lon1) * Math.PI/180;
    
        const a = Math.sin(Δφ/2) * Math.sin(Δφ/2) +
              Math.cos(φ1) * Math.cos(φ2) *
              Math.sin(Δλ/2) * Math.sin(Δλ/2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    
        const d = Math.round(R * c); // Hier wird die Distanz gerundet
    
        distances[i] = d; // Speicherung der Distanz in einem Array

    }

// Hier wird das Array nun mittels Bubblesort der Entfernung nach aufsteigend sortiert
bubbleSort(distances);

for(var i = 0; i < distances.length; i++) {

ausgabe = ausgabe + distances[i] + " Meter <br />";

}

}

// Funktion um ein Array mittels Bubblesort zu sortieren. Quelle: https://flexiple.com/bubble-sort-javascript
let bubbleSort = (inputArr) => {
    let len = inputArr.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            if (inputArr[j] > inputArr[j + 1]) {
                let tmp = inputArr[j];
                inputArr[j] = inputArr[j + 1];
                inputArr[j + 1] = tmp;
            }
        }
    }
    
};

calculateDistance();