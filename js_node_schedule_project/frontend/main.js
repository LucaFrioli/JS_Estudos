import 'core-js/stable';
import 'regenerator-runtime/runtime';
import './assets/css/style.css';

import * as menuController from './assets/js/burguerMenu';
import { footerControll } from './assets/js/responsivnessFooterController';
import saveTasks from './assets/js/tasksPage/realizeSubmition';
import loadingState from './assets/js/tasksPage/loadingState';
import validation from './assets/js/formValidations/main.mjs'

window.addEventListener('load', footerControll);
window.addEventListener('resize', footerControll);

window.addEventListener('load', validation(window.location.pathname))

const menuIcon = document.querySelector('span#burguer');
menuIcon.addEventListener('click', menuController.showMenu);

if (window.location.pathname === '/tasks') {
	window.addEventListener('load', loadingState);
	const taskPage = document.querySelector('main#tasksPage');
	const saveTasksButton = taskPage.querySelector('button.saveTasks');
	saveTasksButton.addEventListener('click', saveTasks);
}
