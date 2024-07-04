import 'core-js/stable';
import 'regenerator-runtime/runtime';
import './assets/css/style.css';

import * as menuController from './assets/js/burguerMenu';
import { footerControll } from './assets/js/responsivnessFooterController';
import saveTasks from './assets/js/tasksPage/realizeSubmition';
import loadingState from './assets/js/tasksPage/loadingState';

window.addEventListener('load', footerControll);
window.addEventListener('resize', footerControll);

const menuIcon = document.querySelector('span#burguer');
menuIcon.addEventListener('click', menuController.showMenu);

if (window.location.pathname === '/tasks') {
	window.addEventListener('load', loadingState);
	const taskPage = document.querySelector('main#tasksPage');
	const saveTasksButton = taskPage.querySelector('button.saveTasks');
	saveTasksButton.addEventListener('click', saveTasks);
}
