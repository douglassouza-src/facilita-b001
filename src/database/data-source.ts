import "reflect-metadata";
import { DataSource } from 'typeorm';
import { CreateTasksTable1704564284956 as TasksTable} from './migrations/1704564284956-CreateTasksTable';
import { Task } from '../app/entities/Task';


export const AppDataSource = new DataSource({
    type: "postgres",
    host: "babar.db.elephantsql.com",
    port: 5432,
    username: "uazicvgq",
    password: "NA2cvBUuQrugixfjcDPz3Bt3-jzMqnyT",
    database: "uazicvgq",
    synchronize: true,
    logging: true,
    entities: [Task],
    migrations: [TasksTable],
    subscribers: [],
});
