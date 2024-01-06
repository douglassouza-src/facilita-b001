import { Router } from "express";
import { taskRouter } from "../controllers/TaskController";

const routers = Router();

routers.use('/tasks', taskRouter);

export default routers;