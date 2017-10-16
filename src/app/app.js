import _ from 'lodash';
import './app.css';
import Icon from '../assets/images/pug.png';
import Data from '../assets/data/data.json';

function component () {

    var element = document.createElement('div');

    // from data file
    _.forEach(Data, (g) => {
        let span = document.createElement('span');
        span.innerHTML = g.greeting;
        element.appendChild(span);
    })

    // styles (basic css not compiled)
    element.classList.add('bonjour');

    // images
    var myIcon = new Image();
    myIcon.src = Icon;

    element.appendChild(myIcon);

    return element;
}

document.body.appendChild(component());