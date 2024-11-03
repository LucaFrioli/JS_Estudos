import Home from '../controllers/Home';
import { Router } from 'express';

const routes = new Router();
const processFunctions = new Home();

routes.get('/', processFunctions.index);

export default routes;
