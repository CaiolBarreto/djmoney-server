import { Router } from "express";  
import {TransitionController }from "../controllers/TransitionController";

const transitionController = new TransitionController();

const transitionRoute = Router();

transitionRoute.post("/", transitionController.create);

export { transitionRoute };