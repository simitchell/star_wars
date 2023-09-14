'use strict'

document.addEventListener('DOMContentLoaded', function () {
    console.log('DOM IS READY');

    const homeWorld = document.getElementById('starwarsinfo');

    fetch("https://swapi.dev/api/species/?cateory=homeworld")
        .then(function (response) {
            // console.log(response.json())
                return response.json();
        })
        .then(function (data) {
            showHomeWorld(data.results[13], homeWorld);
            return data;
        });
});

function showHomeWorld(info, element) {
    element.innerText = info;
}