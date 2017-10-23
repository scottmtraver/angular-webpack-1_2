import * as _ from 'lodash';
import printMe from './utilities/print';

function component () {

    var element = document.createElement('div');
    var btn = document.createElement('button');

    element.innerHTML = _.join(['hallo', 'Welt'], ' ');


    btn.innerHTML = 'Press Here';
    btn.onclick = printMe;

    element.appendChild(btn);

    return element;
}

document.body.appendChild(component());