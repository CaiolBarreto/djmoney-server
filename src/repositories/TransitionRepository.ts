import { prisma } from "../prisma";
import { Transition } from "@prisma/client";
import { CreateTransitionDTO } from "../DTOs/Transition";

export class CreateTransition {
  async create({
    type, title, value, category, date
}: CreateTransitionDTO): Promise<Transition> {
    
    const transition = await prisma.transition.create({
      data: {
        type,
        title,
        value,
        category,
        date
      }
    })

    return transition;
  }
}