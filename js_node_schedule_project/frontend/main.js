import 'core-js/stable';
import 'regenerator-runtime/runtime';
import './assets/css/style.css';

import * as menuController from './assets/js/burguerMenu';
import { footerControll } from './assets/js/responsivnessFooterController';

window.addEventListener('load', footerControll);
window.addEventListener('resize', footerControll);

const menuIcon = document.querySelector('span#burguer');
menuIcon.addEventListener('click', menuController.showMenu);
