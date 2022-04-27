"use strict"

/**
 * @description This function takes a point and a list of points. It calculates the distance between the point to all the other points in the list.
 * @param {newPoint} - this point is used for the distance calculation. It is recieved through the function calculatePoint directly taken from the textarea
 * source: https://www.movable-type.co.uk/scripts/latlong.html
 */
function calculateDistance(newPoint){

    // number of pois
    let countOfPois = (pois.features.length)

    // testing
    console.log(countOfPois);

    var distances= Array.apply(null, Array[countOfPois])

    for(var i = 0; i < countOfPois; i++){

        var lon1 = newPoint.coordinates[0];
        var lat1 = newPoint.coordinates[1];

        var lon2 = pois.features[i].geometry.coordinates[0]
        var lat2 = pois.features[i].geometry.coordinates[1]
    
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

    // Array gets sorted with bubblesort
    bubbleSort(distances);

    // definition of the output variable 
    var ausgabe = "";

    // in this loop the output variable gets filled with the sorted Array
    for(var i = 0; i < distances.length; i++) {

    ausgabe = ausgabe + distances[i] + " Meter <br />";

    }

    // output to the HTML page
    document.getElementById("ausgabe").innerHTML = ausgabe;

}

/**
 * @description Function to do a bubblesort with an ARRAY
 * @param {inputArr} - unssorted Array, which should be sorted after the function is over
 * source: https://flexiple.com/bubble-sort-javascript
 * Arrow-Function 
 */
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