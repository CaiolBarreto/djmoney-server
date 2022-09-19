import { Request, Response } from "express";
import { CreateTransition } from "../repositories/TransitionRepository";

export class TransitionController {
  async create(req: Request, res: Response) {
    const { type, title, value, category, date } = req.body;

    const transitionData = { type, title, value, category, date }

    const transitionRepository = new CreateTransition();

    const transition = await transitionRepository.create(transitionData);

    return res.status(201).json(transition);
  }
}