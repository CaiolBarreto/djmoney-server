import { NextFunction, Request, Response } from "express";
import { CreateTransition } from "../repositories/TransitionRepository";

export class TransitionController {
  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const { type, title, value, category, date } = req.body;

      const transitionData = { type, title, value, category, date };
  
      const transitionRepository = new CreateTransition();
  
      const transition = await transitionRepository.create(transitionData);
  
      res.locals = {
        status: 201,
        message: 'Transition created',
        data: transition,
      };

      return next();
    } catch (error) {
      return next(error);
    }
  }
}