import express, { RouterOptions } from 'express';
import ClassesController from './controllers/ClassesControllers';
import ConnectionControllers from './controllers/ConnectionControllers';

const routes = express.Router();
const classesControllers = new ClassesController;
const connectionControllers = new ConnectionControllers;

routes.get('/classes', classesControllers.index);
routes.post('/classes', classesControllers.create);

routes.get('/connections', connectionControllers.index);
routes.post('/connections', connectionControllers.create);

export default routes;