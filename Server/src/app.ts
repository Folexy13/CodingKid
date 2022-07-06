// imports
import express, { Application } from "express";
import cors from "cors";
import morgan from "morgan";
import config from "./Configs";
import router from "./Routes";
import helmet from "helmet";

// Initialising app
const app: Application = express();

// Middlewares
app.use(morgan("combined"));
app.use(express.json());
app.use(cors({ origin: true }));

// Server setup
app.listen(config.PORT, () =>
  console.log(`Server listening on  http://localhost:${config.PORT}`)
);

app.use(helmet());

app.use(router);
