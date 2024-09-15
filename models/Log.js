import mongoose from 'mongoose';

const logSchema = new mongoose.Schema({
    task: String,
    status: String,
    error: String,
    timestamp: {
        type: Date,
        default: Date.now,
    },
});

const Log = mongoose.model('Log', logSchema);
export default Log;
