import { Router } from "express";
import { transitionRoute } from "./transitionRoute";

const routes = Router();

routes.use("/transition", transitionRoute);

export { routes };