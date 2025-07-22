import { getTasks, createTask, findTask } from 
    "../controller/task-controller-mongo.js";

import express from 'express';
const TaskRouter = express.Router();

TaskRouter.post('/', createTask);
TaskRouter.get('/search/:q', findTask);
TaskRouter.get('/', getTasks);

export default TaskRouter;