import { Router } from "express";  
import {TransitionController }from "../controllers/TransitionController";

const transitionController = new TransitionController();

const transitionRoute = Router();

transitionRoute.route("/")
  .post(transitionController.create)
  .get(transitionController.readAll)

transitionRoute.route("/:transitionId")
  .get(transitionController.read)
  .delete(transitionController.delete)
  .patch(transitionController.patch)

export { transitionRoute };