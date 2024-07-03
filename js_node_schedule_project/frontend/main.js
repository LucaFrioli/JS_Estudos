import 'core-js/stable';
import 'regenerator-runtime/runtime';
import './assets/css/style.css';

import * as menuController from './assets/js/burguerMenu';
import { footerControll } from './assets/js/responsivnessFooterController';
import saveTasks from './assets/js/tasksPage/realizeSubmition';

window.addEventListener('load', footerControll);
window.addEventListener('resize', footerControll);

const menuIcon = document.querySelector('span#burguer');
menuIcon.addEventListener('click', menuController.showMenu);

if (window.location.pathname === '/tasks') {
	const taskPage = document.querySelector('main#tasksPage');
	const saveTasksButton = taskPage.querySelector('button.saveTasks');
	saveTasksButton.addEventListener('click', saveTasks);
}
