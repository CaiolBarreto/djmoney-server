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
        data: transition
      };

      return next();
    } catch (error) {
      return next(error);
    }
  }

  async readAll(req: Request, res: Response, next: NextFunction) {
    try {
      const transitionRepository = new CreateTransition();
      
      const transitions = await transitionRepository.getAll();

      res.locals = {
        status: 200,
        data: transitions
      }

      return next();
    } catch (error) {
      return next(error);
    }
  }

  async read(req: Request, res: Response, next: NextFunction) {
    try {
      const { transitionId } = req.params;

      const transitionRepository = new CreateTransition();

      const transition = await transitionRepository.getById(transitionId);

      res.locals = {
        status: 200,
        data: transition
      }

      return next();
    } catch (error) {
      return next(error);
    }
  }

  async patch(req: Request, res: Response, next: NextFunction) {
    try {
      const { transitionId } = req.params;

      const { type, title, value, category, date } = req.body;

      const transitionData = { type, title, value, category, date };
  
      const transitionRepository = new CreateTransition();

      const transition = await transitionRepository.update(transitionId, transitionData);

      res.locals = {
        message: 'Transition patched',
        status: 200,
        data: transition
      }

      return next();
    } catch (error) {
      return next(error);
    }
  }

  async delete(req: Request, res: Response, next: NextFunction) {
    try {
      const { transitionId } = req.params;

      const transitionRepository = new CreateTransition();

      await transitionRepository.delete(transitionId);

      res.locals = {
        message: 'Transition deleted',
        status: 200
      }

      return next();
    } catch (error) {
      return next(error);
    }
  }
}