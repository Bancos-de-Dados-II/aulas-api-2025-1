import Task from '../model/task-mongo.js';

export async function createTask(req,res){
    const task = await Task.create(req.body);
    res.status(201).json(task);
}

export async function getTasks(req,res){
    const tasks = await Task.find();
    res.status(200).json(tasks);
}