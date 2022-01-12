'use strict';

function getEl(selector) {
    return document.querySelector(selector);
}

const btnEl = getEl(".btn");
console.log(btnEl);

const menuEl = getEl(".menu");
console.log(menuEl);

const containerEl = getEl(".container");
console.log(containerEl);

const titleEl = getEl(".title");
console.log(titleEl);

const textEl = getEl(".text");
console.log(textEl);