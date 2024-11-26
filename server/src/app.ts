import { API_PREFIX } from "@shared/constants";
import express, { json, urlencoded } from "express";
import cors from "cors";
import todoRoutes from "./routes/todo-entity";

const port = Number(process.env.PORT) || 8080;
const app = express();

// Init Express
app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));
app.use(`/${API_PREFIX}/todos`, todoRoutes);

app.listen(port, () => console.log(`Server listening on ${port.toString()}!`));
