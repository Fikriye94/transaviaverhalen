/*jslint browser:true */

// Filter button

var button = document.querySelector('#button');
var content = document.querySelector('#content');

content.classList.add('hidden');

button.addEventListener("click", function () {

    "use strict";
    content.classList.toggle('hidden');

});