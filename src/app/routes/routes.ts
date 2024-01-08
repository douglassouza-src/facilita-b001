import { Router } from "express";
import { taskRouter } from "../controllers/TaskController";

const routers = Router();

routers.use('/tasks', taskRouter);

routers.use((_req, res) => {
    res.status(404)
        .send("Resource not found. Use '/tasks' to access Tasks.");
  });

export default routers;