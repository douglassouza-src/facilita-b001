import { Request, Response, Router } from "express";
import { Task } from "../entities/Task";
import { ITask } from './../interfaces/ITask';
import TaskRepository from './../repositories/TaskRepository';

export const taskRouter = Router();

taskRouter.get('/', async (req: Request, res: Response): Promise<Response> => {
    const tasks = await TaskRepository.getTasks();
    return res.status(200).json(tasks)})