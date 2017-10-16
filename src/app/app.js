import _ from 'lodash';
import './app.css';

function component () {

    var element = document.createElement('div');

    element.innerHTML = _.join(['hallo', 'Welt'], ' ');
    element.classList.add('bonjour');

    return element;
}

document.body.appendChild(component());