import 'core-js/stable';
import 'regenerator-runtime/runtime';
import './assets/css/style.css';

import * as menuController from './assets/js/burguerMenu'

const menuIcon = document.querySelector('span#burguer');

menuIcon.addEventListener('click', menuController.showMenu);
