import {
    firstName as surname,
    lastName,
    year
} from './profile.js';

function setName(element) {
    element.textContent = firstName + ' ' + lastName;
}