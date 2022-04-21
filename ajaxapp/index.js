console.log("index.js: loaded");

// DOM Sample
const heading = document.querySelector('h2');
const headngText = heading.textContent;
const button = document.createElement('button');
button.textContent = 'Push Me';

document.body.appendChild(button);