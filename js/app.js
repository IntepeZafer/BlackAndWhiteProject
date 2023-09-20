'use strict';
import { eventFunctions } from "./eventFunctions.js";
import { elementFunctions } from "./elementsFunctions.js";
const btnIcon = document.querySelector(".btnIcon");
btnIcon.addEventListener("click" , (event) => {
    eventFunctions();
    event.preventDefault();
})