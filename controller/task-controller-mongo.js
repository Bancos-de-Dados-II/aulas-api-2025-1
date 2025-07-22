import Task from '../model/task-mongo.js';

export async function createTask(req,res){
    const task = await Task.create(req.body);
    res.status(201).json(task);
}

export async function getTasks(req,res){
    const tasks = await Task.find();
    res.status(200).json(tasks);
}

export async function findTask(req, res){
    const texto = req.params.q;
    const tasks = await Task.find(
        {$text:{$search: texto}});
    res.status(200).json(tasks);
}