import { Request, Response, Router } from "express";
import { Task } from "../entities/Task";
import { ITask } from './../interfaces/ITask';
import TaskRepository from './../repositories/TaskRepository';

export const taskRouter = Router();

//getAlltasks
taskRouter.get('/', async (req: Request, res: Response): Promise<Response> => {
    try {
        const tasks = await TaskRepository.getTasks();
        return res.status(200).json(tasks);
    } catch (error) {
        console.error(error); 
        return res.status(500).json({ error: 'Server Error' });
    }
});

//getByIdOnly
taskRouter.get('/:id', async (req: Request, res: Response): Promise<Response> => {
    try {
        const taskId: string = req.params.id;

        const task = await TaskRepository.getTaskById(taskId);

        if (!task) {
            return res.status(404).json({ error: 'Tarefa NÃO localizada' });
        }

        return res.status(200).json(task);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Server Error' });
    }
});


taskRouter.post('/', async (req: Request, res: Response): Promise<Response> => {
    try {
        const newTaskData: ITask = req.body;

        if (!newTaskData.description || newTaskData.description.trim().length < 3) {
            return res.status(400).json({ error: 'A tarefa deve ter pelo menos 3 caracteres' });
        }

        if (await TaskRepository.isTaskDescriptionDuplicate(newTaskData.description)) {
            return res.status(400).json({ error: 'Tarefa já existente. Insira uma nova tarefa.' });
        }

        const newTask = await TaskRepository.createTask(newTaskData);
        return res.status(201).json(newTask);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Server Error' });
    }
});

taskRouter.put('/:id', async (req: Request, res: Response): Promise<Response> => {
    try {
        const taskId: string = req.params.id;
        const updatedTaskData: ITask = req.body;

        if (!updatedTaskData.description || updatedTaskData.description.trim().length < 3) {
            return res.status(400).json({ error: 'A tarefa deve ter pelo menos 3 caracteres' });
        }

        const existingTask = await TaskRepository.getTaskById(taskId);

        if (!existingTask) {
            return res.status(404).json({ error: 'Tarefa NÂO localizada' });
        }

        if (updatedTaskData.description !== existingTask.description && await TaskRepository.isTaskDescriptionDuplicate(updatedTaskData.description)) {
            return res.status(400).json({ error: 'Tarefa já existente. Insira uma nova tarefa.' });
        }

        const updatedTask = await TaskRepository.updateTask(taskId, updatedTaskData);

        if (!updatedTask) {
            return res.status(404).json({ error: 'Tarefa NÂO localizada' });
        }

        return res.status(200).json(updatedTask);
    } catch (error) {
        console.error(error); 
        return res.status(500).json({ error: 'Server Error' });
    }
});

taskRouter.delete('/:id', async (req: Request, res: Response): Promise<Response> => {
    try {
        const taskId: string = req.params.id;
        const deletionResult = await TaskRepository.deleteTask(taskId);

        if (!deletionResult) {
            return res.status(404).json({ error: 'Tarefa NÂO localizada' });
        }

        return res.status(204).send();
    } catch (error) {
        console.error(error); 
        return res.status(500).json({ error: 'Server Error' });
    }
});


