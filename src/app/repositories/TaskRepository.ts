import { Task } from "../entities/Task";
import { ITask } from "../interfaces/ITask";
import { AppDataSource } from "../../database/data-source";
import { FindManyOptions } from "typeorm";

const taskRepository = AppDataSource.getRepository(Task);

const getTasks = (): Promise<ITask[]> => { 
    const options: FindManyOptions<Task> = {
        order: { created_at: 'ASC' },
    };
    return taskRepository.find(options);
};

const createTask = async (taskData: ITask): Promise<ITask> => {
    const newTask = taskRepository.create(taskData);
    return await taskRepository.save(newTask);
};

const updateTask = async (taskId: string, updatedTaskData: ITask): Promise<ITask | null> => {
    const existingTask = await taskRepository.findOne({ where: { id: taskId } });

    if (!existingTask) {
        return null; 
    }

    taskRepository.merge(existingTask, updatedTaskData);
    return await taskRepository.save(existingTask);
};

const deleteTask = async (taskId: string): Promise<boolean> => {
    const existingTask = await taskRepository.findOne({ where: { id: taskId } });

    if (!existingTask) {
        return false; 
    }

    await taskRepository.remove(existingTask);
    return true; 
};

const isTaskDescriptionDuplicate = async (description: string): Promise<boolean> => {
    const existingTask = await taskRepository.findOne({ where: { description } });
    return !!existingTask;
};

const getTaskById = async (taskId: string): Promise<ITask | null> => {
    return taskRepository.findOne({ where: { id: taskId } }) || null;
};

export default {
    getTasks,
    createTask,
    updateTask,
    deleteTask,
    isTaskDescriptionDuplicate,
    getTaskById
};
