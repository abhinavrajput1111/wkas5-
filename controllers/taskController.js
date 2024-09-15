import Task from '../models/Task.js';
import Log from '../models/Log.js';

// Get all tasks
export const getTasks = async (req, res) => {
    const tasks = await Task.find();
    res.json(tasks);
};

// Add new task
export const addTask = async (req, res) => {
    const { name, cronExpression } = req.body;
    const task = await Task.create({ name, cronExpression });
    res.json(task);
};

// Get task logs
export const getLogs = async (req, res) => {
    const logs = await Log.find();
    res.json(logs);
};
