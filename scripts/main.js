'use strict'

const planetArrayFormEl = document.querySelector('#planetArrayForm');

document.addEventListener('DOMContentLoaded', function () {
    console.log('DOM IS READY');

    const planet = document.querySelector('#starWarsPlanet');
    const species = document.querySelector('#starWarsSpecies');

    const planetUrl = "https://swapi.dev/api/planets/";
    get(planetUrl)
        .then(function (response) {
            console.log('Planet Results: ', response);
            showPlanet(response.results[1].name, planet);
        })
    const speciesUrl = "https://swapi.dev/api/species/";
    get(speciesUrl)
        .then(function (response) {
            console.log('Species Results: ', response);
            showSpecies(response.results[2].name, species);
        })
});

function showPlanet(info, element) {
    element.innerText = info;
}

function showSpecies(info, element) {
    element.innerText = info;
}

function makePlanetList(planetArray) {
    console.log(planetArray);
    const selectEl = document.createElement('select');
    planetArray.map(function (any) {
        // create an option element
        const option = document.createElement('option');
        // define option attributes
        option.value = any;
        option.text = any;
        // append the option to the <select>
        selectEl.appendChild(option);
    });
    // append the <select> to the <form>
    planetArrayFormEl.append(selectEl);
}

planetArrayFormEl.addEventListener('submit', {

});

// I CAN'T SUCCESSFULLY CALL THE FUNCTION MAKEPLANETLIST !!!!!
