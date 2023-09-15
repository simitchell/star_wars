'use strict'

const planetArrayFormEl = document.querySelector('#planetArrayForm');
const speciesArrayFormEl = document.querySelector('#speciesArrayForm');

document.addEventListener('DOMContentLoaded', function () {
    console.log('DOM IS READY');

    const planet = document.querySelector('#starWarsPlanet');
    const species = document.querySelector('#starWarsSpecies');

    const planetUrl = "https://swapi.dev/api/planets/";
    get(planetUrl)
        .then(function (response) {
            console.log('Planet Results: ', response);
            showPlanet(response.results[1].name, planet);
            makePlanetList(response.results.map(x => {
                console.log(x.name);
                return(x.name);
            }));
            // console.log(response.results);
        })
    const speciesUrl = "https://swapi.dev/api/species/";
    get(speciesUrl)
        .then(function (response) {
            console.log('Species Results: ', response);
            showSpecies(response.results[2].name, species);
            makeSpeciesList(response.results.map(y => {
                console.log(y.name);
                return(y.name);
            }));
        })


    function showPlanet(info, element) {
        element.innerText = info;
    }


    function showSpecies(info, element) {
        element.innerText = info;
    }

    function makePlanetList(planetArray) {
        console.log(planetArray);
        const selectEl = document.getElementById('planetSelect');
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

    function makeSpeciesList(speciesArray) {
        console.log(speciesArray);
        const selectEl = document.getElementById('speciesSelect');
        speciesArray.map(function (any) {
            //create an option element
            const option = document.createElement('option');
            //define option attributes
            option.value = any;
            option.text = any;
            // append the option to the <select>
            selectEl.appendChild(option);
        });
        //append the <select> to the <form>
        speciesArrayFormEl.append(selectEl);
    }

    planetArrayFormEl.addEventListener('submit', {
    });

    speciesArrayFormEl.addEventListener('submit', {
    });
});