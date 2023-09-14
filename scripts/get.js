'use strict';

function get(url) {
    return fetch(url)
        .then(function (results) {
            return results.json();
        })
        .then(function (data) {
            return data;
        })
        .catch(function (error) {
            console.log("Error: ", error);
        })
};
