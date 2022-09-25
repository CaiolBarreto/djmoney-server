import { prisma } from "../prisma";
import { Transition } from "@prisma/client";
import { CreateTransitionDTO } from "../DTOs/TransitionDTO";

type TransitionType = {
  type: string;
	title: string;
	value: number;
	category: string;
	date: string;
}
export class CreateTransition {
  async create(transitionData: TransitionType): Promise<Transition> {
    return await prisma.transition.create({ data: transitionData })
  }

  async getAll(): Promise<Transition[]> {
    return await prisma.transition.findMany();
  }

  async getById(id: string): Promise<Transition | null> {
    return await prisma.transition.findUnique({ where: { id } });
  }

  async delete(id: string) {
    return await prisma.transition.delete({ where: { id } });
  }

  async update(id: string, transitionData: TransitionType): Promise<Transition | null> {
    await prisma.transition.update({ where: { id }, data: transitionData })
    return await prisma.transition.findUnique({ where: { id } });
  }
}