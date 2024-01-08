import "reflect-metadata"
import express from "express";
import cors from "cors";
import { AppDataSource } from './database/data-source';
import routers from "./app/routes/routes";

const PORT = 8080

const app = express();

app.use(cors());

app.use(express.json());

app.use(routers);


AppDataSource.initialize()
    .then(async () => {
        console.log("Database - OK");
        app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
    })
    .catch(error => {
        console.error("Error initializing database:", error);
    });
