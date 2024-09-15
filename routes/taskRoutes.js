import express from 'express';
import { getTasks, addTask, getLogs } from '../controllers/taskController.js';

const router = express.Router();

router.get('/', getTasks);
router.post('/add', addTask);
router.get('/logs', getLogs);

export default router;
