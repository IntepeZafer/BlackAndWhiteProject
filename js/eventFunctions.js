'use strict';
import { elementFunctions } from "./elementsFunctions.js";
function eventFunctions(){
    const data = elementFunctions();
    data.forEach((array) => {
        array.style.display = "block";
        array.style.display = "opacity";
        array.style.display = "none";
    })
    data = elementFunctions();
}
export {eventFunctions};