import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema({
    name: String,
    cronExpression: String,
    status: {
        type: String,
        default: 'Active',
    },
});

const Task = mongoose.model('Task', taskSchema);
export default Task;
