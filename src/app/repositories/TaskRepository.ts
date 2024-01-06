import { Task } from "../entities/Task";
import { ITask } from "../interfaces/ITask";
import { AppDataSource } from "../../database/data-source";

const taskRepository = AppDataSource.getRepository(Task);

const getTasks = (): Promise<ITask[]> => { 
    return taskRepository.find();
};

export default { getTasks };
